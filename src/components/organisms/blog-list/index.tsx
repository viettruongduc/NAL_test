import InfiniteScroll from 'react-infinite-scroller'
import Blog from '../../molecules/blog'
import useBlogList from './useBlogList'

const ListBlog = () => {
  const { blogList, blogs, loadMoreItems } = useBlogList()

  return (
    <div className="container">
      <div className="row">
        {blogList?.length > 10 ? (
          <InfiniteScroll pageStart={0} loadMore={loadMoreItems} hasMore={true}>
            {blogs?.map((blog) => {
              return (
                <Blog
                  key={blog.id}
                  id={blog.id}
                  title={blog.title}
                  image={blog.image}
                  content={blog.content}
                />
              )
            })}
          </InfiniteScroll>
        ) : (
          blogs?.map((blog) => {
            return (
              <Blog
                key={blog.id}
                id={blog.id}
                title={blog.title}
                image={blog.image}
                content={blog.content}
              />
            )
          })
        )}
      </div>
    </div>
  )
}

export default ListBlog
