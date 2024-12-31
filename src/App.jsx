import { QueryClient, QueryClientProvider } from 'react-query';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/notFound/PageNotFound';
import UserRoutes from './routes/UserRoutes'; // User routes
import store, { persistor } from '@/redux/store/Store'; 
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; // Redux Persist Gate
import LoginPage from './pages/auth/Login';
import { Toaster } from 'sonner';
import UserLayout from './components/layouts/userLayout/UserLayout';
import AdminLayout from './components/layouts/adminLayout/AdminLayout';
import AdminRoutes from './routes/AdminRoutes';

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
                {/* User Routes */}
                <Route path="/" element={<UserLayout />}>
                  {UserRoutes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element} />
                  ))}
                </Route>
                <Route path="/" element={<AdminLayout />}>
                  {AdminRoutes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element} />
                  ))}
                </Route>

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
