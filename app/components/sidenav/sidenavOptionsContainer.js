import { sidenavOption } from './sidenavOption';

export function sidenavOptionsContainer() {
    var sidenavOptionsContainer = document.createElement('div');
    sidenavOptionsContainer.classList.add('sidenavOptionsContainer');

    var sidenavOptionsArr = [{title: 'Main', icon: 'star'}, {title: 'Record', icon: 'video-camera'}, {title: 'Videos', icon: 'folder-open'}, {title: 'Settings', icon: 'cog'}];
    sidenavOptionsArr.map(function(item) {
        sidenavOptionsContainer.appendChild(sidenavOption(item.title, item.icon));
    });

    sidenavOptionsContainer.addEventListener('click', function(e) {
       console.log(e);

       switch(e.target.dataset.type) {
           case 'Main':
               document.querySelector('.viewRecordContainer').style.display = 'none';
               document.querySelector('.viewMainContainer').style.display = 'block';
               break;
           case 'Record':
               document.querySelector('.viewMainContainer').style.display = 'none';
               document.querySelector('.viewRecordContainer').style.display = 'block';
               break;
           case 'Videos':

               break;
           case 'Settings':

               break;
       }
    });

    return sidenavOptionsContainer;
}
