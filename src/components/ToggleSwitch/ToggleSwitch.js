import { useSelector, useDispatch } from 'react-redux';
import { moviesAction, moviesSelectors } from 'redux/movies';
import s from './ToggleSwitch.module.css';

function ToggleSwitch() {
  const theme = useSelector(moviesSelectors.getThemeToggle);
  const dispatch = useDispatch();

  const onToggle = trueTheme => {
    dispatch(moviesAction.toggleTheme(trueTheme));
  };

  const { label, input, slider } = s;

  return (
    <label className={label}>
      {theme ? (
        <input
          className={input}
          type="checkbox"
          checked={theme}
          onChange={() => onToggle(false)}
        />
      ) : (
        <input
          className={input}
          type="checkbox"
          checked={theme}
          onChange={() => onToggle(true)}
        />
      )}
      <span className={slider}></span>
    </label>
  );
}

export default ToggleSwitch;
