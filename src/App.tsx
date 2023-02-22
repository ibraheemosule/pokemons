import { Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/homepage/Home';
import PokedexDetailsPage from './components/pages/pokedex-details/PokedexDetailsPage';
import Layout from './components/reusables/layout/Layout';
import PageNotFound from './components/pages/404page/PageNotFound';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokedex" element={<PokedexDetailsPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
