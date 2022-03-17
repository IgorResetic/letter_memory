import React from "react";
import { memoryGames } from "../../utils/constants";
import "./Home.css";
import HomeRow from "./HomeRow"
import App from "../../App"

const Home = () => {

    var rowTitle="Memory"

    const handleChoice = (cards) => {
       
    }

    return(
        <div className="Home">
            <HomeRow 
            className="card-grid" 
            title={rowTitle} items={memoryGames}
            />
        </div>
    )
}

export default Home;