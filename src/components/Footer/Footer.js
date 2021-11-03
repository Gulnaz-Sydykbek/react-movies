import s from './Footer.module.css';

function Footer() {
  return (
    <footer className={s.footer}>
      &copy; 2021 | All Rights Reserved | Developed with by
      <a
        className={s.footerLink}
        href="https://github.com/Gulnaz-Sydykbek/react-movies"
      >
        github.com/Gulnaz-Sydykbek
      </a>
    </footer>
  );
}

export default Footer;
