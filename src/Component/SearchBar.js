import React, { useState,useEffect } from "react";
import axios from "axios";

const SearchBar = ({setImages})=>{

const [searchItem,setSearchItem] = useState("random")

const [error,setError]= useState("")
const [noItem,setNoItem]= useState("")

// default calling api for the random search
useEffect(()=>{
fetchItem()
},[])
const fetchItem = ()=>{
  searchItem && axios.get("https://api.unsplash.com/search/photos",{
    params:{
        "clint_id":"AEq8pLxoth1iOAn8G0IRep6kbM9EY0y5DFjW49W9rfc",
        query:searchItem,
        per_page:"50"
    },
    
      headers:{
        "Authorization": "Client-ID AEq8pLxoth1iOAn8G0IRep6kbM9EY0y5DFjW49W9rfc"
      }  
    
   })
   .then((response)=> {

    if(response.data.results.length !=0){
        setImages(response.data.results)
        setNoItem("List of "+ searchItem +" Images" )
        setSearchItem("")
        // console.log(response.data.results)
    }else{
        setImages([])
        setNoItem("No Item Found")
        setSearchItem("")
        console.log("no item found")
        
    }
   
   })
   .catch((error)=>{
    console.log(error)
    setError(error)
    setImages([])
   
   })
}

    return(
        <div>
    <input value={searchItem} onChange={(e)=>{setSearchItem(e.target.value)}} placeholder="Search images....."/>
    <button onClick={fetchItem} id="btn">Search</button>
    <center><h5 id="noItem" >{noItem}</h5></center>
        </div>
    )
}
export default SearchBar