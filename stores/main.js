module.exports = (state, emitter) => {
  state.title = 'Not quite set yet';

  emitter.on('update',(text)=>{
    state.title = text;
    emitter.emit('render');
  });
}
