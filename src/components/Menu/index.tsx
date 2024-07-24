import { ReactComponent as Logo } from 'assets/logo2.svg';
import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';

export default function Menu() {
  const rotas = [{
    label: 'Início',
    to: '/'
  }, {
    label: 'Produtos',
    to: '/cardapio'
  }, 
  {
    label: 'Sobre',
    to: '/sobre'
  }];
  return (
    <nav className={styles.menu}>
      <Logo width={80} height={80}/>
      <ul className={styles.menu__list}>
        {rotas.map((rota, index) => (
          <li key={index} className={styles.menu__link}>
            <Link to={rota.to}>
              {rota.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}