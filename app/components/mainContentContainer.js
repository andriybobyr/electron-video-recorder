import { viewMainContainer } from './viewMain/viewMainContainer';
import { viewRecordContainer } from './viewRecord/viewRecordContainer';

export function mainContentContainer() {
    var mainContentContainer = document.createElement('div');
    mainContentContainer.classList.add('mainContentContainer');

    mainContentContainer.appendChild(viewMainContainer());
    mainContentContainer.appendChild(viewRecordContainer());

    return mainContentContainer;
}
