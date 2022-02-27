import server from "./app";

const port = process.env.SERVER_PORT || 3000;

server.listen(port, () => {
  console.log(`Server on port ${process.env.SERVER_PORT}.`);
});
