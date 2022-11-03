module.exports = {
  root: true,
  plugins: ['@typescript-eslint'],
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        semi: 'off',
        'no-undef': 'off',
        'no-shadow': 'off',
        'jsx-quotes': 'off',
        'comma-dangle': 'off',
        'prettier/prettier': 'off',
        'react/jsx-no-undef': 'off',
        'react-native/no-inline-styles': 'off',
        '@typescript-eslint/no-shadow': ['off'],
      },
    },
  ],
};
