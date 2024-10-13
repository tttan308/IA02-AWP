import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PhotoList from './pages/PhotoList';
import PhotoDetails from './pages/PhotoDetails';

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/IA02-AWP/" element={<PhotoList />} />
            <Route path="/IA02-AWP/photos/:id" element={<PhotoDetails />} />
        </Routes>
    </BrowserRouter>
);

export default AppRouter;
