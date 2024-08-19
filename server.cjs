import jsonServer from "json-server";
import authMiddleware from "json-server-auth";

const server = jsonServer.create();
const router = jsonServer.router("db.json");

server.db = router.db;

const middlewares = jsonServer.defaults();
server.use(authMiddleware);
server.use(middlewares);

server.use(jsonServer.rewriter({}));
server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running");
});
