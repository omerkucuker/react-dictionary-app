import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Favorites = (props) => {

  function handleRemove(id) {
    const newList = props.favorites.filter((favorites) => favorites !== id);
    props.setFavorites(newList);
    toast.success(`${id} is removed from the list`)
  }
  //console.log(props.favorites)
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

      <div className="ui big list">
        {props.favorites.map((favorites) => {
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
      </div>
      <ToastContainer />

    </div>
      
  );
};

export default Favorites;