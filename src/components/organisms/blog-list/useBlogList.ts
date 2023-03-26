import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { blogActions } from '../../../store/slices/blogSlices'
import { MBlogModel } from '../../../models/blog'

const useBlogList = () => {
  const dispatch = useAppDispatch()
  const [allPosts, setAllBLogs] = useState([])
  const [blogs, setBlogs] = useState<MBlogModel[]>([])
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPage, setTotalPage] = useState(0)

  const { blogList, blogFilter } = useAppSelector((state) => state.blogList)
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

  useEffect(() => {
    dispatch(blogActions.getBlogList({ ...blogFilter }))
  }, [])

  return {
    blogList,
    blogs,
    loadMoreItems
  }
}

export default useBlogList
