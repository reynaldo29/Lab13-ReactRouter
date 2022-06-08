import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

export default function Detalles(){
    let {id}  = useParams();
    const [producto,setProducto] = useState({
        id:'',
        codigo:'',
        descripcion:'',
        precio:'',
        imagen:''
    })

    useEffect(()=>{
        obtener();
    })
    const obtener =async () =>{
        await axios.get('http://127.0.0.1:8000/productos/'+id+'/')
        .then(response =>{
            const producto = response.data;
            setProducto(producto)
            
        })
    }
    return (
        <div>
            <h1>Detalles</h1>
            <table class="table">
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Imagen</th>
              </tr>
          </thead>
          <tbody>
            <td><p>{producto.codigo}</p></td>
            <td><p>{producto.descripcion}</p></td>
            <td><p>{producto.precio}</p></td>
            <td><img src={producto.imagen} width="50px"></img></td>
            </tbody>
            </table>
    </div>)

};