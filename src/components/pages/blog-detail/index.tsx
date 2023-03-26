import { useLocation } from 'react-router-dom'
import useBlogDetail from './useblogDetail'

const BlogDetail = () => {
  const location = useLocation()
  const blogId = Number(location.pathname.split('/')[1])
  const { blog } = useBlogDetail(blogId)

  const createMarkup = (data: any) => {
    return { __html: data }
  }

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="row">
        <div className="col">
          <h1 className="">{blog?.title}</h1>
          <div dangerouslySetInnerHTML={createMarkup(blog?.content)} />
        </div>
      </div>
    </div>
  )
}

export default BlogDetail
