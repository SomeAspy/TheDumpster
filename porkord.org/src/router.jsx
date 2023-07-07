import { render } from 'solid-js/web';
import { lazy } from 'solid-js';
import { Router, Routes, Route } from 'solid-app-router';

const Home = lazy(() => import('./routes/home.jsx'));

render(
    () => (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </Router>
    ),
    document.getElementById('porkord.org'),
);
