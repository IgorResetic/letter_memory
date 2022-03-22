import React, { useState } from 'react'
import MemoryGame from './memory_game/MemoryGame';
import Home from './home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { memoryGames, frozenImages } from "./utils/constants";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:name" element={<MemoryGame />} />
                </Routes>
            </div>
        </BrowserRouter>

    )
}

export default App;