import {useEffect,useState} from "react"
import "../styles/delete.css"
import axios from  
'axios'

export default function Get(){
    const[fruit,setFruit] = useState([]);
    const handleDelete=(id)=>{
        axios.delete(`http://localhost:8080/fruit/${id}`)
        .then(res=>setFruit(res.data))
    }
    useEffect(()=> {
        fetch("http://localhost:8080/fruit")
        .then(res=>res.json())
        .then(res=>setFruit(res))
    })
    return(<>
            
        <div className="App">
            <table>
            <tr>
                <th>Customer Name</th>
                <th>cusNo</th>
                <th>id</th>
                <th>name</th>
                <th>color</th>
                <th>quantity</th>
                <th>typeOfFruit</th>
                <th>price</th>
                <th>discount</th>
            </tr>
            {fruit.map(u=>(
                <tr>
                    <th>{u.cusName}</th>
                    <th>{u.cusNo}</th>
                    <th>{u.id}</th>
                    <th>{u.name}</th>
                    <th>{u.color}</th>
                    <th>{u.quantity}</th>
                    <th>{u.typeOfFruit}</th>
                    <th>{u.price}</th>
                    <th>{u.discount}</th>
                    <th>
                        <button className="delete" type="button" onClick={()=>handleDelete(u.id)}>Delete</button>
                    </th>
                </tr>
            ))}
            </table>
        </div>
        </>
    );
}