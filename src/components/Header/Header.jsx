import s from './Header.module.css';
import s1 from '../Commons/Container/Container.module.css';
import Button from 'components/Commons/Button/Button';
import { ReactComponent as Logo } from '../../img/Logo.svg';
const Header = () => (
  <header className={s1.container}>
    <Logo className={s.logo} />
    <Button text="sign in" />
  </header>
);

export { Header };
