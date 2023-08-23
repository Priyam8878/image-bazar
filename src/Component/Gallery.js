import React from "react";

const Gallery = ({images})=>{
console.log(images)


    return(
        <div id="displayImages">
           { 
           images.map((image)=>(
             <div>
               <img 
               src={image.urls.thumb}
               alt={image.alt_description
               }
               />
               </div>
           ))
           }
          
        </div>
    )
}
export default Gallery