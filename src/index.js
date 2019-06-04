import './TouchPolyfil.js'
import React from 'react'
import { hydrate, render } from 'react-dom'

import StyleguideProvider from './components/StyleguideProvider/StyleguideProvider'
import App from './App'
import * as serviceWorker from './serviceWorker'

const root = document.getElementById('root')

if (root.hasChildNodes()) {
  hydrate(<StyleguideProvider><App /></StyleguideProvider>, root)
} else {
  render(<StyleguideProvider><App /></StyleguideProvider>, root)
}

serviceWorker.unregister()
