import React, { useState } from "react";
import { Button } from 'semantic-ui-react'
import AudioPlayer from "react-audio-element";
import DictionaryService from "../services/dictionaryService"
import { Link } from "react-router-dom";

const Anasayfa = (props) => {
    let textInput = React.createRef();
    const [words, setWords] = useState([]);
  
    const onOnclickHandler = (e) => {
      let dictionaryService = new DictionaryService();
      dictionaryService.getWords(textInput.current.value).then((result) => setWords(result.data));
    };
  
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
                </div>
                );
            })} {" "}
  
          </div>
  
  
          <div className="ui red button">
            <i className="heart icon"></i> Add To Favorites
          </div>
  
          </div>      
    );
};

export default Anasayfa;