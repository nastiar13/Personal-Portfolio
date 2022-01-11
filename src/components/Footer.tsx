import Image from 'next/image';
import Link from 'next/link';
import style from '../../styles/Footer.module.css';

function Footer() {
  return (
    <footer>
      <div className={style.contact}>
        <Link href="https://instagram.com/nastiarhadi">
          <Image
            src="/img/instagram.png"
            width={32}
            height="30px"
            layout="fixed"
          />
        </Link>
        <Link href="lingkedin">
          <Image src="/img/linkedin.png" width="30" height="30" />
        </Link>
        <Link href="email">
          <Image src="/img/envelop.png" width="30" height="30" />
        </Link>
      </div>
      <p className={style.copyright}>©Nastiar Hadi 2021</p>
      <svg
        className={style.waves}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 200"
      >
        <path
          fill="#FDC435"
          fillOpacity="1"
          d="M0,96L80,106.7C160,117,320,139,480,133.3C640,128,800,96,960,74.7C1120,53,1280,43,1360,37.3L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        />
      </svg>
    </footer>
  );
}

export default Footer;
