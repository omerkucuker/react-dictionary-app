import axios from "axios"

export default class DictionaryService {



    getWords(word) {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        let apiRes = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word

       return axios.get(apiRes, {
                cancelToken: source.token
            }).catch(error => {
                if (error.response.status === 404) {
                    source.cancel();
                }


            });

        //return axios.get(apiRes, { validateStatus: (status) => status === 200 })

    }

}
