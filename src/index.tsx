import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { createBrowserHistory } from 'history'
import { syncHistoryWithStore } from 'mobx-react-router'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import App from './App'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { GlobalContext, InitialGlobals } from './store/GlobalContext'

export const theme = createMuiTheme()

const browserHistory = createBrowserHistory()
const history = syncHistoryWithStore(browserHistory, InitialGlobals.routing)

InitialGlobals.synchronizedHistory = history

const TheApp = (
  <GlobalContext.Provider value={InitialGlobals}>
    <MuiThemeProvider theme={theme}>
      <Router history={history}>
        <App />
      </Router>
    </MuiThemeProvider>
  </GlobalContext.Provider>
)

ReactDOM.render(TheApp, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
