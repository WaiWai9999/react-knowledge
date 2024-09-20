/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales: ["cs", "en"],
  catalogs: [
    {
      path: "<rootDir>/src/locales/{locale}/messages",
      include: ["src"],
    },
  ],
};
