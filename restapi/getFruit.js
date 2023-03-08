import {useEffect,useState} from "react"
import "../styles/get.css"

export default function Post(){
    const[fruit,setFruit] = useState([]);
    useEffect(()=> {
        fetch("http://localhost:8080/fruit")
        .then(res=>res.json())
        .then(res=>setFruit(res))
    })
    return(
        <div className="App">
            <table>
            <tr>
                <th>Customer Name</th>
                <th>Customer Number</th>
                <th>Id</th>
                <th>Name</th>
                <th>Color</th>
                <th>Quantity</th>
                <th>Fruit Type</th>
                <th>Price</th>
                <th>Discount</th>
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
                </tr>
            ))}
            </table>
        </div>
    );
}