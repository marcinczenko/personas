import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Home } from 'pages/Home'
import registerServiceWorker from './registerServiceWorker'

// JK is the best
ReactDOM.render(<Home />, document.getElementById('root'))
registerServiceWorker()
