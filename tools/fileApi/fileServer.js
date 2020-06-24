const express = require("express");
const cors = require("cors");
const upload = require("express-fileupload");

const app = express();

app.use(cors());
app.use(upload());

app.post("/upload", (req, res) => {
  console.log(req);
  if (req.files) {
    const file = req.files.file;
    const filename = req.body.name;
    file.mv("./tools/pictures/" + filename, (err) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send("File Uploaded");
      }
    });
  }
});

app.listen(8082, () => {
  console.log("fileServer started on localhost:8082");
});
