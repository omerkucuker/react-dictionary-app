import React, { useState }  from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Favorites from "./components/Favorites.jsx";
import Homepage from "./components/Homepage.jsx";


function App() {
  const [favorites, setFavorites] = useState([]);
  //console.log(favorites)

  return (
    <Router>
      <div className="main_wrapper">
        <header></header>
        <div className="ui raised very padded text container segment">

        <Routes>

            <Route path="/" exact element={<Homepage favorites={favorites} setFavorites={setFavorites}/>} />
            <Route path="/favorites"  element={<Favorites favorites={favorites} setFavorites={setFavorites} />}  />

        </Routes>

      </div>
      </div>

    </Router>


  );
}

export default App;
