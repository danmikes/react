import Title from '../component/Title'
import blogs from '../component/allBlogs'

function BlogPage() {
  return (
    <div className='BlogPage'>
      <Title title={'blogs'} span={'blogs'} />
      <div className="blogs">
        {
          blogs.map((blog) => {
            return <div className="blog" key={blog.id}>
              <div className="blog-content">
                <img src={blog.image} alt="" />
                <a href={blog.link} className="blog-link">
                  {blog.title}
                </a>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default BlogPage
