import { render } from 'solid-js/web';
import { lazy } from 'solid-js';

const Home = lazy(() => import('./home.jsx'));

render(
    () => (
        <Home />
    ),
    document.getElementById('root')!
)