import { NavLink } from "react-router-dom";
import clsx from 'clsx';
import css from './NavBar.module.css';

const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

export default function NavBar() {
    return (
    <>
<nav  className={css.nav} >
<NavLink to='/' className={buildLinkClass}>Home</NavLink>
<NavLink className={buildLinkClass} to='/movies'>Movies</NavLink>
</nav>
</>)
}