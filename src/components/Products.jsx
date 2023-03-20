import "../styling/css/products.css";

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from "../constants/API";
import { FilterInput } from "./styledComponents/Buttons";

/**
 * Returns an array of product and displays them
 * @example 
 * <Products />
 */

export default function Products() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [search, setSearch] = useState('')
  let{id} = useParams();

  useEffect(() => {
    async function getData(url) {
      try {
        setIsError(false);
        setIsLoading(true);
        const res = await fetch(url);
        const json = await res.json();
        setItems(json);

        setIsLoading(false);
        console.log(API);

      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }getData(API);
  }, [id]);

  if (isLoading) {
    return (
      <div className="center"> 
        <i className="fa-solid fa-bars-staggered"></i>
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
    )
  }

  if (isError) {
    return (
      <div>Error loading data!</div>
    )
  } 
  return (
    <div className="products">
    <FilterInput 
      placeholder='Search...'
      onChange={(e) => setSearch(e.target.value)}
    />
        {items.filter((item) => {
          return search.toLowerCase() === '' ? 
          item : 
          item.title.toLowerCase().includes(search)
        }).map((item) => (
          <Link to={"products/"+item.id} key={item.id} className="product">
            <div className="cardVisible">
              <div className="visibleTitle">
                <div>{item.title}</div>
                <div>{item.rating}<i className="fa-solid fa-star"></i> </div>
              </div>
              <div className="visibleDeets">
                {((item.price)>(item.discountedPrice)) ? 
                (<>
                    <div  className="oldPrice">
                      <del className="oldPriceTxt">
                        {item.price}
                      </del>
                    </div> 
                    {item.discountedPrice}
                  </>) : 
                  item.price 
                  },-
              </div>
              <div style={{backgroundImage: `url(${item.imageUrl})`}} className="productImg"/>
            </div>
              <div className="productInfo">
                <h2 className="itemTitle">{item.title}</h2>
                <p className="priceDeets">{item.description}</p>
                <div className="contextWrapper">
                  <p className="priceDeets">{((item.price)>(item.discountedPrice)) ? (<><del className="oldPrice">{item.price}</del> {item.discountedPrice}</>) : item.price},-</p>
                  <p className="deets">Details &#62;</p>
                </div>
              </div>
          </Link>
        ))}
    </div>
  )
}
