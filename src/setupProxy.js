const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/index.php",
    createProxyMiddleware({
      target: "http://myapi.rf.gd",
      changeOrigin: true,
    })
    );
    app.use(
      "/postProjects.php",
      createProxyMiddleware({
      target: "http://myapi.rf.gd",
      changeOrigin: true,
    })
  );
};

// target: "http://localhost:8080/myProjectsAPI",