import { useContext, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { AuthContext } from './Components/Context/Auth';


import AllRoutes from './Components/AllRoutes/AllRoutes';

function App() {

  const { loggedIn } = useContext(AuthContext);
  return (
    <div className="App" >
      <Navbar />
      <AllRoutes />
    </div>
  );

}

export default App;






/*
// import Image from './Components/LifeCycle/Image';
// import Title from './Components/LifeCycle/Title';
// import Products from './Components/LifeCycle/Products';
// import Timer from './Components/Timer/Timer';
// import FormComp from './Components/Timer/FormComp';
// import A from './Components/Context/A';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Context/Home';
import Login from './Components/Context/Login';
import { AuthContext } from './Components/Context/Auth';

 const { loggedIn } = useContext(AuthContext)
 <Navbar />
      {loggedIn ? <Login /> : <Home />}

 <FormComp />
 <h2>React App</h2>
      {
        showImg ? <Image /> : <Title />
      }
      <br />
      <button onClick={() => setShowimg(false)} >Show Title</button>&emsp;
      <button onClick={() => setShowimg(true)} >Show Image</button>

      <Products />
   <User />
   <Chatapp />
    <h2>React App</h2>
      {
        showImg ? <Image /> : <Title />
      }
      <br />
      <button onClick={() => setShowimg(false)} >Show Title</button>&emsp;
      <button onClick={() => setShowimg(true)} >Show Image</button>

*/


// let info = [
//   {
//     img: "https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1710547200&semt=ais",
//     name: "Vineet Singh",
//     gender: 'Male'
//   },
//   {
//     img: "https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1710547200&semt=ais",
//     name: "Varun Singh",
//     gender: 'Male'
//   },
//   {
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg8lBDz1DQql09qrX6mbiPUgDYlOkFGti9ss6F6JoBJg&s",
//     name: "Sneha Singh",
//     gender: 'Female'
//   }
// ]

{/* <Counter />   <Post /> */ }
{/* <ToDo /> */ }
// const [count, setCount] = useState(0);
// const [name, setName] = useState("vineet");

// const [count, setCount] = useState(0);
// const [name, setName] = useState("vineet");

//  <Counter count={count} setCount={setCount} setName={setName} name={name} />
//       <Counter count={count} setCount={setCount} setName={setName} name={name} /> */}

//  <Counter count={count} setCount={setCount} setName={setName} name={name} />
//       <Counter count={count} setCount={setCount} setName={setName} name={name} /> */}



//       <Tech />
//       <A />
//       <B />
// <h1>React App</h1>
//     <button onClick={() => {
//       setToggle(false)
//       if (toggle === false)
//         setToggle(true)
//     }
//     }>
//       Toggle Components
//     </button>
//     {toggle ? <Counter /> : <div style={{ display: 'flex' }}>
//       {
//         info.map((user, i) => <Profile key={i + 1} img={user.img} name={user.name} gender={user.gender} />)
//       }
//     </div>}