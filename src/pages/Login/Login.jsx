// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await axios.post('/login', {
//       email,
//       password,
//     });

//     if (response.status === 200) {
//       // Redirect to the home page
//       window.location.href = '/';
//     } else {
//       // Show an error message
//       console.log('Error logging in');
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Welcome to My Company</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="email">Email</label>
//         <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <label htmlFor="password">Password</label>
//         <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <button type="submit">Login</button>
//       </form>
//       <p>Don't have an account? <a href="/register">Register</a></p>
//     </div>
//   );
// };

// export default Login;
