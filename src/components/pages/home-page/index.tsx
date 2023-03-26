import BaseButton from '../../atoms/base-button'
import BaseInput from '../../atoms/base-input'
import BaseBadge from '../../atoms/base-badge/index'
import BlogList from '../../organisms/blog-list'
import CreateBlogModal from '../../organisms/create-blog-modal'

import useHomePage from './useHomePage'

const HomePage = () => {
  const { onHandleSearch, onCreateBlog, isShowCreateModal, isShowBadge } =
    useHomePage()

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-4">
          <BaseBadge
            keyName="success"
            variant="success"
            content="Blog successfully created"
            show={isShowBadge}
          />
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col-sm-4">
          <BaseInput
            onChange={onHandleSearch}
            type="search"
            placeholder="Input to search"
            className="form-control"
          />
        </div>
        <div className="col-sm-4">
          <BaseButton
            onClick={onCreateBlog}
            buttonName="Create a blog"
            className="btn btn-primary"
          />
        </div>
      </div>
      <BlogList />
      {isShowCreateModal && <CreateBlogModal />}
    </div>
  )
}

export default HomePage
