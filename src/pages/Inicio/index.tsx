import React from 'react';
import cardapio from 'data/cardapio.json';
import styles from './Inicio.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import nossaCasa from 'assets/lounge.png';
import { useNavigate } from 'react-router-dom';
import { Prato } from 'types/Prato';

export default function Inicio() {
  let produtosRecomendados = [...cardapio];
  produtosRecomendados = produtosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 3);
  const navigate = useNavigate();

  function redirecionarParaDetalhes(prato: Prato) {
    navigate(`/prato/${prato.id}`, { state: { prato }, replace: true });
  }
  return (
    <section>
      <h3 className={stylesTema.titulo}>
        Nossos Produtos
      </h3>
      <div className={styles.recomendados}>
        {produtosRecomendados.map(item => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button
              className={styles.recomendado__botao}
              onClick={() => redirecionarParaDetalhes(item)}
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesTema.titulo}> Nosso Lounge </h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt="Casa do aluroni" height={350} />
        <div className={styles.nossaCasa__endereco}>
          Rua Jayr de Lima Ferreira, 100 <br /> <br /> Mogi das Cruzes - SP
        </div>
      </div>
    </section>
  );
}