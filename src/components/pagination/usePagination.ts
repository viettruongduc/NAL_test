import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks/index'
import { blogActions } from '../../store/slices/blogSlices'

const usePagination = (totalPosts: any) => {
  const dispatch = useAppDispatch()
  const { blogFilter } = useAppSelector((state) => state.blogList)
  const pageNumbers = []
  const postsPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  const handlePreviousPageClick = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPageClick = () => {
    if (currentPage !== Math.ceil(totalPosts / postsPerPage)) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePageClick = (selected: number) => {
    setCurrentPage(selected)
  }

  useEffect(() => {
    dispatch(blogActions.getBlogList({ ...blogFilter, page: currentPage }))
  }, [currentPage])

  return {
    handlePageClick,
    handlePreviousPageClick,
    handleNextPageClick,
    pageNumbers,
    currentPage
  }
}

export default usePagination
