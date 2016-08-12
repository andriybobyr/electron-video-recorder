import { sourcesContainer } from './sourcesContainer';

export function viewRecordContainer() {
    var viewRecordContainer = document.createElement('div');
    viewRecordContainer.classList.add('viewRecordContainer');

    viewRecordContainer.appendChild(sourcesContainer());

    return viewRecordContainer;
}
