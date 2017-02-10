var html = require('choo/html')
var styles = require('./styles.css');

module.exports = function(state, prev, send) {
  return html`
    <main class=${styles.root}>
      <h1>Title: ${state.title}</h1>
      <input type="text" oninput=${update}>
    </main>
  `

  function update (e) {
    send('update', e.target.value)
  }
}
