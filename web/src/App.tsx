import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Router from './routes'

export default function App() {

  return (
    <div id="app">
     <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  )
}