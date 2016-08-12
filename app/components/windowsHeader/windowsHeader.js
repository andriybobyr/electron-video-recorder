export function windowsHeader() {
    var windowsHeaderContainer = document.createElement('div');
    windowsHeaderContainer.classList.add('windowsHeaderContainer');
    var burgerIcon = document.createElement('span');
    burgerIcon.classList.add('burgerIcon');
    burgerIcon.classList.add('fa');
    burgerIcon.classList.add('fa-bars');
    burgerIcon.classList.add('fa-2x');
    var mainContentTitle = document.createElement('span');
    mainContentTitle.classList.add('mainContentTitle');

    windowsHeaderContainer.appendChild(burgerIcon);
    windowsHeaderContainer.appendChild(mainContentTitle);

    burgerIcon.addEventListener('click', function() {
        var sidenav = document.querySelector('.sideNav');

        if(sidenav.dataset.state === 'expanded') {
            //collapse
            sidenav.style.width = '60px';

            sidenav.setAttribute('data-state', 'collapsed');
        } else {
            //expand
            sidenav.style.width = '20%';

            sidenav.setAttribute('data-state', 'expanded');
        }
    });

    return windowsHeaderContainer;
}
