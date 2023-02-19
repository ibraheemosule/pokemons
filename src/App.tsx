import { Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/homepage/Home';
import PokedexDetailsPage from './components/pages/pokedex-details/PokedexDetailsPage';
import Layout from './components/reusables/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokedex" element={<PokedexDetailsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
