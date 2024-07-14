import React from 'react'
import { Link } from 'react-router-dom'
import SpiderMan from '../Spider-Man_PS4_cover.jpg'

const MainPage = () => {
  return (
    <div>
      <h1>Spider Man</h1>
      <img src={SpiderMan} alt="Spider Man" />
      <Link to="/about">About Spiderman</Link>
      <div className="box">
        <Link to="/1">Fact 1</Link>
        <Link to="/2">Fact 2</Link>
        <Link to="/3">Fact 3</Link>
      </div>
    </div>
  )
}

export default MainPage
