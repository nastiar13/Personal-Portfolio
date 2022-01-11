import Link from 'next/link';
import style from '../../styles/Navigation.module.css';

function Navigation() {
  return (
    <nav className={style.nav_container}>
      <p className={style.name}>Nastiar Hadi</p>
      <div className={style.flex_list}>
        <Link href="#about">About</Link>
        <Link href="#project">Projects</Link>
        <Link href="#contacts">Contacts</Link>
      </div>
    </nav>
  );
}

export default Navigation;
