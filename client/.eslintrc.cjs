module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    `plugin:@typescript-eslint/strict-type-checked`,
    'plugin:react-hooks/recommended',
  ],
	parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['dist', '.eslintrc.cjs', "api/build"],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
		"@typescript-eslint/no-unnecessary-condition": "error",
		"quotes":["error", "double"],
		"indent":["error","tab"],
		"linebreak-style": ["error", "windows"],
		"semi": ["error", "always"]		
  },
}
