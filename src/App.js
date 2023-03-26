import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './components/pages/home-page'
import BlogDetail from './components/pages/blog-detail'
import './App.css'

const App = () => {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:blogPath" element={<BlogDetail />} />
        </Routes>
      </Fragment>
    </Router>
  )
}

export default App
