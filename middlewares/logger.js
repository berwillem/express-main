exports.myLogger = function (req, res, next) {
  console.log("Une nouvelle requête reçue à " + Date.now());
  next();
};
