
import React , { useEffect, useState } from 'react';
import './App.css';
import {Route,Link,BrowserRouter as Router,Routes } from 'react-router-dom'
import Detalles from './detalles';


function App() {
  const [productos,setProductos] = useState([])
  const url = "http://127.0.0.1:8000/productos/"
  const [todos,setTodos ] = useState()
  const fetchApi = async() =>{
    const response = await fetch(url)
    const responseJson = await response.json()
    setTodos(responseJson)
}
useEffect(() =>{
  fetchApi()
},[])
  return (
    <Router>
    <div className="App">
      <h1>Productos</h1>
      {!todos ? 'Cargando...' :
      todos.map((todo,index) =>{
        return (
          <div><p><Link to ={`/detalles/${todo.id}`}>{todo.descripcion}</Link></p>
          <img src={todo.imagen} width="100px"></img></div>
           
        )
      })
    }
    </div>
    <Routes>
    <Route path ="/detalles/:id" element = {<Detalles/>}/>  
    </Routes>
    </Router>
  );
}

export default App;
