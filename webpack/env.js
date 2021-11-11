module.exports = {
  development: {
    NODE_ENV: 'development',
    PORT: 3000,
    ASSETS_FOLDER: '/assets/',
    API_ROOT: 'https://movitecnica.hadronica.pe/consultar',
  },
  production: {
    NODE_ENV: 'production',
    PORT: 8080,
    ASSETS_FOLDER: '/assets/',
    API_ROOT: 'https://movitecnica.hadronica.pe/consultar'
  },
  test: {
    NODE_ENV: 'production',
    PORT: 8080,
    ASSETS_FOLDER: '/assets/',
    API_ROOT: 'https://movitecnica.hadronica.pe/consultar',
  },
  desa: {
    NODE_ENV: 'production',
    PORT: 8080,
    ASSETS_FOLDER: '/assets/',
    API_ROOT: 'https://movitecnica.hadronica.pe/consultar',
  },
}
