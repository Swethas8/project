import * as React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import { useState} from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
// import 'bootstrap/dist/css/bootstrap.min.css';
//import './patient.css';

export default function UpdateForm() {
    const [cusName, setCusName] = useState('');
    const [cusNo, setCusNo] = useState("");
    const [id, setId] = useState("");
    const [name,setName] = useState("");
    const [color,setColor] = useState("");
    const [quantity,setQuantity] = useState("");
    const [typeOfFruit,setTypeOfFruit] = useState("");
    const [price,setPrice ]= useState("");
    const [discount,setDiscount] = useState("");

    async function save(event) {
        event.preventDefault();
        try {
            await axios.put("http://localhost:8080/fruit/put",

                { cusName:cusName,
                    cusNo:cusNo,
                    id:id,
                    name:name,
                    color:color,
                    quantity:quantity,
                    typeOfFruit:typeOfFruit,
                    price:price,
                    discount:discount

                });
            alert("Fruit details updated successfully");
            setCusName("");
            setCusNo("");
            setId("");
            setName("");
            setColor("");
            setQuantity("");
            setTypeOfFruit("");
            setPrice("");
            setDiscount("");

        }
        catch (err) {
            alert("Fruit Updation Failed");
        }
    }

    return (
        <div>
           
           <center ><h2>Update The Details</h2></center>

        <form>
       <center>
       <TextField required id="outlined-basic" label="customer name" variant="outlined"
        onChange={(event)=>setCusName(event.target.value)}/>
        <br></br><br></br>
        <TextField required id="outlined-basic" label="customer number" variant="outlined"
        onChange={(event)=>setCusNo(event.target.value)}/>
        <br></br><br></br>
        <TextField id="outlined-basic" label="fruit id" variant="outlined"
        onChange={(event)=>setId(event.target.value)}/>
        <br></br><br></br>
        <TextField required id="outlined-basic" label="fruit name" variant="outlined"
        onChange={(event)=>setName(event.target.value)}/>
        <br></br><br></br>
        <TextField required id="outlined-basic" label="fruit color" variant="outlined"
        onChange={(event)=>setColor(event.target.value)}/>
        <br></br><br></br>
        <TextField required id="outlined-basic" label="fruit quantity" variant="outlined"
        onChange={(event)=>setQuantity(event.target.value)}/>
        <br></br><br></br>
        <TextField required id="outlined-basic" label="fruit type" variant="outlined"
        onChange={(event)=>setTypeOfFruit(event.target.value)}/>
        <br></br>
        <br></br>
        <TextField required id="outlined-basic" label="fruit price" variant="outlined"
        onChange={(event)=>setPrice(event.target.value)}/>
        <br></br><br></br>
        <TextField required id="outlined-basic" label="fruit discount" variant="outlined"
        onChange={(event)=>setDiscount(event.target.value)}/>
        <br></br><br></br>
        </center>
        <div/>
        <center>
               <center> <button type="submit" class="btn btn-primary" onClick={save}>Update</button></center>
                </center>
        <div/>  
            </form>
           

        </div>
    );
}