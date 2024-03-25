const app = require( "./App");

const port = 3100;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
