const {desktopCapturer} = require('electron');
import { sourceCard } from './sourceCard';

export function sourcesContainer() {
    var sourcesContainer = document.createElement('div');
    sourcesContainer.classList.add('sourcesContainer');

    //get sources then map over them to make cards
    desktopCapturer.getSources({types: ['window', 'screen']}, (error, sources) => {
        if (error) throw error;
        console.log(sources);

        sources.map(function(item) {
            sourcesContainer.appendChild(sourceCard(item.thumbnail, item.name))
        });
    });

    return sourcesContainer;
}
