import Form from '../components/Form';
import { NavLink } from 'react-router-dom';

export default function Adminpage({ fetchData }) {
  return (
    <>
      <section className='adminpage'>
        <div className='link-wrapper'>
          <NavLink to='/'>Home</NavLink>
        </div>
        <h1>NEW BLOG POST</h1>
        <Form fetchData={fetchData} />
      </section>
    </>
  );
}
