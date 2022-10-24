const { app, port } = require("./app");
const { connection } = require("./database/connection");



app.listen(port, () => {
  connection
    .sync()
    .then(() => {
      console.log(`Database connected`);
    })
    .catch((err) => {
      console.log(`Database connection error: ${err}`);
    });
  console.log(`Server is running on port ${port}`);

});
