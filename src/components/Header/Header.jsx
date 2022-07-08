import s from './Header.module.css';
const Header = () => (
  <header>
    <h1 className={s.header}>Hello</h1>
    <p>Тут буде лого</p>
    <button type="button">Users</button>
    <button type="button">Sign up</button>
  </header>
);

export { Header };
