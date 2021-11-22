import s from './Footer.module.css';

function Footer() {
  const { footer, footerLink } = s;

  return (
    <footer className={footer}>
      &copy; 2021 | All Rights Reserved | Developed with by
      <a
        className={footerLink}
        href="https://github.com/Gulnaz-Sydykbek/react-movies"
      >
        github.com/Gulnaz-Sydykbek
      </a>
    </footer>
  );
}

export default Footer;
