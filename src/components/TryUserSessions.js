// import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content'

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const UserContext = React.createContext()

// function UserProvider({children}) {

//     const navigate = useNavigate()

//     const [user, setUser] = useState(null)
//     const [who, setWho] = useState(null)

//     const MySwal = withReactContent(Swal)

//     useEffect(() => {
//         if(sessionStorage.getItem('jwt')) {
//             if(sessionStorage.getItem('who') === 'admin') {
//                 tryAdminAuth()
//             } else {
//                 tryUserAuth()
//             }
//         }

//     },[])

//     // function makeOrder(user_id ) {
//     //     fetch("/order", {
//     //         method: "POST",
//     //         headers: {
//     //             "Content-Type": "application/json",
//     //             "Accept": "application/json"
//     //         },
//     //         body: JSON.stringify({
//     //             user_id: user_id,
                
//     //         })
//     //     }).then(respose => {
//     //         if(respose.status < 400) {
//     //             respose.json().then(data => {
//     //                 navigate("/viewprofile/me")
//     //             })
//     //         }
//     //     })
//     // }

    

//     function tryAdminAuth() {
//         fetch("/Admin", {
//             method: 'GET',
//             headers: {
//                 'Authorization': 'Bearer ' + sessionStorage.getItem('jwt')
//             }
//         })
//         .then(response => {
//             if(response.status === 401) {

//             } else {
//                 response.json().then(data => {
//                     setUser(data)
//                     setWho('admin')
//                 })
//             }
//         })
//     }

//     function tryUserAuth() {
//         fetch("/user", {
//             method: 'GET',
//             headers: {
//                 'Authorization': 'Bearer ' + sessionStorage.getItem('jwt')
//             }
//         })
//         .then(response => {
//             if(response.status === 401) {
                
//             } else {
//                 response.json().then(data => {
//                 setUser(data)
//                     setWho('user')
//                 })
//             }
//         })
//     }

//     function logOut() {
//         setUser(null)
//         setWho(null)
//         sessionStorage.removeItem('jwt')
//         sessionStorage.removeItem('who')
//         navigate("/login")
//     }

//     function handleLogin(setErrors, e) {
//         e.preventDefault()

//         fetch("/user"),{
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify({
//             username: e.target.email.value,
//             password: e.target.password.value
//         })
//        })
//        .then(response => {
//         if(response.status === 404) {
//             response.json().then(errors => {
//                 setErrors(errors)
//             })
//         } else if (response.status < 400 ) {
//             response.json().then(data => {
//                 MySwal.fire({
//                     title: <p className='font-bold p-0 m-0 text-green-900'>Login successful</p>,
//                     icon: "success",
//                     iconColor: "green",
//                     background: "#87CEEB"
//                 })

//                 sessionStorage.setItem("jwt", data.jwt)
//                 setUser(data.user)
//                 setWho('user')
//                 sessionStorage.setItem("who",'client')

//                 navigate("/")

//                 e.target.reset()
//             })
//         }
//        })
//     }

    
//     return (
//         <UserContext.Provider value={{user: user, setWho: setWho, who: who, setUser: setUser, logOut: logOut, handleLogin: handleLogin }} >
//             {children}
//         </UserContext.Provider>
//     )
// }

// export { UserContext, UserProvider }