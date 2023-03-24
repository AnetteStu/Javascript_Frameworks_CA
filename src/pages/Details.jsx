import "../styling/css/details.css";

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "../components/styledComponents/Styled_components";
import { API } from "../constants/API";

import { useDispatch } from "react-redux";
import { addToCart } from "../features/counter/cartSlice";
import Rating from "../components/Rating";

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
      return (
          <RenderProductCard
          id = {items.id}
          title={items.title}
          price= {items.price}
          discountedPrice= {isOnSale ? items.discountedPrice : items.price}
          description = {items.description}
          tags = {items.tags
          ? items.tags.map((tag) => (
            <span className="tag" key={id}>{tag}</span>
          ))
          : <div>No tags</div>}
          imageUrl = {items.imageUrl}

          review = {items.reviews
          ? items.reviews.map((review) => (
                <div className="reviewComponent" key={review.id}>
                  <div className="reviewerInfo">
                    <h3 className="reviewUsername"> {review.username}</h3>
                    <div> {review.rating} <i className="fa-solid fa-star"></i></div>
                  </div>
                  <div className="reviewDesc">
                    <p className="review">{review.description}</p>
                    <div className="thumbs">
                      <i className="fa-solid fa-thumbs-up"></i>
                      <i className="fa-solid fa-thumbs-down fa-flip-horizontal"></i>
                    </div>
                  </div>
                </div>
              )) 
          : []
          }
          rating = {items.rating}
        />
      )
    }
  return (<div>Nothing to be returned</div>)
}

export function RenderProductCard({ id, title, description, price, tags, imageUrl, review, discountedPrice, rating}) {
  const dispatch = useDispatch();
  const origPrice = price;
  const discPrice = (discountedPrice)
    const isDiscounted = parseFloat(100 - (100 * discPrice / origPrice).toFixed(2))
  
  if (id) {
    return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Shop</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{title}</li>
        </ol>
      </nav>
      <div className="productDetailsPage" key={id}>
        <div className="productImage">
          <img src={imageUrl} alt={title}/>
        </div>
        <div className="detailsWrapper">
          <div  className="productDetails">
            <div className="firstDetails">
              <div className="pageHeader"> 
                <div className="detailsHeaderTitle">
                  {title}
                </div>   
                <span> {rating} <i className="fa-solid fa-star"></i></span>
              </div>
              {/* <div className="pageHeader"> {title} <Rating stars={rating}/></div> */}
              <div className="subInfo">
               {(price > discountedPrice) ? 
                <div className="detailsPrice">
                  <del className=" oldPrice">
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
              {(tags.length) >0 ? tags : <div>No tags</div>}
            </div>
          </div>
          <div>
            {(review.length) >0 ? review : <div className="reviewComponent">No reviews yet!</div>}
          </div>
        </div>
      </div>    
      </>
    )
  } else {
    
    return (<div>OOPS! Nothing to see here, <Link to="/">Go Back</Link>?</div>)
  }
  
  }