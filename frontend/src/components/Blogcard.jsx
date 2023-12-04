import Detailpage from '../pages/Detailpage';
import { Link } from 'react-router-dom';

export default function Blogcard({ blog, fetchData }) {
  return (
    <article className='blog-cards'>
      <Link to={'/blog'}>
        <div className='container'>
          <div className='img-wrapper'>
            <img src={`http://localhost:9999/${blog.img}`} alt={blog.title} />
          </div>
          <div className='text'>
            <h2>{blog.title}</h2>
            <p>{blog.date}</p>
          </div>
        </div>
      </Link>
    </article>
  );
}
