import axios from "axios"

export default class DictionaryService{
     
     getWords(word){
        return axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/"+ word)
    }
}