import Blogcard from './Blogcard';

export default function Gallery({ blogs, fetchData }) {
  console.log('gallery props:', blogs);
  return (
    <section className='gallery'>
      {blogs?.map((blog) => (
        <Blogcard blog={blog} key={blog.id} fetchData={fetchData} />
      ))}
    </section>
  );
}
