var webFrame = require('electron').webFrame;

webFrame.registerURLSchemeAsBypassingCSP('chrome-extension://');
