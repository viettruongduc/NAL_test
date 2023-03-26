import { Link } from 'react-router-dom'

interface Props {
  title: string
  image: string
  content: string
  id: number
}

const createMarkup = (data: any) => {
  return { __html: data }
}

const Blog: React.FC<Props> = ({ title, image, content, id }) => {
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
        <Link to={`/${id}`} className="mt-0 font-weight-bold title-blog">
          {title}
        </Link>
        <div dangerouslySetInnerHTML={createMarkup(content.substring(0, 30))} />
      </div>
    </div>
  )
}

export default Blog
