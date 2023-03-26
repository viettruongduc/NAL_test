import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks/index'

import { blogActions } from '../../../store/slices/blogSlices'
import { MBlogModel } from '../../../models/blog'

const useBlogDetail = (idBlog: number) => {
  const dispatch = useAppDispatch()
  const { blogDetail } = useAppSelector((state) => state.blogList)
  const [blog, setBlog] = useState<MBlogModel>()

  useEffect(() => {
    setBlog(blogDetail)
  }, [blogDetail])

  useEffect(() => {
    dispatch(blogActions.getBlogById({ idBlog }))
  }, [])

  return {
    blog
  }
}

export default useBlogDetail
