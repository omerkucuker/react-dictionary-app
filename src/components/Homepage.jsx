import React, { useState } from "react";
import { Button } from 'semantic-ui-react'
import AudioPlayer from "react-audio-element";
import DictionaryService from "../services/dictionaryService"
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Homepage = (props) => {
  let textInput = React.createRef();
  //const [favorites, setFavorites] = useState([]);
  const [words, setWords] = useState([]);

  // console.log(favorites)

  const onOnclickHandler = (e) => {
    let dictionaryService = new DictionaryService();
    dictionaryService.getWords(textInput.current.value).then((result) => setWords(result.data));
  };

  function handleAdd() {
    if (props.favorites.indexOf(textInput.current.value) > -1)
      alert("This item is already added to list")
    else {
      const newList = props.favorites.concat(textInput.current.value);
      props.setFavorites(newList);
      toast.success(`${textInput.current.value} is added from the list`)
    }


  }

  /*useEffect(() => {
    let dictionaryService = new DictionaryService();
    dictionaryService.getWords(textInput.current.value)
      .then((result) => setWords(result.data[0].meanings[0].definitions[0].definition));
  }, []); */

  return (
    <div>
      <div className="ui large icon input">
        <input ref={textInput} type="text" placeholder="Enter word for definition" />
        <i className="search icon"></i>
      </div>
      <Button primary size='big' onClick={onOnclickHandler} >Search</Button>
      <Link to="/favorites" className="ui big right floated red button">
        <i className="heart icon"></i>
        Favorites
      </Link>
      <div className="ui big list">
        {words.map((word) => {
          return (
            <div className="item" key={word}>

              <div className="content">
                <i className="info circle icon"></i>
                Definiton: {word.meanings[0].definitions[0].definition}
              </div>
              <br></br>
              <div className="content">
                <i className="bullhorn icon"></i>
                Phonetic: {word.phonetic}
              </div>
              <br></br>
              <div className="content">
                <i className="volume up icon"></i>
                <AudioPlayer
                  src={word.phonetics[0].audio}
                />


              </div>
              <div className="ui red button" onClick={handleAdd}>
                <i className="heart icon"></i> Add To Favorites
              </div>
            </div>

          );
        })} {" "}

      </div>

      <ToastContainer />

    </div>
  );
};

export default Homepage;