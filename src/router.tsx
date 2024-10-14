import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PhotoList from './pages/PhotoList';
import PhotoDetails from './pages/PhotoDetails';
import NotFound from './pages/NotFound';

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/IA02-AWP/" element={<PhotoList />} />
            <Route path="/IA02-AWP/photos/:id" element={<PhotoDetails />} />
            <Route path="/IA02-AWP/*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
);

export default AppRouter;
