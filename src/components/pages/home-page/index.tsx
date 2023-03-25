import { useForm } from 'react-hook-form'
import Alert from 'react-bootstrap/Alert'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import BaseButton from '../../atoms/base-button'
import BaseInput from '../../atoms/base-input'
import BlogList from '../../organisms/blog-list'
import BaseModal from '../../molecules/base-modal/index'

import useHomePage from './useHomePage'
import './style.css'

const CreateSchema = yup.object().shape({
  title: yup
    .string()
    .required('Title is required')
    .min(15, 'Title must be at least 15 characters')
    .max(30, 'Title max length must be 30 characters'),
  content: yup
    .string()
    .required('Content is required')
    .min(100, 'Title must be at least 100 characters'),
  image: yup.mixed()
})
type FormData = yup.InferType<typeof CreateSchema>

const HomePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset
  } = useForm<FormData>({
    resolver: yupResolver(CreateSchema)
  })

  const {
    onHandleSearch,
    onCreateBlog,
    onSaveBlog,
    modalIdName,
    onCloseModal,
    isShowCreateModal,
    isShowBadge
  } = useHomePage(clearErrors, reset)

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-4">
          <Alert key="success" variant="success" show={isShowBadge}>
            Create blog successful
          </Alert>
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col-sm-4">
          <BaseInput
            onHandleSearch={onHandleSearch}
            type="search"
            placeholder="Input to search"
          />
        </div>
        <div className="col-sm-4">
          <BaseButton
            onClick={onCreateBlog}
            dataTarget={modalIdName}
            buttonName="Create a blog"
          />
        </div>
      </div>
      <BlogList />
      {isShowCreateModal && (
        <BaseModal
          title="Create A Blog"
          onCloseModal={onCloseModal}
          show={isShowCreateModal}
        >
          <form onSubmit={handleSubmit(onSaveBlog)}>
            <div>
              <label>Title</label>
              <input {...register('title')} className="form-control" />
              {errors?.title && (
                <p className="validate-input">{errors.title?.message}</p>
              )}

              <label>Content</label>
              <textarea
                {...register('content')}
                className="form-control"
                name="content"
              />
              {errors?.content && (
                <p className="validate-input">{errors.content?.message}</p>
              )}
            </div>
            <input type="submit" value="Submit" />
            <input type="button" value="Cancel" onClick={onCloseModal}></input>
          </form>
        </BaseModal>
      )}
    </div>
  )
}

export default HomePage
