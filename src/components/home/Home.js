import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { memoryGames, frozenImages, trollsImages } from "../../utils/constants";
import MemoryGame from "../memory_game/MemoryGame";
import "./Home.css";
import HomeRow from "./HomeRow"

const Home = ({ memoryHandler }) => {
    const navigate = useNavigate()

    var rowTitle = "Memory"

    const clickHandler = (items) => {
        window.localStorage.setItem('items', JSON.stringify(items))
        console.log("This is click")
        memoryHandler(items)
        navigate('/memory_game')
    }

    return (
        <div className="Home">
            <HomeRow
                className="card-grid"
                title={rowTitle} items={memoryGames}
                handler={clickHandler}
            />

        </div>
    )
}

export default Home;