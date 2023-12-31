import style from './Produto.module.scss';
import produtoImagem from '../../../assets/img/mobile.png';
import { IProduto } from '../../../interfaces/IProduto';
import { Console } from 'console';

interface Props extends IProduto {
  selecionaProduto: (produtoSelecionado: IProduto) => void;
  onModal: (onModal:boolean) => void;
}

function Produto(
  {
    descriptionShort,
    photo,
    price,
    productName,
    id,
    produtoSelecionado,
    selecionaProduto,
    onModal
  }: Props) {

  return (
    <>
      <li className={style.produto}>
        <img className={style.produto__imagem} src={photo} alt="" />
        <h3 className={style.produto__titulo}>
          {descriptionShort}
        </h3>

        <span className={style.produto__valorAntigo}>R$ {(price + (price * 0.0647)).toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</span>
        <span className={style.produto__valor}>R$ {price.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</span>
        <span className={style.produto__parcelas}>ou 2x de R$ {(price / 2).toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')} sem juros</span>
        <span className={style.produto__frete}>Frete grátis</span>

        <button
          className={style.produto__btn}
          type='button'
          onClick={() => {
            selecionaProduto({
              descriptionShort,
              photo,
              price,
              productName,
              id,
              produtoSelecionado,
            });
            onModal(true)
          }
          }>
        Comprar
      </button>
    </li >
    </>
  )
}

export default Produto;