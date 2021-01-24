import Search from './models/search';
import {elements} from './views/base';
import * as searchView from './views/searchViews';

/**
 * SEARCH CONTROLLER
 */
const searchControl = async () => {
    var input = elements.inputBox.value;
    const search = new Search(input);
    console.log(input);
    if(input)
{
   searchView.clearPage();
   await search.getResults(input);
   searchView.renderMeanings(search.meanings);
   searchView.renderSynonyms(search.synonyms);
   searchView.renderExamples(search.examples);
   searchView.renderPronounciations(search.pronounciation);
   elements.inputBox.innerHTML = '';
   elements.inputBox.focus();
}
};

    const clearFields = () => {elements.inputBox.value = "";};
    elements.inputBtn.addEventListener('click', (e) => {
        searchControl();
        clearFields();
        e.preventDefault();
        elements.inputBox.focus();
    },false);
    
    window.addEventListener('load', () => {
        elements.inputBox.focus();
        
    });
    window.addEventListener('keypress', (e) => {
        if (event.keyCode === 13 || event.which === 13)
    {
            searchControl();
            e.preventDefault();
            clearFields();
    }
    },false);

/**
 * document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
 */