var webFrame = require('electron').webFrame;

// webFrame.registerURLSchemeAsSecure('chrome-extension');
webFrame.registerURLSchemeAsPrivileged('chrome-extension', { secure: true });
