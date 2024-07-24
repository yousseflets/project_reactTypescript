import styles from './Footer.module.scss';
import { ReactComponent as Logo } from 'assets/logo2.svg';

const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h4 className={styles.p}>{anoAtual} © Hookah Lounge | Todos os direitos reservados</h4>&nbsp;&nbsp;
      <Logo width={50} height={50}/>
    </footer>
  );
}