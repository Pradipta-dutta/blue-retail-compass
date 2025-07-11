
import { Routes, Route } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';

const StorekeeperPortal = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated || user?.role !== 'storekeeper') {
    return <Navigate to="/login?portal=storekeeper" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-store-blue mb-8">Storekeeper Portal</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">Storekeeper portal coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default StorekeeperPortal;
