import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import IndividualIntervalsExample from './IndividualIntervalsExample';

import './CategoriesFilter.css';



function CategoriesFilter({items, filterData}) {
  const uniqueNumbers = items.map(item=>{
    return item.category.name
  })
  const categoriesName = new Set(uniqueNumbers)
  const uniqueNames = [...categoriesName]
  
  function handleFilters(e){
    const valueName = e.target.textContent.toLowerCase()
    //  console.log(valueName)
     filterData(valueName)
   }

  return (
    <div class="container-md">
        <h1><AiOutlineMenu /> Categories </h1>
        <div>
        <table class="tabel">
        <thead>
            <tr>
            <th scope=""></th>
            </tr>
        </thead>
        <tbody class="table table-bordered">
        {uniqueNames.map((item,index)=>{
            return (
                <tr key={index}>
                    <td onClick={handleFilters}>{item}</td>
                </tr>
            )
          })}

            {/* <tr>
            <td> Electronics</td>
            </tr>
            <tr>
            <td>Clothing</td>
            </tr>
            <tr>
            <td>Books</td>
            </tr>
            <tr>
            <td>Shoes</td>
            </tr>
            <tr>
            <td>Furniture</td>
            </tr>
            <tr>
            <td onClick={(e)=>alert("text")}>Perfume</td>
            </tr> */}
        </tbody>
        </table>
    </div>
      <div>
        <IndividualIntervalsExample />
      </div>
  </div>

  )
}

export default CategoriesFilter