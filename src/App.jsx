import { QueryClient, QueryClientProvider } from 'react-query';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NotFound from './pages/notFound/PageNotFound';
// import AdminRoutes from './routes/AdminRoutes'; // Admin routes
import UserRoutes from './routes/UserRoutes'; // User routes
import store, {  persistor } from '@/redux/store/Store'; 
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; // Redux Persist Gate
import LoginPage from './pages/auth/Login';
import { Toaster } from 'sonner';
function App() {
  const queryClient = new QueryClient();

  return (
    <ErrorBoundary>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          
            <QueryClientProvider client={queryClient}>
            <Toaster richColors position="bottom-center" />
              <Routes>
                {/* Admin Routes */}
                {/* {AdminRoutes.map((route, index) => (
                  <Route key={index} path={route.path} element={<ProtectedRoute role="admin">{route.element}</ProtectedRoute>} />
                ))} */}

                {/* User Routes */}
                {UserRoutes.map((route, index) => (
                  <Route key={index} path={route.path} element={route.element} />
                ))}

                {/* Redirect to Login if unauthenticated */}
                <Route path="/login" element={<LoginPage />} />

                {/* 404 Not Found Route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </QueryClientProvider>
        </Router>
      </PersistGate>
    </Provider>
    </ErrorBoundary>
  );
}

export default App;
