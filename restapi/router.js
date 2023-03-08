import React from 'react';
import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom';
import UpdateForm from './update';
import Post from './getFruit';
import Get from './delete';
import RegistrationForm from './register';
import "../styles/router.css";

function Dum(){
    return (
        <div className='App'>
                 <Router>
                    <div class='nav' className='main'>
                        <h1 id='title'>Fruits</h1>
                        <div class='nav-link'>
                    <Link to='/RegistrationForm'><button><b>HOME</b></button></Link>
                    <Link to='/UpdateForm'><button><b>UPDATE</b></button></Link>
                    <Link to='/Post'><button><b>VIEW</b></button></Link>
                    <Link to='/Get'><button><b>DELETE</b></button></Link>
                    </div>
                    </div>
                   
                <Routes>
                
                <Route path='/RegistrationForm' element={<RegistrationForm/>}/>
                <Route path='/Post' element={<Post/>}/>
                <Route path='/UpdateForm' element={<UpdateForm/>}/>
                <Route path='/Get' element={<Get/>}/>

                </Routes>
                </Router>

        </div>
    )
}

export default Dum;