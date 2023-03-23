import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { blogActions } from '../../store/slices/blogSlices'

const useBlogList = () => {
  const dispatch = useAppDispatch()
  const { blogList, blogFilter, totalBlog } = useAppSelector(
    (state) => state.blogList
  )
  const [totalCount, setTotalCount] = useState(blogList?.length)

  useEffect(() => {
    dispatch(blogActions.getBlogList({ ...blogFilter, page: 1 }))
  }, [])

  useEffect(() => {
    setTotalCount(blogList?.length)
  }, [blogList])

  return {
    blogList,
    totalBlog,
    totalCount
  }
}

export default useBlogList
