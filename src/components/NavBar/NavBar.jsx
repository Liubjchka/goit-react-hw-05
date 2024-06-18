import { NavLink } from "react-router-dom";
import clsx from 'clsx';
import css from './NavBar.module.css';

const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

const NavBar = () => {
    return (
    <>
<nav  className={css.nav} >
<NavLink to='/' className={buildLinkClass}>Home</NavLink>
<NavLink to='/movies' className={buildLinkClass} >Movies</NavLink>
</nav>
</>)
}

export default NavBar;