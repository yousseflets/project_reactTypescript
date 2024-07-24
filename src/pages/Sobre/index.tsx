import styles from './Sobre.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import casa from 'assets/sobre/lounge.jpg';



export default function Sobre() {
  return (
    <section>
      <h3 className={stylesTema.titulo}> Sobre </h3>
      <div className={styles.sobreNos}>
        <img src={casa} alt="Casa Aluroni" />
        <div className={styles.sobreNos__texto}>
          <p>
            Nós do Hookah Lounge oferecemos a vocês, nossos queridos clientes, o lounge mais sofisticado de São Paulo! Prezamos pelo bem estar dos nossos clientes!
          </p>
          <p>
            Possuímos variedades de produtos de acordo com o seu gosto!
          </p>
          <p>
            Venhas nos conhecer e aproveitar melhor a sua sessão!
          </p>
        </div>
      </div>
     
    </section>
  );
}