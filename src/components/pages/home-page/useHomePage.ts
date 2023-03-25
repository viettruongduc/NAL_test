import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks/index'
import { blogActions } from '../../../store/slices/blogSlices'

const useHomePage = (clearErrors: () => void, reset: () => void) => {
  const dispatch = useAppDispatch()
  const { isShowCreateModal, modalIdName } = useAppSelector(
    (state) => state.blogList
  )
  const [isShowBadge, setIsShowBadge] = useState(false)

  const onHandleSearch = (event: any) => {
    dispatch(blogActions.getBlogList({ search: event.target.value }))
  }

  const onCreateBlog = () => {
    dispatch(blogActions.setIsShowCreateModal({ isShowCreateModal: true }))
  }

  const onSaveBlog = (data: any) => {
    data &&
      dispatch(
        blogActions.createBlog({
          title: data.title,
          content: data.content
        })
      )
    dispatch(blogActions.setIsShowCreateModal({ isShowCreateModal: false }))
    setIsShowBadge(true)
    setTimeout(() => {
      setIsShowBadge(false)
    }, 1500)
    reset()
  }

  const onCloseModal = () => {
    dispatch(blogActions.setIsShowCreateModal({ isShowCreateModal: false }))
    clearErrors()
  }

  return {
    onHandleSearch,
    onCreateBlog,
    onSaveBlog,
    onCloseModal,
    modalIdName,
    isShowCreateModal,
    isShowBadge
  }
}

export default useHomePage
