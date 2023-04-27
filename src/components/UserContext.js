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

//  } []
//  function logOut() {
//     setUser(null)
//     setWho(null)
//     sessionStorage.removeItem('jwt')
//     sessionStorage.removeItem('who')
//     navigate("/login")
// }

// function handleLogin(setErrors, e) {
//     e.preventDefault()

//     fetch('/users/${e.target.selleraccount.checked ? "login_s" : "login"}`,{
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         email: e.target.email.value,
//         password: e.target.password.value
//     })
//    })
//    .then(response => {
//     if(response.status === 404) {
//         response.json().then(errors => {
//             setErrors(errors)
//         })
//     } else if (response.status < 400 ) {
//         response.json().then(data => {
//             MySwal.fire({
//                 title: <p className='font-bold p-0 m-0 text-green-900'>Login successful</p>,
//                 icon: "success",
//                 iconColor: "green",
//                 background: "#87CEEB"
//             })

//             sessionStorage.setItem("jwt", data.jwt)
//             setUser(data.user)
//             setWho(e.target.selleraccount.checked ? 'seller' : 'user')
//             sessionStorage.setItem("who", e.target.selleraccount.checked ? 'seller' : 'user')

//             navigate("/")

//             e.target.reset()
//         })
//     }
//    })
// }



// function handleSignup(setErrors, e) {

//    const formData = e.target.selleraccount.checked ? {
//     "name": e.target.name.value,
//     "email": e.target.email.value,
//     "password": e.target.password.value,
//     "password_confirmation": e.target.password_confirmation.value
//    } :
//    {
//     "name": e.target.name.value,
//     "email": e.target.email.value,
//     "password": e.target.password.value,
//     "password_confirmation": e.target.password_confirmation.value
//    }

//    fetch(`http://1/${e.target.selleraccount.checked ? "signup_s" : "signup"}`,{
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//    })
//    .then(response => {
//     if(response.status === 422) {
//         response.json().then(errors => {
            
//             setErrors(errors.errors)
//         })
//     } else {
//         response.json().then(data => {
//             MySwal.fire({
//                 title: <p className='font-bold p-0 m-0 text-green-900'>Registration successful</p>,
//                 icon: "success",
//                 iconColor: "green",
//                 background: "#87CEEB"
//             })

            
//             sessionStorage.setItem("jwt",data.jwt)
//             setUser(data.user)
//             setWho(e.target.selleraccount.checked ? 'seller' : 'user')
//             sessionStorage.setItem("who", e.target.selleraccount.checked ? 'seller' : 'user')
//             navigate("/")
//             e.target.reset()
//         })
//     }
//    })
// }

// return (
//     <UserContext.Provider value={{user: user, setWho: setWho, who: who, setUser: setUser, logOut: logOut, handleLogin: handleLogin, handleSignup: handleSignup }} >
//         {children}
//     </UserContext.Provider>
// )


// export { UserContext, UserProvider }