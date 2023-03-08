import "../styling/css/products.css";

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from "../constants/API";
import { FilterInput } from "./styledComponents/Buttons";

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
          <Link to={"/"+item.id} key={item.id} className="product">
          <div className="cardVisible">
            <p className="visibleTitle">{item.title}</p>
            <p className="visibleDeets">
             {(item.price>item.discountedPrice) ? item.price : item.discountedPrice},-
              {/* Details &#62; */}
            </p>
            <div style={{backgroundImage: `url(${item.imageUrl})`}} className="productImg"/>
          </div>
              <div className="productInfo">
                <h2 className="itemTitle">{item.title}</h2>
                <div className="contextWrapper">
                  <p className="priceDeets">{(items.price>items.discountedPrice) ? item.price : item.discountedPrice},-</p>
                  <p className="deets">Details &#62;</p>
                </div>
              </div>
          </Link>
        ))}
    </div>
  )
}
