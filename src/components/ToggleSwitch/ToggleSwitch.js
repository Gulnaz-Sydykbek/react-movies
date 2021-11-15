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
          type="checkbox"
          checked={theme}
          onChange={() => onToggle(false)}
        />
      ) : (
        <input
          type="checkbox"
          checked={theme}
          onChange={() => onToggle(true)}
        />
      )}
    </label>
  );
}

export default ToggleSwitch;
