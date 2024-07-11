import { ReactNode, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

function RequireAuth({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return !!localStorage.getItem('userData');
  });

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(!!localStorage.getItem('userData'));
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <Navigate to="/trafalgar/auth/register" replace />;
  }

  return <>{children}</>;
}

export default RequireAuth;
