import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Favorites from "./components/Favorites.jsx";
import Anasayfa from "./components/Anasayfa.jsx";


function App() {


  return (
    <Router>
      <div className="main_wrapper">
        <header></header>
        <div className="ui raised very padded text container segment">

        <Routes>

            <Route path="/" exact element={<Anasayfa />} />
            <Route path="/favorites"  element={<Favorites />}  />

        </Routes>

      </div>
      </div>

    </Router>


  );
}

export default App;
