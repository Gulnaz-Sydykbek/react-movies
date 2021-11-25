import { useSelector, useDispatch } from 'react-redux';
import { themeAction, themeSelectors } from 'redux/theme';
import s from './ToggleSwitch.module.css';

function ToggleSwitch() {
  const theme = useSelector(themeSelectors.getThemeToggle);
  const dispatch = useDispatch();

  const onToggle = trueTheme => {
    dispatch(themeAction.toggleTheme(trueTheme));
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
