const requireRoute = require.context(".", false, /\.js$/);
const routes = [];
requireRoute.keys().forEach(filename => {
  if (filename === "./index.js") {
    return;
  }
  const route = requireRoute(filename).default || [];
  routes.push(...route);
});

export default routes;
