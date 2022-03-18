import React, { useState } from 'react'
import MemoryGame from './components/memory_game/MemoryGame';
import Home from './components/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { memoryGames, frozenImages } from "./utils/constants";

const App = () => {
    const [items, setItems] = useState([])

    const setMemoryGameImages = (images) => {
        setItems(images)
    }

    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home memoryHandler={setMemoryGameImages}/>} />
                    <Route path="/memory_game" element={<MemoryGame items={items} />} />
                </Routes>
            </div>
        </BrowserRouter>

    )
}

export default App;