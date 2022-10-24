const epxress = require("express");
const router = epxress.Router();
const fs = require("fs");

const pathRouter = `${__dirname}`;

const removeExtension = (fileName) => {
  return fileName.split(".js").shift();
}; //Todo: Remove extension from file name

fs.readdirSync(pathRouter).filter((file) => {
  const fileWithOutExt = removeExtension(file);
  const routeName = `/${fileWithOutExt.split(".").shift()}`;
  const skip = ["index"].includes(fileWithOutExt);
  if (!skip) {
    router.use(
      routeName,
      require(`./${fileWithOutExt}`)
    ); //TODO: Routes dinaamic
    console.log("LOADED ROUTES ---->", `http://localhost:3001/api/v1/${routeName}`);
  }
});

router.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "Page not found",
  });
});

module.exports = router;
