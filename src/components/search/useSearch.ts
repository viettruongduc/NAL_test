// import { useEffect, useState } from 'react'
import { useAppDispatch } from '../../store/hooks/index'
import { blogActions } from '../../store/slices/blogSlices'
const useSearch = () => {
  const dispatch = useAppDispatch()
  const onHandleSearch = (event: any) => {
    dispatch(blogActions.getBlogList({ search: event.target.value }))
  }

  return {
    onHandleSearch
  }
}

export default useSearch
