import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { blogActions } from '../../../store/slices/blogSlices'

const useBlogList = () => {
  const dispatch = useAppDispatch()
  const { blogList, blogFilter } = useAppSelector((state) => state.blogList)

  useEffect(() => {
    dispatch(blogActions.getBlogList({ ...blogFilter }))
  }, [])

  return {
    blogList
  }
}

export default useBlogList
