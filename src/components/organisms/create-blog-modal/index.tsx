import { useState } from 'react'

import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import BaseModal from '../../molecules/base-modal/index'
import useCreateBlogModal from './useCreateBlogModal'
import './style.css'

const CreateSchema = yup.object().shape({
  title: yup
    .string()
    .required('Title is required')
    .min(15, 'Title must be at least 15 characters')
    .max(100, 'Title max length must be 100 characters'),
  content: yup
    .string()
    .required('Content is required')
    .min(100, 'Title must be at least 100 characters'),
  image: yup.mixed()
})

type FormData = yup.InferType<typeof CreateSchema>

const CreateBlogModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset
  } = useForm<FormData>({
    resolver: yupResolver(CreateSchema)
  })

  const [newContent, setNewContent] = useState('')

  const { onSaveBlog, onCloseModal, isShowCreateModal } = useCreateBlogModal(
    clearErrors,
    reset
  )

  return (
    <>
      {isShowCreateModal && (
        <BaseModal
          title="Create A Blog"
          onHide={onCloseModal}
          show={isShowCreateModal}
        >
          <form onSubmit={handleSubmit(onSaveBlog)}>
            <div className="modal-body">
              <label>Title</label>
              <input {...register('title')} className="form-control" />
              <div className="title-field">
                {errors?.title && (
                  <p className="validate-input">{errors.title?.message}</p>
                )}
              </div>

              <label className="mt-3">Content</label>
              <CKEditor
                editor={ClassicEditor}
                onChange={(event: Event, editor: typeof ClassicEditor) => {
                  const data = editor.getData()
                  setNewContent(data)
                }}
              />
              {newContent && (
                <input
                  {...register('content')}
                  className="form-control"
                  name="content"
                  value={newContent}
                  hidden
                />
              )}
              <div className="content-field">
                {!newContent && errors?.content && (
                  <p className="validate-input">{errors.content?.message}</p>
                )}
              </div>
            </div>
            <div className="button-wrapper float-right mr-3 mb-2">
              <input type="submit" value="Submit" className="btn btn-primary" />
              <input
                type="button"
                value="Cancel"
                onClick={onCloseModal}
                className="btn btn-danger ml-2"
              />
            </div>
          </form>
        </BaseModal>
      )}
    </>
  )
}

export default CreateBlogModal
