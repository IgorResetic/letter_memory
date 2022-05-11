import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { memoryGames, frozenImages, trollsImages } from "../utils/constants";
import MemoryGame from "./MemoryGame";
import "./MemoryGameHelpers";
import HomeRow from "../components/home_row/HomeRow"

const MemoryGameHome = ({ games }) => {
    const navigate = useNavigate()

    var rowTitle = "Memory"

    const clickHandler = (name) => {
        navigate('/memory_games/'+ name)
    }

    return (
        <div className="Home">
            <HomeRow
                title={rowTitle} items={ games }
                handler={clickHandler}
            />

        </div>
    )
}

export default MemoryGameHome;