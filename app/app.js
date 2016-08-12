// Use new ES6 modules syntax for everything.
import { remote } from 'electron'; // native electron module
import jetpack from 'fs-jetpack'; // module loaded from npm
import { sidenavOptionsContainer } from './components/sidenav/sidenavOptionsContainer';
import { mainContentContainer } from './components/mainContentContainer';
import { windowsHeader } from './components/windowsHeader/windowsHeader';

var app = remote.app;
var appDir = jetpack.cwd(app.getAppPath());

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.sideNav').appendChild(sidenavOptionsContainer());
    document.querySelector('.mainContent').appendChild(mainContentContainer());
    document.querySelector('.win32Header').appendChild(windowsHeader());
});
