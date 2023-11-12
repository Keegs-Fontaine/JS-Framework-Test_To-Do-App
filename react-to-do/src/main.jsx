import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

// Context
import GlobalListDataProvider from "./context/GlobalListDataProvider.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalListDataProvider>
      <App />
    </GlobalListDataProvider>
  </React.StrictMode>
)
