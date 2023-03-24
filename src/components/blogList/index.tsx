// import { useAppSelector } from '../../store/hooks'
import useLazyLoad from '../../store/hooks/useLazyLoad'
import { useRef } from 'react'
import Blog from '../blog'
// import Pagination from '../pagination'
import useBlogList from './useBlogList'
import LoadingBlogs from '../loadingBlogs'
import clsx from 'clsx'

const ListBlog = () => {
  // const { blogList } = useAppSelector((state) => state.blogList)
  // console.log(blogList)

  const NUM_PER_PAGE = 6
  const TOTAL_PAGES = 3

  const { blogList, totalCount } = useBlogList()
  const triggerRef = useRef(null)
  const onGrabData = (currentPage: number) => {
    // This would be where you'll call your API
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = blogList.slice(
          ((currentPage - 1) % TOTAL_PAGES) * NUM_PER_PAGE,
          NUM_PER_PAGE * (currentPage % TOTAL_PAGES)
        )
        resolve(data)
      }, 3000)
    })
  }
  const { data, loading } = useLazyLoad({ triggerRef, onGrabData })

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
      {/* <div className="mt-3 mb-3 d-flex justify-content-center">
        {blogList?.length > 0 && <Pagination totalPosts={totalCount} />}
      </div> */}
      <div ref={triggerRef} className={clsx('trigger', { visible: loading })}>
        <LoadingBlogs />
      </div>
    </div>
  )
}

export default ListBlog
