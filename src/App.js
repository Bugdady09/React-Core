import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';



function App() {

  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illistrator', price: '$60.99'},
    {name: 'PDF Rider', price: '$9.99'}
]

const student = [
  {studentName: "Jonayed", studentTeacherName: "Nani Gopal Barari"},
  {studentName: "Jack", studentTeacherName: "Watson"},
  {studentName: "Imtiaz", studentTeacherName: "Nasir Uddin"},
  {studentName: "Bell", studentTeacherName: "Mendal"}
]

const nayoks = ['Razzak', 'Jasim', 'Alomgir', 'Salman']


  return (
    <div className="App">
      <header className="App-header">
    
      <ul>
        {
          nayoks.map(n => <li>{n}</li>)

        }
        {
          products.map(product => <li>{product.name + " " + product.price}</li>)
        }
      </ul>

      <p>I am a React Person</p>
      <Users></Users>

      <Counter></Counter>
        {
          products.map( product => <Product product = {product}></Product>)
        }
      <Person name= "Munna" job = "football"></Person>
      <Person name = "Masum" job = "Dorshok"></Person>
      <Person></Person>
      {
        student.map( everyStudent => <StudentDetails st = {everyStudent}></StudentDetails>)
      }

      </header>
    </div>
  );
}

function Product(params) {
  const productStyle = {
    border: '1px solid gray',
    borderRadious: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px'
  }

  const {name , price} = params.product;
  return (
    <div style= {productStyle}>
      <h2>Name: {name}</h2>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}


function Person(params) {
  return (
    <div style = {{border: '2px solid gold', width: '400px'}}>
      <h3>My Name: {params.name}</h3>
      <p>My Profession: {params.job}</p>
    </div>
  )
}

function StudentDetails(props) {

  return(
    <div style = {{border: "2px solid red", margin: "5px" , width: "400px"}}>
      <h3>Student Name: {props.st.studentName}</h3>
      <h4>Teacher name: {props.st.studentTeacherName}</h4>
    </div>
  )
}

function Counter() {

  const [count, setCoutn] = useState(10);

  const handleIncrease = () =>{
    setCoutn(count + 1)
  }
  
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick = {handleIncrease}>Increase</button>
      <button onMouseMove = {() => setCoutn(count -1)} >Decrease</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    console.log('Data from userEffect')
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  return(
    <div>
      <h3>Dinamic Data: {users.length}</h3>
      <ul>
        {console.log(users)}
        {
          users.map(data => <li>{data.email}</li>)
        }
      </ul>
    </div>
  )
}


export default App;
