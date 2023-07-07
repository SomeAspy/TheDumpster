import { render } from 'solid-js/web';
import { lazy } from 'solid-js';
import { Routes, Route, Router } from 'solid-app-router';

const Home = lazy(() => import('./routes/home.jsx'));
const NotFound = lazy(() => import('./routes/404.jsx'));

render(
    () => (
        <Router>
            <Routes>
                <Route path='/' component={Home} />
                <Route path='*' component={NotFound} />
            </Routes>
        </Router>
    ),
    document.getElementById('app'),
);
