import { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import { useAppSelector } from '../../../store/hooks'
import useBlogList from './useBlogList'
import Blog from '../../molecules/blog'

const ListBlog = () => {
  const { blogList } = useBlogList()
  const [allPosts, setAllBLogs] = useState([])
  const [blogs, setBlogs] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPage, setTotalPage] = useState(0)

  const pageSize = useAppSelector((state) => state.blogList.pageSize)

  const loadMoreItems = () => {
    if (currentPage + 1 < totalPage) {
      const newCurrentPage =
        currentPage < totalPage ? currentPage + 1 : currentPage
      const newBlogs = allPosts.slice(0, (currentPage + 1) * pageSize)
      setCurrentPage(newCurrentPage)
      setBlogs(newBlogs)
    }
  }

  useEffect(() => {
    if (blogList) {
      setAllBLogs(blogList)
      setBlogs(
        blogList?.slice(currentPage * pageSize, (currentPage + 1) * pageSize)
      )
      setTotalPage(Math.ceil(blogList.length / pageSize))
    }
  }, [blogList])

  return (
    <div className="container">
      <div className="row">
        {blogList?.length > 10 ? (
          <InfiniteScroll pageStart={0} loadMore={loadMoreItems} hasMore={true}>
            {blogs?.map((blog: any) => {
              return (
                <Blog key={blog.id} title={blog.title} image={blog.image} />
              )
            })}
          </InfiniteScroll>
        ) : (
          blogs?.map((blog: any) => {
            return <Blog key={blog.id} title={blog.title} image={blog.image} />
          })
        )}
      </div>
    </div>
  )
}

export default ListBlog
