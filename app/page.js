"use client"
import React, {useEffect, useState} from "react";
import Header from "@/Components/Header";
import axios from "axios";


const page = () =>{
    const [images, setImages] = useState([]);
    //function automate to run on window load or your request
    useEffect(()=>{
        getImages()
    },[])
    const getImages = async () => {
        try{
            const response = await axios.get("https://picsum.photos/v2/list"); /*handling promises can be achieved via async/await*/
            const data = response.data;
            console.log(images);
            setImages(data);
        }catch(error){
            console.error("error while getting images");
        }
    }
    return(
        <div>
            <button onClick={getImages} className="px-5 py-3 bg-green-600 m-2 rounded text-white font-bold">Get Images</button>
            <div className="p-10">
                {images.map((elem, i) =>{
                   return( 
                   <img key={i}
                    src={elem.download_url}
                    width={200}
                    height={200}
                    className="m-10 rounded inline-block"

                    />
                   )
                })}
            </div>
        </div>
    )
}
export default page;