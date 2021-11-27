import { useState } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import s from './ScrollUp.module.css';

function ScrollUp() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 400) {
      setVisible(true);
    } else if (scrolled <= 400) {
      setVisible(false);
    }
  };

  const onClickUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <button
      className={s.up}
      type="button"
      onClick={() => onClickUp()}
      style={{ display: visible ? 'inline' : 'none' }}
    >
      <BsFillArrowUpCircleFill className={s.icon} />
    </button>
  );
}

export default ScrollUp;
