import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'

function ChanesOnHover() {

    let changesTextArray = [
        {
            name: "New Arrivals",
            img:""
        },
        {
            name: "Best Sellers",
            img:"https://cdn.pixabay.com/photo/2023/08/19/13/42/water-8200502_1280.jpg"

        },
        {
            name: "Millitary Inspire",
            img:"https://cdn.pixabay.com/photo/2023/08/19/13/42/water-8200502_1280.jpg"

        },
        {
            name: "Automatic",
            img:"https://cdn.pixabay.com/photo/2023/08/19/13/42/water-8200502_1280.jpg"

        },
        {
            name: "Vintage Inspire",
            img:"https://cdn.pixabay.com/photo/2023/08/19/13/42/water-8200502_1280.jpg"

        },
        {
            name: "Digital",
            img:"https://cdn.pixabay.com/photo/2023/08/19/13/42/water-8200502_1280.jpg"

        },
    ]
    let changesImg = [
        {
            img:"https://cdn.pixabay.com/photo/2023/08/19/13/42/water-8200502_1280.jpg"
        },
        {
            img:"https://cdn.pixabay.com/photo/2024/03/09/02/26/bird-8621836_640.jpg"
        },
        {
            img:"https://cdn.pixabay.com/photo/2024/03/09/06/52/flowers-8622033_640.jpg"
        },
        {
            img:"https://cdn.pixabay.com/photo/2022/09/05/13/51/amethyst-7434256_640.jpg"
        },
        {
            img:"https://cdn.pixabay.com/photo/2024/03/05/14/33/purple-8614655_640.jpg"
        },
        {
            img:"https://cdn.pixabay.com/photo/2024/03/09/02/26/bird-8621836_640.jpg"
        },
    ]

    const imgRef = useRef("")
const [flag, setFlag] = useState(0)
let changeImages = (e)=>{
    setFlag(e.target.id)

}

    return (
        <>
            <div className="changesContainer"
            style={{
                position:"relative",
                cursor:"pointer",
                background:"#D5D5D5"
            }}>

 <div className="changesText">{
    changesTextArray.map((elem, index)=>{
        return(
            <>
                <h1 key={index} onMouseOver={changeImages} id={index} ref={imgRef} >{elem.name}</h1>
            </>
        )
    })
}
                </div>

                <div className="changesImage">
                <img src={changesImg[flag].img} alt="" style={{
                    width:"400px",
                    position:"absolute",
                    right:"0",
                    top:"0"
                }} />
                </div>
            </div>
        </>
    )
}

export default ChanesOnHover