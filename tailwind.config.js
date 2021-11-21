module.exports = {
  purge: [
    '*.html',
  ],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      
      colors: {
        'brand': '#FF5864',
        'title': '#0D0C22',
        'paragraph': '#6E6D7A',
        'grey': '#BFBFC2',
        'form-control': '#F8F9FD'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
