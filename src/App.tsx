import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import FaqPage from './pages/FaqPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
