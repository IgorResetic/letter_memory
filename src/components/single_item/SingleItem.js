import React from 'react'
import "./SingleItem.css"

const SingleItem = ({item, handler}) => {

    const handleClick = () => {
        handler(item.name)
    }

    return(
        <div className="item">
            <img 
            className='front' 
            src={item.src} 
            alt="item front"
            onClick={handleClick}
            />
        </div>
    )
}

export default SingleItem;