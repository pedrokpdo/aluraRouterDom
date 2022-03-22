import Menu from 'components/menu';
import PaginaPadrao from 'components/PaginaPadrao';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/inicio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />

        <Routes>
          <Route path='/' element={<PaginaPadrao />}>
            <Route index element={<Inicio />}/>
            <Route path='cardapio' element={<Cardapio />} />
          </Route>

        </Routes>
      </Router>
    </main>
  );
}
