import React, {useState} from 'react';
import axios from'axios'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../styles/registrationform.css'

function RegistrationForm() 
{
    const[cusName,setCusName]=useState('');
    const[cusNo,setCusNo]=useState("");
    const[id,setId]=useState("");
    const[name,setName]=useState("");
    const[color,setColor]=useState("");
    const[quantity,setQuantity]=useState("");
    const[typeOfFruit,setTypeOfFruit]=useState('');
    const[price,setPrice]=useState('');
    const[discount,setDiscount]=useState('');
    async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post('http://localhost:8080/fruit',
        {
            cusName:cusName,
            cusNo:cusNo,
            id:id,
            name:name,
            color:color,
            quantity:quantity,
            price:price,
            typeOfFruit:typeOfFruit,
            discount:discount
        });
          alert("Fruit details are added!!");
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
    catch(err)
        {
          alert("Failed");
        }
   }

    return(
        <>
        <center>
        <div className="form">
            <h2 style={{textAlign:"center",
                        color:"#f41149"}}>
                YOUR ORDER!!
            </h2>
            <br></br>
            <Box component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '30ch' },
                    }}
             noValidate
             autoComplete="on"
            >
            <div>
                <TextField
                    required
                    id="cusName"
                    label="Customer Name"
                    placeholder='Enter customer name'
                    value={cusName}
                    onChange={(event) =>
                                    {
                                        setCusName(event.target.value);      
                                    }}
                />
                <br></br>
                <TextField
                    required
                    id="cusNo"
                    label="Customer number"
                    placeholder='Enter customer number'
                    value={cusNo}
                    onChange={(event) =>
                                    {
                                        setCusNo(event.target.value);      
                                    }}
                />
                <br></br>
                <TextField
                    required
                    id="id"
                    label="Fruit id"
                    placeholder='Enter the fruit id'
                    value={id}
                    onChange={(event) =>
                                    {
                                        setId(event.target.value);      
                                    }}
                />
                <br></br>
                <TextField
                    required
                    id="name"
                    label="Fruit name"
                    placeholder='Enter fruit name'
                    value={name}
                    onChange={(event) =>
                                    {
                                        setName(event.target.value);      
                                    }}
                />
                <br></br>
                <TextField
                    required
                    id="color"
                    label="fruit color"
                    placeholder='Enter the fruit color'
                    value={color}
                    onChange={(event) =>
                                    {
                                        setColor(event.target.value);      
                                    }}
                />
                <TextField
                    required
                    id="quantity"
                    label="fruit quantity"
                    placeholder='Enter the quantity '
                    value={quantity}
                    onChange={(event) =>
                                    {
                                        setQuantity(event.target.value);      
                                    }}
                />
                <TextField
                    required
                    id="typeOfFruit"
                    label="fruit type"
                    placeholder='Enter the fruit type'
                    value={typeOfFruit}
                    onChange={(event) =>
                                    {
                                        setTypeOfFruit(event.target.value);      
                                    }}
                />
                <TextField
                    required
                    id="price"
                    label="fruit price"
                    placeholder='Enter the fruit price'
                    value={price}
                    onChange={(event) =>
                                    {
                                        setPrice(event.target.value);      
                                    }}
                />
                <TextField
                    required
                    id="discount"
                    label="discount"
                    placeholder='Enter the discount'
                    value={discount}
                    onChange={(event) =>
                                    {
                                        setDiscount(event.target.value);      
                                    }}
                />
              <br></br>
              <div className='footer'>
                <br></br>
              <b>
                  <button onClick ={save}>ORDER</button>
              </b>
              </div>
            </div>
            </Box>
        </div>
            </center>
        </>
    )       
}
export default RegistrationForm