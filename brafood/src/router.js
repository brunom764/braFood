import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Feira from './pages/Feira';
import UsuarioProvider from './common/contexts/Usuario';
import CarrinhoProvider from './common/contexts/Carrinho';
import Carrinho from './pages/Carrinho';
import PagamentoProvider  from './common/contexts/Pagamento';


export default function App() {
  return (
    <Router>
        <PagamentoProvider>
          <UsuarioProvider>
            <CarrinhoProvider>
              <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/feira" element={<Feira/>}/>
                <Route path="/carrinho" element={<Carrinho/>}/>
              </Routes>
              </CarrinhoProvider>
          </UsuarioProvider>
        </PagamentoProvider>
    </Router>
  )
};