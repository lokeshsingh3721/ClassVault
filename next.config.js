// next.config.js

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/login",
        destination: "/api/auth/login",
      },
      {
        source: "/api/signup",
        destination: "/api/auth/signup",
      },
    ];
  },
};
