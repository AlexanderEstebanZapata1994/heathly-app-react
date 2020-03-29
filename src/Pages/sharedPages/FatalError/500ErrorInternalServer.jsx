import React from 'react';  
import { error500FatalError } from "../Images/500.png";

export const FatalError = () =>(
    <div style={{margin:"50px 20%"}}>
        <img src={error500FatalError} alt="error500FatalError"></img>
    </div>
)