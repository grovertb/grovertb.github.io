import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import registerServiceWorker from './registerServiceWorker'

const theme = createMuiTheme()

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
)

registerServiceWorker()
