import React from 'react';
import './App.css';
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Banners from './components/Banners';
import Sale from './components/Sale';

function App() {
    return (
        <div className="App">
            <Header/>
            <Carousel/>
            <Banners/>
            <Sale/>
        </div>
    );
}

export default App;
