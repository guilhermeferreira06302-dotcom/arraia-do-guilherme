
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CustomerLayout } from './layouts/CustomerLayout';
import { Home } from './pages/Home';
import { ServiceDetails } from './pages/ServiceDetails';
import { Landing } from './pages/Landing';
import { Cadastro } from './pages/Cadastro';

const AdminDashboard = () => (
  <div className="p-8">
    <h2 className="text-headline-lg">Admin Dashboard</h2>
    <p>Coming soon in Phase 3</p>
  </div>
);

// Placeholder for missing pages to avoid errors
const PlaceholderPage = ({ title }) => (
  <div className="container py-24 text-center">
    <h1 className="text-display mb-4">{title}</h1>
    <p className="text-body-lg text-on-surface-variant">This page is under construction.</p>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Customer Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<CustomerLayout><Home /></CustomerLayout>} />
        <Route path="/service/:id" element={<CustomerLayout><ServiceDetails /></CustomerLayout>} />
        <Route path="/book" element={<CustomerLayout><PlaceholderPage title="Booking Cart & Timeline" /></CustomerLayout>} />
        <Route path="/login" element={<CustomerLayout><PlaceholderPage title="Sign In" /></CustomerLayout>} />
        
        {/* Admin Routes */}
        <Route path="/admin/*" element={<AdminDashboard />} />
        
        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
