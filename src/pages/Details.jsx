import "../styling/css/details.css";

import { Link, redirect, useParams } from "react-router-dom";
// import style from "../css/productcard.module.css"
import { useEffect, useState } from "react";
import { Button } from "../components/styledComponents/Buttons";
import { API } from "../constants/API";

import { useDispatch } from "react-redux";
import { addToCart } from "../features/counter/cartSlice";

// QuantityInput with buttons

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
    if (items.price > items.discountedPrice) {
      isOnSale = true
    }
    if (items) {
      // console.log(items.reviews);
      return (
        <RenderProductCard
        id = {items.id}
        title={items.title}
        price={!isOnSale ?  items.price : items.discountedPrice }
        description = {items.description}
        tags = {items.tags}
        imageUrl = {items.imageUrl}

        review = {(items.reviews === null || items.reviews === [] || items.reviews === undefined) 
        ? <div>No reviews yet</div> : items.reviews.map((review) => 
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

        // onAddToCartClick = {addToCart}
        // onRemoveFromCartClick = {removeFromCart}
      />
      )
    }
  return (<div>Nothing to be returned</div>)
}

export function RenderProductCard({ id, title, description, price, tags, imageUrl, onAddToCartClick, review}) {
  const dispatch = useDispatch();
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
              <h1 className="pageHeader">{title}</h1>
              <h3 className="subInfo">{price},-
                <div className="itemButtons">
                  <Button 
                    onClick={() => 
                      dispatch(addToCart({
                      id, title, imageUrl, price
                      }))
                    }>Add to cart
                  </Button>
                </div>
              </h3>
              <p>{description}</p>
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

        {/* {this.reviews.map((review) => {
          return (
            <div key={review.id}>
              <h3>{review.username}<span>{review.rating}</span></h3>
              <p>{review.description}</p> 
            </div>
          )
        })} */}        
      </>
    )
  }