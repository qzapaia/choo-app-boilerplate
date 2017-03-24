const html = require('choo/html');
const styles = require('./styles.css');

module.exports = (config) => (state, emitter) => html`
  <main class=${styles.root}>
    <h1>Title: ${state.title}</h1>
    <h1>Subtitle: ${config}</h1>
    <input type="text"
           oninput=${(e)=>{ emitter('update',e.target.value) }}
           value=${state.title} />
  </main>
`
