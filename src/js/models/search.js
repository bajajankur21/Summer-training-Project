import axios from 'axios';



export default class Search {
    constructor(word){
        this.word = word;
        this.meanings = [];
        this.synonyms = [];
        this.examples = [];
        this.pronounciation = [];
    }
    async getResults() {
        let key = `3368e076-5a74-48f4-83b7-de6224664cdd`;
        let proxy = `https://cors-anywhere.herokuapp.com/`;
        
        try
        {
            
            const result = await axios(`${proxy}https://wordsapiv1.p.rapidapi.com/words/${this.word}`, {
                "method": `GET`,
                "headers": {
                    "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
                    "x-rapidapi-key": "9ad5d25a46msh3cfd6f8082aed55p125e09jsn7835a8660606"
                }
            });
            console.log(result);
           
                for(let i = 0; i<result.data.results.length; i++){
            this.meanings.push(result.data.results[i].definition);
                
            
            if(result.data.results[i].examples){
            for (let j = 0; j < result.data.results[i].examples.length; j++) {
                this.examples.push(result.data.results[i].examples[j]);
            }}
            if(result.data.results[i].synonyms){
                for(let k = 0; k< result.data.results[i].synonyms.length; k++){
                    this.synonyms.push(result.data.results[i].synonyms[k]);

                }
            }


                    
        }
        if(result.data.pronunciation){
            this.pronounciation.push(result.data.pronunciation.all);
        }


        }
        catch(err){
            alert(err);
            console.log(err);
        }
        

        
    }
     
     
}

 




 

