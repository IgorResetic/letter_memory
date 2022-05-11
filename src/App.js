import React, { useState } from 'react'
import MemoryGame from './memory_game/MemoryGame';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { memoryGames, frozenImages, gamesList } from "./utils/constants";
import MemoryGameHome from './memory_game/MemoryGameHome';
import Home from './home/Home';
import ReadWriteGame from './read_write_game/ReadWriteGame';
import WordGuessr from './word-guesser/WordGuessr';

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path='/' element={<Home games={gamesList} />}/>
                    <Route path="/memory_games" element={<MemoryGameHome games={memoryGames} />} />
                    <Route path="/memory_games/:name" element={<MemoryGame />} />
                    <Route path="/read_write_games" element={<ReadWriteGame />}/>
                    <Route path="/word_guess_games" element={<WordGuessr />}/>
                </Routes>
            </div>
        </BrowserRouter>

    )
}

export default App;