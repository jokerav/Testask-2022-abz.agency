import s from './Button.module.scss';
const Button = ({ text }) => (
  <button type="button" className={s.button}>
    {text}
  </button>
);
export default Button;
