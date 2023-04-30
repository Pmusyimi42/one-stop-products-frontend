import React, { useState, useEffect, useRef } from "react";
import Navlink from "./Navlink";
import ProductCard from "./ProductCard";
import CategoriesFilter from "./CategoriesFilter";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'

function Home({n,addToCart}) {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  const [numItems, setNumItems] = useState(6); // show 6 items initially

  useEffect(() => {
    fetch("/product_categories")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      });

    window.scrollTo(0, 0);
  }, []);

  const contRef = useRef()

    function handleScroll(pixels) {

        contRef.current.scrollBy({
            top: 0,
            left: pixels,
            behavior: 'smooth'
        })
    }

  const searchItems = items.filter((item) => {
    return item.product.title.toLowerCase().includes(search.toLowerCase());
  });

  function filterData(data) {
    const test = searchItems.filter((item) => {
      return item.category.name.toLowerCase() === data;
    });
    setList(test);
  }

  function handleShowMore() {
    setNumItems(numItems + 6); // show 6 more items on click
  }

  return (
    <div className="home">
      <div>
        <Navlink setSearch={setSearch} search={search} n={n} />
      </div>

      <div className="row">
        <div className="col-12 mt-5">
          <h1 className="display-6-fw-bolder text-center">FLASH SALE</h1>
          <hr />
        </div>
      </div>
      <section>
        <div>
          <CategoriesFilter
            items={items}
            searchItems={searchItems}
            filterData={filterData}
          />
        </div>
      </section>

      <div>
        <div className="list-wrapper" >
        <div className='scroll-buttons-left' onClick={() => handleScroll(-110)}>
                <FaAngleDoubleLeft />
        </div>
          <div className='products-list' ref={contRef}>
            {list.length > 0
            ? list.slice(0).map((item, index) => {
                return <ProductCard key={index} item={item} addToCart={addToCart}/>;
              })
            : searchItems.slice(0).map((item, index) => {
                return <ProductCard key={index} item={item} addToCart={addToCart} />;
              })}
           </div>
        <div className='scroll-buttons-right' onClick={() => handleScroll(110)}>
                <FaAngleDoubleRight />
        </div>
        </div>
        
        {/* {numItems < (list.length > 0 ? list.length : searchItems.length) && (
          <button onClick={handleShowMore} className="hmBtn" >Show more</button>
        )} */}
      </div>
    </div>
  );
}

export default Home;
