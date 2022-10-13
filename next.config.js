const { withFrameworkConfig } = require("./framework/common/config");

module.exports = withFrameworkConfig({
  reactStrictMode: true,
  swcMinify: true,
});
