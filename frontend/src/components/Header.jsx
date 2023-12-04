import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div>
        <NavLink to='/admin'>Admin</NavLink>
      </div>
    </header>
  );
}
