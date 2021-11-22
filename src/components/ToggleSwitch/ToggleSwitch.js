import { useSelector, useDispatch } from 'react-redux';
import * as themeAction from '../../redux/theme/theme-action';
import s from './ToggleSwitch.module.css';

function ToggleSwitch() {
  const theme = useSelector(state => state.theme.toggle);
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
