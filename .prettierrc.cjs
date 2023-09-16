/**
 * @type {import('prettier').Options}
 */
module.exports = {
  arrowParens: "always",
  bracketSameLine: false,
  bracketSpacing: true,
  endOfLine: "lf",
  jsxSingleQuote: false,
  printWidth: 80,
  quoteProps: "consistent",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,

  plugins: [require.resolve("prettier-plugin-astro")],

  overrides: [
    {
      files: "**/*.astro",
      options: { parser: "astro" },
    },
  ],
};
