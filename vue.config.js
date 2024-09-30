module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/game/'  // Cambia 'game' por el nombre de tu repositorio
    : '/'
}
