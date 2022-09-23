import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'

// Redux
import { store } from './store'
import { Provider } from 'react-redux'

// React Router Dom
import { HashRouter } from 'react-router-dom'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/* Configuration of the Redux Library */}
    <Provider store={store}>
      {/* Configuration of the react-router-dom library, using HashRouter */}
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
