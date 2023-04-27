// // import { useState } from "react"
// // import { GiPadlock } from "react-icons/gi"
// // import { RiAccountCircleLine } from "react-icons/ri"
// // import { RiLoginCircleLine } from "react-icons/ri"
// // // import { NavLink, useHistory } from "react-router-dom"
// // // import { UserContext } from "./UserContext.js"
// // import cartoon from "../images/sitted.png"
// // import Swal from 'sweetalert2';
// // import withReactContent from 'sweetalert2-react-content'

// import React, { useState } from "react";
// import { useHistory } from "react-router";
// import "./LoginForm.css";

  
    
// // // function useUser() {
// // //     const [user, setUser] = useState(null);
// // //     const [who, setWho] = useState(null);
// // //     const navigate = useHistory();
// // //     const MySwal = withReactContent(Swal);
    
// // //     useEffect(() => {
// // //         if (sessionStorage.getItem("jwt")) {
          
// // //             tryUserAuth();
// // //           }
// // //         },
// // //        []);
// // //     }

// // //     function tryUserAuth() {
// // //         fetch("/user", {
// // //           method: "GET",
// // //           headers: {
// // //             Authorization: "Bearer " + sessionStorage.getItem("jwt"),
// // //           },
// // //         }).then((response) => {
// // //           if (response.status === 401) {
// // //           } else {
// // //             response.json().then((data) => {
// // //               setUser(data);
// // //               setWho("user");
// // //             });
// // //           }
// // //         });
// // //       }

// function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formData = {
//       email: event.target.email.value,
//       password: event.target.password.value,
//     };

//     fetch("/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);

//         // Store JWT token in session storage
//         sessionStorage.setItem("token", data.token);

//         // Redirect to home page
//         window.location.href = "/home";
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="email">Email</label>
//       <input
//         type="email"
//         id="email"
//         value={email}
//         onChange={handleEmailChange}
//         required
//       />

//       <label htmlFor="password">Password</label>
//       <input
//         type="password"
//         id="password"
//         value={password}
//         onChange={handlePasswordChange}
//         required
//       />

//       <button type="submit">Log In</button>
//     </form>
//   );
// }
// function handleLogin(setErrors, e) {
//     e.preventDefault()

//     fetch("/login",{
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         username: e.target.email.value,
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
//             setWho( 'user')
//             sessionStorage.setItem("who",'user')

//             navigate("/")

//             e.target.reset()
//         })
//     }
//    })
// }

// export default LoginForm;


//********************login form 2 complete

// import { useState } from "react";
// import { GiPadlock } from "react-icons/gi";
// import { RiAccountCircleLine } from "react-icons/ri";
// import { RiLoginCircleLine } from "react-icons/ri";
// import { NavLink } from "react-router-dom";
// import cartoon from "../images/sitted.png";
// import './LoginForm.css';


// function LoginForm({ handleLogin }) {
  
//   const [errors, setErrors] = useState({});

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleLogin(setErrors, e);
//   };

//   return (
//     <div className="mt-5">
//       <div className="flex justify-center items-center p-5">
//         <div className="hidden sm:block max-w-lg">
//           <img className="w-full" src={cartoon} alt="Sitting" />
//         </div>
//         <form
//           onSubmit={handleSubmit}
//           className="shadow-lg shadow-black flex flex-col px-10 bg-white max-w-lg"
//         >
//           <div
//             className="my-3 text-center flex justify-center text-slate-300"
//             style={{ fontSize: "5em" }}
//           >
//             <RiLoginCircleLine />
//           </div>
          
//           <div className="flex my-3">
//             <div className="border border-black py-2 px-3 flex items-center" style={{ backgroundColor: "#D9D9D9" }}>
//               <RiAccountCircleLine color="#000" />
//             </div>
//             <input
//               type="text"
//               className="outline-none  border border-black p-2"
//               name="email"
//               placeholder="Email"
//             />
//           </div>

//           <div className="flex my-3">
//             <div className="border border-black py-2 px-3 flex items-center" style={{ backgroundColor: "#D9D9D9" }}>
//               <GiPadlock color="#000" />
//             </div>
//             <input
//               type="password"
//               className=" outline-none border border-black p-2"
//               name="password"
//               placeholder="Password"
//             />
//           </div>

//           {errors.error ? (
//             <div className="text-red-600 text-sm text-center">
//               {" "}
//               - {errors.error}
//             </div>
//           ) : null}

//           <NavLink to="/" className="text-black text-sm text-right hover:text-sky-700">
//             Forgot password
//           </NavLink>

//           <div className="flex py-4">
//             <div>
//               <input type="checkbox" className="mr-2" />
//               <span className="text-black">Remember me</span>
//             </div>
//             <button className="bg-F47458-700 w-max px-4 py-2 rounded-md my-2 mx-auto hover:bg-F47458-500 hover:text-white">
//               Login
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginForm;

//**************Trial loginform 3

import React, { useState, useEffect } from "react";
import "./LoginForm.css";
import { useHistory } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [user, setUser] = useState(null);

  useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token) {
          fetch('/user', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then((res) => {
              if (res.ok) {
                return res.json();
              }
              throw new Error('Unauthorized');
            })
            .then((data) => {
              setUser(data.user);
            })
            .catch((error) => {
              console.log(error);
              sessionStorage.removeItem('token');
              setUser(null);
            });
        } else {
          setUser(null);
        }
      }, []);
    
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email: e.target.email.value,
      password: e.target.password.value,
      
    };

    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEmail("");
        setPassword("");
        // this redirects to dashboard page after login
        history.push("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <h2>Login</h2> */}

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        required
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
        required
      />
      <button type="submit">Log In</button>
    </form>
  );
}

export default LoginForm;

//*******login 4

// import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
// import './LoginForm.css';

// function LoginForm() {
//   const history = useHistory();

//   const [user, setUser] = useState(null);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   useEffect(() => {
//     const token = sessionStorage.getItem('token');
//     if (token) {
//       fetch('/user', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//         .then((res) => {
//           if (res.ok) {
//             return res.json();
//           }
//           throw new Error('Unauthorized');
//         })
//         .then((data) => {
//           setUser(data.user);
//         })
//         .catch((error) => {
//           console.log(error);
//           sessionStorage.removeItem('token');
//           setUser(null);
//         });
//     } else {
//       setUser(null);
//     }
//   }, []);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('/user', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });
//       if (res.ok) {
//         const data = await res.json();
//         sessionStorage.setItem('token', data.token);
//         setUser(data.user);
//         history.push('/');
//       } else {
//         throw new Error('Invalid credentials');
//       }
//     } catch (error) {
//       console.log(error);
//       throw error;
//     }
//   };

//   const handleLogout = () => {
//     sessionStorage.removeItem('token');
//     setUser(null);
//     history.push('/');
//   };

//   const handleOrder = async (order) => {
//     try {
//       const token = sessionStorage.getItem('token');
//       const res = await fetch('/orders', {
//         method: 'POST',
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ order }),
//       });
//       if (res.ok) {
//         history.push('/orders');
//       } else {
//         throw new Error('Unable to create order');
//       }
//     } catch (error) {
//       console.log(error);
//       throw error;
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleLogin}>
//         <label>
//           Email:
//           <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </label>
//         <br />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default LoginForm;


