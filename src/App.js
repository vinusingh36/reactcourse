import './App.css';
import { useState } from 'react';
import Counter from './Components/Counter';
import Post from './Components/Post';
import User from './Components/User';



function App() {

  return (
    <div className="App" >
      <User />
    </div>

  );

}

export default App;





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