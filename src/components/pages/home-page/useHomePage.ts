import { useAppDispatch, useAppSelector } from '../../../store/hooks/index'
import { blogActions } from '../../../store/slices/blogSlices'

const useHomePage = () => {
  const dispatch = useAppDispatch()
  const { isShowCreateModal, isShowBadge } = useAppSelector(
    (state) => state.blogList
  )

  const onHandleSearch = (event: any) => {
    dispatch(blogActions.getBlogList({ search: event.target.value }))
  }

  const onCreateBlog = () => {
    dispatch(blogActions.setIsShowCreateModal(true))
  }

  return {
    onHandleSearch,
    onCreateBlog,
    isShowCreateModal,
    isShowBadge
  }
}

export default useHomePage
