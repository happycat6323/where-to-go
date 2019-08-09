module.exports = {
  parser: 'babel-eslint',
  plugins: [
    'react',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'jsx-a11y/html-has-lang': 'off',
  }
};
