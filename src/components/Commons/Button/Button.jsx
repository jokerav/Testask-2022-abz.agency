import s from './Button.module.css';
const Button = ({ text }) => (
  <button type="button" className={s.button}>
    {text}
  </button>
);
export default Button;
