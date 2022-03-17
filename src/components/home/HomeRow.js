import React from "react";
import { memoryGames } from "../../utils/constants";
import SingleCard from "../SingleCard";
import SingleItem from "./SingleItem";
import './HomeRow.css';

const HomeRow = ({ title, items }) => {

    const handleChoice = (cards) => {
        console.log(cards)
    }  

    return ( 
        <div className="HomeRow">
            <h3 className="row-title">{title}</h3>
            <div className="row">
                {items.map((item) => (
                    <SingleItem key={item.key} item={item} handler={handleChoice}/>
                ))}
            </div>
        </div>
    )
}

export default HomeRow;