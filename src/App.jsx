import React, { lazy, Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/notFound/PageNotFound';
import store, { persistor } from '@/redux/store/Store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import LoginPage from './pages/auth/Login';
import { Toaster } from 'sonner';
import PasswordReset from './pages/auth/PasswordResetEmail';
import PasswordResetPage from './pages/auth/PasswordResetPage';
import SplashScreen from './components/splash/Splash';

const AdminRoutes = lazy(() => import('./routes/AdminRoutes'));
const UserRoutes = lazy(() => import('./routes/UserRoutes'));

function App() {
  const queryClient = new QueryClient();
  
  return (
    <Suspense fallback={<SplashScreen />}>
      <ErrorBoundary>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router>
              <QueryClientProvider client={queryClient}>
                <Toaster richColors position="bottom-center" />
                <Routes>
                  <Route
                    path="/admin/*"
                    element={

                      <AdminRoutes />

                    }
                  />
                  <Route
                    path="/user/*"
                    element={
                      <UserRoutes />
                    }
                  />
                  <Route path="/reset-password" element={<PasswordReset />} />
                  <Route path="/reset-password/:uid" element={<PasswordResetPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </QueryClientProvider>
            </Router>
          </PersistGate>
        </Provider>
      </ErrorBoundary>
    </Suspense>
  );
}

export default App;
