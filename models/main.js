module.exports = {
  state: { title: 'Not quite set yet' },
  reducers: {
    update: function (state, data) {
      return { title: data }
    }
  }
}
