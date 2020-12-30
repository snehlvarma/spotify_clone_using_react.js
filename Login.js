import React from 'react'
import "./Login.css";
import snehilfyz from './snehilfyz.png';
import { loginUri } from "./spotify";
import { toka } from "./toka.jpg";
console.log(snehilfyz);
console.log(toka);

function Login() {
    return (
        <div className="login">
            <img src={snehilfyz}
            alt=""
            />
            <a href={loginUri}>LOGIN WITH SNEHILFY</a>
        </div>
    );     
} 
export default Login;