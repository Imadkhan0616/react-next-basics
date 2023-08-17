"use client"
import React, { useState } from "react";
import Link from "next/link";

const Header = (props) =>{
    /*marks is a variable and the value in useState brackets is variable's value,
    and setMarks is a fucntion that will set the value*/
   const [marks, setMarks] = useState(50); 
   
  return(
    <>
      <div className="h-16 font-bold text-white px-6 bg-gray-500 flex justify-between items-center">
        <h2>LOGO</h2>{/*props drilling*/}
        <div className="flex gap-8">
            <Link href="/About">About</Link>
            <Link href="/Product">Product</Link>
            <Link href="/Courses">Courses</Link>
        </div>
      </div>
    </>
  )
}

export default Header