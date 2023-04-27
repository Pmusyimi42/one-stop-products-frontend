// import { createContext, useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2"

// export const ProductsContext = createContext();

// export default function ProductsProvider({children}) 
// {
//     const navigate = useNavigate()
//     const [product, setProduct] = useState()
//     const [change, setOnChange] = useState(false)

//     // Adding Product
//     const AddProduct = (title, description, price, imageUrl) =>{
//         fetch("/question",{
//             method: "POST",
//             headers:{
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 title, description, price,imageUrl
//             })
//         }
//         )
//         .then(res=>res.json())
//         .then(response=>{
//             console.log("add product ",response)
//             if(response.errors)
//             {
                 
//                     Swal.fire({
//                         icon: 'error',
//                         title: 'Oops...',
//                         text: response.errors,
//                     })
//             }
//             else if(response.success)
//             {
//                 Swal.fire({
//                     position: 'center',
//                     icon: 'success',
//                     title: response.success,
//                     showConfirmButton: false,
//                     timer: 1500
//                   })
//                   navigate('/products_list')
//                   setOnChange(!change)
                 

//             }
//             else{
//                 Swal.fire({
//                     icon: 'error',
//                     title: 'Oops...',
//                     text: "Something went wrong!",
//                 })

//             }
            
//         })
//     }


//     // Fetch products
//     useEffect(()=>{
//         fetch("/products",{
//             method: "GET",
//             headers:{
//                 "Content-Type": "application/json"
//             },
//         }
//         )
//         .then(res=>res.json())
//         .then(response=>{
//             setProduct(response)
//             console.log(response)
//         }
//         )
//     }, [change])
   

//     const contextData = {
//       product,
//       AddProduct,
//     //   
//     }

//   return (
//     <>
//      <ProductsContext.Provider value={contextData}>
//         {children}
//      </ProductsContext.Provider>
//     </>
//   )
// }