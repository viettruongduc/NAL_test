import React from 'react'
import BlogList from './blogList'
import Search from './search'

function HomePage() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-sm-4">
          <Search />
        </div>
        <div className="col-sm-4"></div>
        <div className="col-sm-4"></div>
      </div>
      <BlogList />
    </div>
  )
}

export default HomePage
