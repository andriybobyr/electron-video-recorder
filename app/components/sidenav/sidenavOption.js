export function sidenavOption(name, icon) {
    var sidenavOptionContainer = document.createElement('div');
    sidenavOptionContainer.classList.add('sidenavOptionContainer');
    sidenavOptionContainer.setAttribute('data-type', name);
    var sidenavOptionIconContainer = document.createElement('span');
    sidenavOptionIconContainer.classList.add('sidenavOptionIconContainer');
    var sidenavOptionIcon = document.createElement('span');
    sidenavOptionIcon.classList.add('sidenavOptionIcon');
    sidenavOptionIcon.classList.add('fa');
    sidenavOptionIcon.classList.add(`fa-${icon}`);
    sidenavOptionIcon.setAttribute('data-type', name);
    var sidenavOptionTitle = document.createElement('span');
    sidenavOptionTitle.innerHTML = name;
    sidenavOptionTitle.setAttribute('data-type', name);

    sidenavOptionContainer.appendChild(sidenavOptionIconContainer);
    sidenavOptionIconContainer.appendChild(sidenavOptionIcon);
    sidenavOptionContainer.appendChild(sidenavOptionTitle);

    return sidenavOptionContainer;
}
