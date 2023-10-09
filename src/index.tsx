import React from "react"
import { createRoot } from 'react-dom/client'
import "./index.css"
import 'bootstrap'
import App from "./App"
import { Provider } from 'react-redux'
import { store } from './redux/actions/store'

const root = createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)