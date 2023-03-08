import "../styling/css/details.css";

import { Link, useParams } from "react-router-dom";
// import style from "../css/productcard.module.css"
import { useEffect, useState } from "react";
import { Button } from "../components/styledComponents/Buttons";
import { API } from "../constants/API";

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

    function addToCart() {
      console.log("Added " + items.id);
      localStorage.setItem("product-id", items.id)
    }

    function removeFromCart() {
      const yeet = localStorage.getItem("product-id")
      try {
        if(yeet) {
          localStorage.removeItem("product-id")
          console.log("Yeeted " + yeet);
          return (
            <div>Removed from cart</div>
          )
        } else {
            console.log("Nothing in storage");
            return (
              <div>Nothing to remove</div>
            )
        }
      } catch (error) {
        console.log(error);
      }
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
              <h3 className="reviewUsername"> {review.username} 
                <small className="reviewRating"> {review.rating}</small>
              </h3>
              <p>{review.description}</p>
            </div>
          )
        })}

        onAddToCartClick = {addToCart}
        onRemoveFromCartClick = {removeFromCart}
      />
      )
    }
  return (<div>Nothing to be returned</div>)
}

export function RenderProductCard({ id, title, description, price, tags, imageUrl, onAddToCartClick, review, onRemoveFromCartClick}) {
  return (
    <div className='container'>
      <Link to="/">Back</Link> 
        <h1 className="pageHeader">{title} <small>{price}</small></h1>
        <div key={id}>
          <div>
            <p>{description}</p>
            <span>{tags}</span>
          </div>
          <img src={imageUrl} alt={title}/>
        </div>
        {review}
        
        <Button  onClick={() => onAddToCartClick()}>Add to cart</Button>
        <Button  onClick={() => onRemoveFromCartClick()}>Remove</Button>

        {/* {this.reviews.map((review) => {
          return (
            <div key={review.id}>
              <h3>{review.username}<span>{review.rating}</span></h3>
              <p>{review.description}</p> 
            </div>
          )
        })} */}        
      </div>
    )
  }