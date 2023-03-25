import React from 'react'

interface Props {
  title: string
  image: string
}

const Blog: React.FC<Props> = ({ title, image }) => {
  return (
    <div className="media mt-5 w-100">
      <img
        src={image}
        className="align-self-center mr-3"
        alt={image}
        width={180}
        height={180}
      />
      <div className="media-body">
        <h4 className="mt-0 font-weight-bold">{title}</h4>
      </div>
    </div>
  )
}

export default Blog
