var friendsList = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsList);
  });

  app.post("/api/friends", function(req, res) {
    console.log(req.body);
    console.log(req.body.scores[2]);
    friendsList.push(req.body);
    res.json(true);
  });

}
