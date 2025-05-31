//import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Login} from './Login'
import {Project} from './Project'
import {Podcast} from './PodcastPage/PodcastPage.jsx'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/podcast" element={<Podcast /> } />
        <Route path="/project" element={<Project /> } />
      </Routes> 
    </BrowserRouter>
        
    </>
  )
}

export default App
