import { useAppDispatch, useAppSelector } from '../../../store/hooks/index'
import { blogActions } from '../../../store/slices/blogSlices'

const useHomePage = (clearErrors: () => void) => {
  const dispatch = useAppDispatch()
  const { isShowCreateModal, modalIdName } = useAppSelector(
    (state) => state.blogList
  )

  const onHandleSearch = (event: any) => {
    dispatch(blogActions.getBlogList({ search: event.target.value }))
  }

  const onCreateBlog = () => {
    dispatch(blogActions.setIsShowCreateModal({ isShowCreateModal: true }))
    dispatch(blogActions.setModalId('#createModal'))
    // dispatch(blogActions.createBlog({ title: '125' }))
    // for (let i = 100; i < 150; i++) dispatch(blogActions.deleteBlog({ id: i }))
  }

  const onSaveBlog = (data: any) => {
    // console.log(7879989)

    data &&
      dispatch(
        blogActions.createBlog({
          title: data.title,
          content: data.content
        })
      )
    dispatch(blogActions.setIsShowCreateModal({ isShowCreateModal: false }))
  }

  const onCloseModal = () => {
    clearErrors()
  }

  return {
    onHandleSearch,
    onCreateBlog,
    onSaveBlog,
    onCloseModal,
    modalIdName,
    isShowCreateModal
  }
}

export default useHomePage
