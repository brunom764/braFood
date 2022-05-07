import { Imagem, Nav } from './styles';
import  Logo from '../../../assets/logo.png';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { useCarrinhoContext } from '../../../common/contexts/Carrinho';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const { quantidadeCarrinho } = useCarrinhoContext();
  const Navigate = useNavigate();
  return (
    <Nav>
      <Imagem src={Logo} onClick={() => Navigate('/')} />
      <IconButton
        onClick={() => Navigate('/carrinho')}
        disabled={quantidadeCarrinho === 0}
      >
        <Badge
          badgeContent={quantidadeCarrinho}
          color="primary"
        >
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Nav>
  )
}