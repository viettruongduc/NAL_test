// import { useAppSelector } from '../../store/hooks'
import Blog from '../blog'
import Pagination from '../pagination'
import useBlogList from './useBlogList'

const ListBlog = () => {
  // const { blogList } = useAppSelector((state) => state.blogList)
  // console.log(blogList)
  const { blogList, totalCount } = useBlogList()

  return (
    <div className="container">
      <div className="row row-cols-2">
        {blogList?.map((blog: any) => {
          return (
            <Blog
              key={blog.id}
              title={blog.title}
              image={blog.image}
              content={blog.content}
            />
          )
        })}
      </div>
      <div className="mt-3 mb-3 d-flex justify-content-center">
        {blogList?.length > 0 && <Pagination totalPosts={totalCount} />}
      </div>
    </div>
  )
}

export default ListBlog
