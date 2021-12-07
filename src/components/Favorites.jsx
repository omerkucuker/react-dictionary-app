import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Favorites = (props) => {
  const [, setFav] = useState([]);

  function handleRemove(id) {
    //const newList = props.favorites.filter((favorites) => favorites !== id);
    //props.setFavorites(newList);
    localStorage.removeItem(id)
    setFav(id)
    toast.success(`${id} is removed from the list`)
  }
  //console.log(props.favorites)

  function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }

    return values;
}
  return (

    <div>

      <div className="ui big label">
        Favorites Page </div> <div><br></br></div>
      <Link to="/" >
        <button className="ui big primary button">
          <i className="home icon"></i>
          Back To Home Page
        </button>
      </Link>
      <br></br><br></br>
      <div>{allStorage().length===0 ?   <h2>List is empty.</h2> :  <div className="ui big list">
        {allStorage().map((favorites) => {
          return (
            <div className="item" key={favorites}>

              <div className="content">
                <i className="pencil alternate icon"></i>
                {favorites} {' '}
                <div className="ui icon buttons">
                  <button className="ui button" onClick={() => handleRemove(favorites)}>
                    <i className="trash alternate outline icon"></i>
                  </button>
                </div>
              </div>


            </div>
          );
        })} {" "}
      </div>}</div>

     
      <ToastContainer />

    </div>
      
  );
};

export default Favorites;