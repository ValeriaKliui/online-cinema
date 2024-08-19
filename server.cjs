import jsonServer from "json-server";
import authMiddleware from "json-server-auth";
import fs from "fs";
import path from "path";

const server = jsonServer.create();

const filePath = path.join("db.json");
const data = fs.readFileSync(filePath, "utf-8");
const db = JSON.parse(data);
const router = jsonServer.router(db);

server.db = router.db;

const middlewares = jsonServer.defaults();
server.use(authMiddleware);
server.use(middlewares);

server.use(jsonServer.rewriter({}));
server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running");
});
