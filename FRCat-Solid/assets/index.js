// Quote

// Discord

// Theme
if (!window.matchMedia('(prefers-color-scheme: dark)')) {
    document.getElementById('theme').href = 'assets/index-light.css';
}
// Stats
window.browser = bowser.parse(navigator.userAgent);
const stats = {
    browser: window.browser.browser.name || 'unknown',
    os: window.browser.os.name || 'unknown',
    platform: window.browser.platform.type || 'unknown',
    ref: new URLSearchParams(window.location.search).get('ref') || 'unknown',
};
fetch(
    `https://stats.frcat.win/stats?browser=${stats.browser}&os=${stats.os}&platform=${stats.platform}&ref=${stats.ref}`,
);
