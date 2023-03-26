import { useAppDispatch, useAppSelector } from '../../../store/hooks/index'
import { blogActions } from '../../../store/slices/blogSlices'

const useCreateBlogModal = (clearErrors: () => void, reset: () => void) => {
  const dispatch = useAppDispatch()
  const { isShowCreateModal } = useAppSelector((state) => state.blogList)

  const onSaveBlog = (data: any) => {
    data &&
      dispatch(
        blogActions.createBlog({
          title: data.title,
          content: data.content
        })
      )
    dispatch(blogActions.setIsShowCreateModal(false))
    dispatch(blogActions.setIsShowBadge(true))
    setTimeout(() => {
      dispatch(blogActions.setIsShowBadge(false))
    }, 1500)
    reset()
  }

  const onCloseModal = () => {
    dispatch(blogActions.setIsShowCreateModal(false))
    clearErrors()
  }

  return {
    onSaveBlog,
    onCloseModal,
    isShowCreateModal
  }
}

export default useCreateBlogModal
