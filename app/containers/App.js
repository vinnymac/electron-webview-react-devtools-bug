// @flow
import React, { Component } from 'react';
import type { Children } from 'react';

const toggleDevTools = (webview) => {
  if (webview.isDevToolsOpened()) {
    webview.closeDevTools()
  } else {
    webview.openDevTools()
  }
}

export default class App extends Component {
  props: {
    children: Children
  };

  componentDidMount() {
    this.webview.setAttribute('nodeintegration', true)
    this.webview.setAttribute('preload', './preload.js')
    // this.webview.setAttribute('disablewebsecurity', true)
  }

  render() {
    return (
      <div>
        <button onClick={() => toggleDevTools(this.webview)}>Toggle Webview DevTools</button>
        <webview
          id="webview"
          ref={(c) => { this.webview = c }}
          src="https://facebook.github.io/react/"
        />
      </div>
    );
  }
}
