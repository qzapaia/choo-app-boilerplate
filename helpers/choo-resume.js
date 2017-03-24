// I copied https://www.npmjs.com/package/choo-resume here because it was messy
// make work the uglify version that comes in webpack with this es6 code inside
// a package. In this way this script pass first through webpack es6 compiler

const defaultGlobalName = '__SAVED_APP_STATE__'
module.exports = (app, globalName = defaultGlobalName) => {
  window[globalName] = window[globalName] || {};

  app.use((state, emitter) => {
    window[globalName].emitter && window[globalName].emitter.removeAllListeners();
    window[globalName].emitter = emitter;
    Object.assign(state, window[globalName].state || {});
    emitter.on('*', function (messageName, data) {
      window[globalName].state = state;
    })
  })

  return app;
}
