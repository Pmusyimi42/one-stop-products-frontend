import ProductCard from "../components/ProductCard";
import React, {useState, useEffect} from "react";
import Navlink from "../components/Navlink";
import './product.css';




export default function Products() {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState("")
  const [list, setList] = useState([])
  const [campaignsToDisplay,setCampaignsToDisplay]= useState ([])
  const [itemsPerPage, setItemsPerPage] = useState(9)
  const [currentPage, setCurrentPage] = useState(1)
  const pageButtons = []



  

  useEffect(() => {
      fetch("/product_categories")
      .then((response)=> response.json())
      .then((data)=> {
        //  console.log(data[0].category.name)
        //  console.log(data[0].product.imageUrl)

        setItems(data)
        setCampaignsToDisplay(data)

      })

      window.scrollTo(0, 0)

  }, [])

const searchItems = items.filter(item=>{
  return item.product.title.toLowerCase().includes(search.toLowerCase())
})

function filterData(data){
 const test= searchItems.filter(item=>{

    return item.category.name.toLowerCase()=== data
  
   })
      setList(test)
}
console.log(list)

const filteredCampaigns=campaignsToDisplay.filter((campaign)=>{
  if (search===""){
      return true
  }else{
      return campaign.category.name.toLowerCase().includes(search.toLowerCase())
  }
  
 }) 

 function displayItems() {
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const list = filteredCampaigns.slice(startIndex, endIndex)
  const searchItems= filteredCampaigns.slice(startIndex, endIndex)

  return (
    <div className="row" id="content">

                    {
                list.length > 0 ? (
                  list.map((item, index) => {
                    return <ProductCard key={index} item={item} />
                  })
                ) : (
                  searchItems.map((item, index) => {
                    return <ProductCard key={index} item={item} />
                  })
                )
              }
               
       </div>
      
      )
}



const numPages = Math.ceil(filteredCampaigns.length/ itemsPerPage)

function goToPage(pageNumber) {
  setCurrentPage(pageNumber)
}

for (let i=1; i <=numPages; i++) {
  pageButtons.push(
      <button key={i} onClick={()=>goToPage(i)}>
          {i}
      </button>
  )
}

  return (
    <div className='home'>
      <div>
        <Navlink setSearch={setSearch} search={search}/>
      </div>
      
      <div className="row">
          <div className="col-12 mt-5 mb-4">
              <h1 className="display-6-fw-bolder text-center">FLASH SALE</h1>
                <hr/>
          </div>
       </div>
        
     
      <div>
      {displayItems()}

       <div className='pagination-div'>
            <p>page numbers</p>
        {pageButtons}
        </div>
       </div>

      
    </div>
  )

  
}