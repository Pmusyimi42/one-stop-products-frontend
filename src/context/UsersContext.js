// import { createContext, useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2"

// export const UsersContext = createContext();

// export default function UsersProvider({children}) 
// {
//     const navigate = useNavigate()
//     const [user, setUser] = useState()
//     const [change, setOnChange] = useState(false)


//     // Adding user
//     const AddUser = (name, email, address, password) =>{
//         fetch("/users",{
//             method: "POST",
//             headers:{
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 name, email, address, password
//             })
//         }
//         )
//         .then(res=>res.json())
//         .then(response=>{
//             console.log("add user ",response)
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
//                   navigate('/user_details')
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

   
//     // Fetch users
    // useEffect(()=>{
    //     fetch("/users",{
    //         method: "GET",
    //         headers:{
    //             "Content-Type": "application/json"
    //         },
    //     }
    //     )
    //     .then(res=>res.json())
    //     .then(response=>{
    //         setUser(response)
    //         console.log(response)
    //     }
    //     )
    // }, [change])

//     const contextData = {
//       user,
//       AddUser
//     //   
//     }

//   return (
//     <>
//      <UsersContext.Provider value={contextData}>
//         {children}
//      </UsersContext.Provider>
//     </>
//   )
// }