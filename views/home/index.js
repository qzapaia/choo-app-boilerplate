const html = require('choo/html');
const styles = require('./styles.css');

module.exports = (config) => (state, prev, send) => html`
  <main class=${styles.root}>
    <h1>Title: ${state.title}</h1>
    <h1>Subtitle: ${config}</h1>
    <input type="text" oninput=${(e)=>{ send('update',e.target.value) }} />
  </main>
`
