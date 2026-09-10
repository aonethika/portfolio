"use client";

import { get } from 'node:http';
import React, { useEffect } from 'react'

export default function type() {
    const [state, setState ] = useState(0);

     useEffect(()=>{
        const fetchNumbers = await getApi ();
        return;
     },[])
  return (
    <div>
      
    </div>
  )
}
