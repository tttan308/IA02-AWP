import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppRouter from './router';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppRouter />
  </QueryClientProvider>
);

export default App;
