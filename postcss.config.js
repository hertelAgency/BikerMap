const purgecss = [
    '@fullhuman/postcss-purgecss',
    {
        content: ['./src/**/*.{js,ts,jsx,tsx}'],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    }
]
module.exports = {
    plugins: {
      'postcss-import': {},
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    }
  }