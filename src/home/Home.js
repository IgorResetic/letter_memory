import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { memoryGames, frozenImages, trollsImages } from "../utils/constants";
import "./Home.css";
import HomeRow from "../components/home_row/HomeRow"

const Home = ( {games} ) => {
    const navigate = useNavigate()

    var rowTitle = "Games"

    const clickHandler = (name) => {
        navigate('/'+ name)
    }

    return (
        <div className="Home">
            <HomeRow
                className="card-grid"
                title={rowTitle} items={ games }
                handler={clickHandler}
            />

        </div>
    )
}

export default Home;