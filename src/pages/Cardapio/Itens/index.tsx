import cardapio from 'data/cardapio.json'; 
import Item from './Item';
import styles from './Itens.module.scss';
import { useState, useEffect } from 'react';
import { Cardapio } from 'types/Prato';

interface Props {
  busca: string,
  filtro: number | null,
  ordenador: string
}

export default function Itens(props: Props) {
  const [lista, setLista] = useState(cardapio);
  const { busca, filtro, ordenador } = props;

  function testaBusca(title: string) {
    const regex = new RegExp(busca, 'i');
    return regex.test(title);
  }

  function testaFiltro(id: number) {
    if(filtro !== null) return filtro === id;
    return true;
  }

  function ordenar(novaLista: Cardapio) {
    switch(ordenador) {
    case 'porcao': 
      return novaLista.sort();
    case 'qtd_pessoas':
      return novaLista.sort();
    case 'preco':
      return novaLista.sort();
    default:
      return novaLista; 
    }
  }

  useEffect(() => {
    const novaLista = cardapio.filter(item => testaBusca(item.title) && testaFiltro(item.category.id));
    setLista(ordenar(novaLista));
  },[busca, filtro, ordenador]);

  return (
    <div className={styles.itens}>
      {lista.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}