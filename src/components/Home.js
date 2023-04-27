import React, { useState, useEffect } from "react";
import Navlink from "./Navlink";
import ProductCard from "./ProductCard";
import CategoriesFilter from "./CategoriesFilter";

function Home() {
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
        <Navlink setSearch={setSearch} search={search} />
      </div>

      <div className="row">
        <div className="col-12 mt-5 mb-4">
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
        <div className="row">
          {list.length > 0
            ? list.slice(0, numItems).map((item, index) => {
                return <ProductCard key={index} item={item} />;
              })
            : searchItems.slice(0, numItems).map((item, index) => {
                return <ProductCard key={index} item={item} />;
              })}
        </div>
        {numItems < (list.length > 0 ? list.length : searchItems.length) && (
          <button onClick={handleShowMore} className="hmBtn" >Show more</button>
        )}
      </div>
    </div>
  );
}

export default Home;
