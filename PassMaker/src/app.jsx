import { render } from 'solid-js/web';
import './app.css';

import { words } from './words.js';

let word = window.crypto.getRandomValues(words);
console.log(word);

function secureRandomArray(array) {}

render(
    () => (
        <>
            <h1>Hello World</h1>
        </>
    ),
    document.getElementById('app'),
);
