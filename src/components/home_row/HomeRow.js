import React from "react";
import SingleItem from "../single_item/SingleItem";
import useEventListener from "../../utils/listeners/UseEventListener"
import './HomeRow.css';
import '../../utils/style.css'

const HomeRow = ({ title, items, handler }) => {

    const handleChoice = (name) => {
        handler(name)
    }  

    const handleKeyEntery = ({key}) => {
        console.log("key" + key)
        var card = items.find((obj) => {
            console.log(obj)
            return obj.position === key
          });
          
        handler(card.name)
    }

    useEventListener("keydown", handleKeyEntery);

    return ( 
        <div className="HomeRow">
            <h3 className="row-title">{title}</h3>
            <div className="flew-row">
                {items.map((item) => (
                    <SingleItem key={item.key} item={item} handler={handleChoice} flipped={false}/>
                ))}
            </div>
        </div>
    )
}

export default HomeRow;