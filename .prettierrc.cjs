/**
 * @type {import('prettier').Options}
 */
module.exports = {
  arrowParens: "avoid",
  bracketSameLine: false,
  bracketSpacing: false,
  endOfLine: "lf",
  jsxSingleQuote: false,
  printWidth: 80,
  quoteProps: "consistent",
  semi: false,
  singleQuote: false,
  tabWidth: 4,
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
