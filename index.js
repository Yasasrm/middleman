const fs = require("fs");
const app = require("express")();
const jsonParser = require("body-parser").json();
const port = process.env.port || 8080;

// Test
app.get("/status", (req, res) => {
  try {
    let jsnObj;
    (async () => {
      await fs.readFile(
        "./database/config/data-condition.json",
        "utf8",
        function (err, data) {
          if (err) {
            fs.writeFile(
              "./database/config/data-condition.json",
              JSON.stringify({ coldStart: true }),
              (message) => {
                console.log(message);
              }
            );
            return res.status(200).send({
              status: "Working",
              dataStatus: "Unknown",
              details:
                "Currently, the API is running, but previous history cannot be retrieved. As a result, all previously created JSON objects may have been lost! 😱",
            });
          } else {
            jsnObj = JSON.parse(data);
          }
          if (jsnObj.coldStart) {
            jsnObj.coldStart = false;
            fs.writeFile(
              "./database/config/data-condition.json",
              JSON.stringify(jsnObj),
              (message) => {
                console.log(message);
              }
            );
            return res.status(200).send({
              status: "Working",
              dataStatus: "Reset",
              details:
                "The API has been re-deployed from the last build. As a result, all previously created JSON objects are gone! Long idle time might cause this 😴.",
            });
          } else {
            return res.status(200).send({
              status: "Working",
              dataStatus: "Normal",
              details: "API is up & running 🎉",
            });
          }
        }
      );
    })();
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      status: "Working",
      dataStatus: "Error",
      details:
        "Currently, the API is running, but there's an unknown error preventing us from retrieving previous history! As a result, all previously created JSON objects may have been lost! 😱",
    });
  }
});

//Get all
app.get("/db/read/:docType", (req, res) => {
  try {
    let jsnObj;
    (async () => {
      await fs.readFile(
        `./database/${req.params.docType}.json`,
        "utf8",
        function (err, data) {
          if (err) {
            return res.status(404).send({ status: "No file found" });
          } else {
            jsnObj = JSON.parse(data);
          }
          let resultSet = {};
          let dataType = req.params.docType;
          resultSet[dataType] = jsnObj;
          return res.status(200).send(resultSet);
        }
      );
    })();
  } catch (error) {
    console.log(error);
    return res.status(500).send({ status: "Error" });
  }
});

//Get single record
app.get("/db/read/:docType/:id", (req, res) => {
  try {
    let jsnObj;
    (async () => {
      await fs.readFile(
        `./database/${req.params.docType}.json`,
        "utf8",
        function (err, data) {
          if (err) {
            return res.status(404).send({ status: "No file found" });
          } else {
            jsnObj = JSON.parse(data);
          }
          for (jb in jsnObj) {
            if (jsnObj[jb].id == req.params.id) {
              return res.status(200).send(jsnObj[jb]);
            }
          }
          return res.status(404).send({ status: "No data found" });
        }
      );
    })();
  } catch (error) {
    console.log(error);
    return res.status(500).send({ status: "Error" });
  }
});

// Create record
app.post("/db/create/:docType", jsonParser, (req, res) => {
  try {
    let jsnObj;
    (async () => {
      await fs.readFile(
        `./database/${req.params.docType}.json`,
        "utf8",
        function (err, data) {
          let recordId = 1;
          if (err) {
            jsnObj = [];
          } else {
            jsnObj = JSON.parse(data);
            recordId = jsnObj.length + 1;
          }
          req.body = { ...req.body, id: recordId };
          jsnObj.push(req.body);
          fs.writeFile(
            `./database/${req.params.docType}.json`,
            JSON.stringify(jsnObj),
            (message) => {
              console.log(message);
            }
          );
          return res.status(200).send({ id: recordId, status: "Created" });
        }
      );
    })();
  } catch (error) {
    console.log(error);
    return res.status(500).send({ status: "Error" });
  }
});

// Update
app.put("/db/update/:docType/:id", jsonParser, (req, res) => {
  try {
    let jsnObj;
    (async () => {
      await fs.readFile(
        `./database/${req.params.docType}.json`,
        "utf8",
        function (err, data) {
          if (err) {
            return res
              .status(404)
              .send({ status: "There was no file to update" });
          } else {
            jsnObj = JSON.parse(data);
            for (jb in jsnObj) {
              if (jsnObj[jb].id == req.params.id) {
                console.log(req.body);
                let keysFromDb = Object.keys(jsnObj[jb]);
                let keysFromBody = Object.keys(req.body);
                for (keyName in keysFromBody) {
                  if (keysFromDb.includes(keysFromBody[keyName])) {
                    eval(
                      "jsnObj[jb]." +
                        keysFromBody[keyName] +
                        " = req.body." +
                        keysFromBody[keyName] +
                        ";"
                    );
                  }
                }
                fs.writeFile(
                  `./database/${req.params.docType}.json`,
                  JSON.stringify(jsnObj),
                  (message) => {
                    console.log(message);
                  }
                );
                return res
                  .status(200)
                  .send({ status: "Successfully updated the record" });
              }
            }
          }
          return res
            .status(404)
            .send({ status: "There was no record to update" });
        }
      );
    })();
  } catch (error) {
    console.log(error);
    return res.status(500).send({ status: "Error" });
  }
});

// Delete all
app.delete("/db/delete/:docType", jsonParser, (req, res) => {
  try {
    (async () => {
      await fs.unlink(
        `./database/${req.params.docType}.json`,
        function (err, data) {
          if (err) {
            return res
              .status(404)
              .send({ status: "There was no file to delete" });
          } else {
            return res.status(200).send({ status: "All records are deleted!" });
          }
        }
      );
    })();
  } catch (error) {
    console.log(error);
    return res.status(500).send({ status: "Error" });
  }
});

// Delete record
app.delete("/db/delete/:docType/:id", jsonParser, (req, res) => {
  try {
    let jsnObj;
    (async () => {
      await fs.readFile(
        `./database/${req.params.docType}.json`,
        "utf8",
        function (err, data) {
          if (err) {
            return res
              .status(404)
              .send({ status: "There was no file to delete" });
          } else {
            jsnObj = JSON.parse(data);
          }
          let updatedJsn = [];
          let deletedRecords = 0;
          for (jb in jsnObj) {
            if (jsnObj[jb].id != req.params.id) {
              updatedJsn.push(jsnObj[jb]);
            } else {
              ++deletedRecords;
            }
          }
          if (deletedRecords == 0) {
            return res
              .status(404)
              .send({ status: "There are no records to be deleted" });
          } else {
            fs.writeFile(
              `./database/${req.params.docType}.json`,
              JSON.stringify(updatedJsn),
              (message) => {
                console.log(message);
              }
            );
            return res
              .status(200)
              .send({ status: "Successfully deleted the record" });
          }
        }
      );
    })();
  } catch (error) {
    console.log(error);
    return res.status(500).send({ status: "Error" });
  }
});

app.listen(port, () => console.log(`Service is up & running on ${port}`));
