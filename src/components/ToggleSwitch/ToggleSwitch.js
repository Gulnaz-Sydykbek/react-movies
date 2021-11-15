import { useSelector, useDispatch } from 'react-redux';
import * as themeAction from '../../redux/theme/theme-action';
import s from './ToggleSwitch.module.css';

function ToggleSwitch() {
  const theme = useSelector(state => state.theme.toggle);
  const dispatch = useDispatch();

  const onToggle = trueTheme => {
    dispatch(themeAction.toggleTheme(trueTheme));
  };

  return (
    <label className={s.label}>
      {theme ? (
        <input
          className={s.input}
          type="checkbox"
          checked={theme}
          onChange={() => onToggle(false)}
        />
      ) : (
        <input
          className={s.input}
          type="checkbox"
          checked={theme}
          onChange={() => onToggle(true)}
        />
      )}
      <span className={s.slider}></span>
    </label>
  );
}

export default ToggleSwitch;
