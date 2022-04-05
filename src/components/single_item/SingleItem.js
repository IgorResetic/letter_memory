import React, { useEffect, useState } from 'react'
import "./SingleItem.css"

const SingleItem = ({ item, handler, flipped }) => {

    const [isFlipped, setIsFlipped] = useState(false)
 
    const handleClick = () => {
        handler(item.name)
    }

    useEffect(() => {
        if(flipped && isFlipped == false) {
            setIsFlipped(true)
        }
    })

    return (
        <div className="item">
            <div className={isFlipped ? "flipped-item" : " "}>
                <img
                    className='front'
                    src={item.src}
                    alt="item front"
                    onClick={handleClick}
                />
            </div>

        </div>
    )
}

export default SingleItem;