const userRoutes = (app, fs) => {

   const dataPathAD = "./data/AD.json";
    app.get("/AD", (req, res) => {
      fs.readFile(dataPathAD, "utf8", (err, data) => {
        if (err) {
          throw err;
        }
        res.send(JSON.parse(data));
      });
    });

   const dataPathAE = "./data/AE.json";
    app.get("/AE", (req, res) => {
      fs.readFile(dataPathAE, "utf8", (err, data) => {
        if (err) {
          throw err;
        }
        res.send(JSON.parse(data));
      });
    });
    
    const dataPathAU = "./data/AU.json";
    app.get("/AU", (req, res) => {
      fs.readFile(dataPathAU, "utf8", (err, data) => {
        if (err) {
          throw err;
        }
        res.send(JSON.parse(data));
      });
    });

    const dataPathBR = "./data/BR.json";
    app.get("/BR", (req, res) => {
      fs.readFile(dataPathBR, "utf8", (err, data) => {
        if (err) {
          throw err;
        }
        res.send(JSON.parse(data));
      });
    });

  };
  
  module.exports = userRoutes;