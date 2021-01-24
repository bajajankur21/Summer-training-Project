import {elements} from  './base';



/*        <li>
            <ul>
                <li>signal that comes out of an electronic system</li>
                <li>what is produced in a given time period</li>
                <li>final product; the things produced</li>
                <li>production of a certain amount</li>
                <li>to create or manufacture a specific amount</li>
            </ul>
        </li>
 */

const renderMeaning = (results) => {
    const markup = `
    
    <ul>
        <li>${results}</li>
        
    </ul>

    
     `;
     elements.resultList.insertAdjacentHTML("beforeEnd", markup);
 };
 
 
 export const renderMeanings = (results) => {
     results.forEach(renderMeaning);
 };
 
 export const clearPage = () => {
     elements.resultList.innerHTML = '';
     elements.synonymsList.innerHTML = '';
     elements.pronounciation.innerHTML = '';
     elements.example.innerHTML = '';

 };
 
 const renderSynonym = (results) => {
     const markup = `
     <ul>
        <li>${results}</li>
        
    </ul>
     `;
     elements.synonymsList.insertAdjacentHTML("beforeEnd", markup);
 };
 
 export const renderSynonyms = (results) => {
    results.forEach(renderSynonym);
};
 
export const clearSynonyms = () => {
    elements.synonymsList.innerHTML = '';
};
 

const renderAntonym = (results) => {
    const markup = `<ul>
        <li>${results}</li>
        
    </ul>`;
    elements.antonym.insertAdjacentHTML("beforeEnd", markup);
};

export const renderAntonyms = (results) => {
    results.forEach(renderAntonym);
};
export const clearAntonyms = () => {
    elements.antonym.innerHTML = '';
};

const renderRhyme = (results) => {
    const markup = `
    <ul>
        <li>${results}</li>
        
    </ul>
    `;
    elements.rhymes.insertAdjacentHTML("beforeEnd", markup);
};
export const renderRhymes = (results) => {
    results.forEach(renderRhyme);
};
export const clearRhymes = () => {
    elements.rhymes.innerHTML = '';
};

const renderExample = (results) => {
    const markup = `
    <ul>
        <li>${results}</li>
        
    </ul>
    `;
    elements.example.insertAdjacentHTML("beforeEnd", markup);
};

export const renderExamples = (results) => {
    results.forEach(renderExample);
};


export const clearExamples = () => {
    elements.example.innerHTML = '';
};

const renderPronounciation = (results) => {
    const markup = `
    <ul>
        <li>${results}</li>
        
    </ul>
    `;
    elements.pronounciation.insertAdjacentHTML("beforeEnd", markup);
};
export const renderPronounciations = (results) => {
    results.forEach(renderPronounciation);
};

export const clearPronounciation = () => {
    elements.pronounciation.innerHTML = '';
};

