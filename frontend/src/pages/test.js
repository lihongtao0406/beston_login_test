/* eslint-disable */
import React, { useState } from 'react';
const BASE_URL = 'https://loginapi1.herokuapp.com';
const Test = () => {
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const submit = async (e) => {
        e.preventDefault();
        const body={email,password}
        const resp = await fetch(`${BASE_URL}/api/login`,{
            body: JSON.stringify(body),
            method:'POST',
            headers:{'Content-Type':'application/json'},
        });
        const tokenObj = await resp.json();
        console.log(tokenObj);
    }
    const a = (e) =>{
        e.preventDefault();
        console.log('1234');
    }


    return (
        <>
        <div>
        <form onSubmit={submit}>
            <input 
                type="email"
                name="email"
                onChange={(e)=>setEmail(e.target.value)}
            />
            <input 
                type="password"
                name="password"
                onChange={(e)=>setPassword(e.target.value)}
            />
            <button type='submit'>sing in</button>
        </form>
        </div>
        <div>
            
        </div>
        </>
    );
}

export default Test;