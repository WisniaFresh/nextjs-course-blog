const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = () => {
  if (PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "user-code-with-max",
        mongodb_password: "meNhY6ZASG1ALeHs",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site-blog",
      },
    };
  }

  return {
    env: {
      mongodb_username: "user-code-with-max",
      mongodb_password: "meNhY6ZASG1ALeHs",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site-blog-production",
    },
  };
};
