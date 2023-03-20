import "../styling/css/details.css";

import { Link, useParams } from "react-router-dom";
// import style from "../css/productcard.module.css"
import { useEffect, useState } from "react";
import { Button } from "../components/styledComponents/Buttons";
import { API } from "../constants/API";

import { useDispatch } from "react-redux";
import { addToCart } from "../features/counter/cartSlice";

// QuantityInput with buttons

/**
 * Pulls param from URL and displays detailed info from the returned product
 * @returns
 * id, key, title, price, discountedPrice
 */

export default function Details() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  let{id} = useParams();
  const url = API+"/"+id

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);

        const res = await fetch(url);
        const json = await res.json();
        setItems(json);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false)
      }
    }
    
    getData()
    }, [url]);

    document.title = `${items.title}`

  if (isLoading || !items) {
    return (
        <div className='loadingDetails'><i className="fa-solid fa-gear"></i></div>
    )
  }

  if (isError) {
    return (
      <div className='container'>
        <h1 className="pageHeader">Fetching API Example</h1>
        <div>Error loading data!</div>
      </div>
    )
  }

  
  let isOnSale = false;
    if ((items.price) > (items.discountedPrice)) {
      isOnSale = true
    }

    if (items) {
      // console.log(items.reviews);
      return (
        <RenderProductCard
        id = {items.id}
        title={items.title}
        price= {items.price}
        discountedPrice= {isOnSale ? items.discountedPrice : items.price}
        description = {items.description}
        tags = {items.tags}
        imageUrl = {items.imageUrl}

        review = {(items.reviews === null || items.reviews === [] || items.reviews === undefined) 
        ? <div>No reviews yet</div> 
        : items.reviews.map((review) => 
        {
          return (
            <div className="reviewComponent" key={review.id}>
              <div className="reviewerInfo">
                <h3 className="reviewUsername"> {review.username}</h3>
                <div className="reviewRating"> {review.rating} <i className="fa-solid fa-star"></i></div>
              </div>
              <div className="reviewDesc">
                <p className="review">{review.description}</p>
                <div className="thumbs">
                  <i className="fa-solid fa-thumbs-up"></i>
                  <i className="fa-solid fa-thumbs-down fa-flip-horizontal"></i>
                </div>
              </div>
            </div>
          )
        })}
        rating = {items.rating}
      />
      )
    }
  return (<div>Nothing to be returned</div>)
}

export function RenderProductCard({ id, title, description, price, tags, imageUrl, review, discountedPrice, rating}) {
  const dispatch = useDispatch();
  console.log(rating);
  const origPrice = price;
  const discPrice = (discountedPrice)
  // let isDiscounted = origPrice - (origPrice * discPrice).toFixed(2)
  
  const isDiscounted = parseFloat(100 - (100 * discPrice / origPrice).toFixed(2))
  return (
    <>
      <Link to="/">Back</Link> 
      <div className="productDetailsPage" key={id}>
        <div className="productImage">
          <img src={imageUrl} alt={title}/>
        </div>
        <div className="detailsWrapper">
          <div  className="productDetails">
            <div className="firstDetails">
              <h1 className="pageHeader">
                {title}
              </h1>
              {rating} <i className="fa-solid fa-star"></i>
              <div className="subInfo">
               {(price > discountedPrice) ? 
                <div className="detailsPrice">
                  <del className=" oldPrice oldPriceDetails">
                    {price},-
                  </del> 
                  {discountedPrice},-
                  <span className="discountPersentage">
                      {Number(isDiscounted.toFixed(2))}% Off!
                  </span>
                </div>
                  :
                  `${price},-`
               }
                <div className="itemButtons">
                  <Button 
                    onClick={() => 
                      dispatch(addToCart({
                      id, title, imageUrl, price, discountedPrice
                      }))
                    }>Add to cart
                  </Button>
                </div>
              </div>
            <p className="itemDescription">{description}</p>
            </div>
            <div className="secondDetails">
              <div className="itemTag">Tags: </div>
              <span className="tag">{tags}</span>
            </div>
          </div>
          <div className="reviewsWrapper">
            {review}
          </div>
        </div>
      </div>    
      </>
    )
  }