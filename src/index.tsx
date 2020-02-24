import './index.css'
import 'normalize.css'

import React from 'react'
import ReactDOM from 'react-dom'

import App from '@/components/App'
import RichTextExample from '@/components/RTE'

ReactDOM.render(<App />, document.getElementById('main'))
ReactDOM.render(<RichTextExample />, document.getElementById('rte'))
