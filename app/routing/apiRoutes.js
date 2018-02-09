var friendsList = require("../data/friends");
var match;

module.exports = function(app) {
  app.get("/api/match", function(req, res) {
    res.json(match);
  });

  app.route('/api/friends')
    .get(function(req, res) {
      res.json(friendsList);
    })
    .post(function(req, res) {
      // console.log(req.body);
      friendsList.push(req.body);
      var currentUser = friendsList[friendsList.length - 1];
      var diffs = [];
      // console.log(currentUser);
      for (var i = 0; i < friendsList.length - 1; i++) {
        var diff = 0;
        for (var j = 0; j < friendsList[i].scores.length - 1; j++) {
          diff += Math.abs(friendsList[i].scores[j] - currentUser.scores[j]);
        }
        diffs.push(diff);
      }
      match = [friendsList[indexOfmin(diffs)].name, friendsList[indexOfmin(diffs)].photo];
    });
  }

// function to return the index of the lowest value in diffs array, which will be the index of the user's match in FriendsList
function indexOfmin(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var min = arr[0];
    var minIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            minIndex = i;
            min = arr[i];
        }
    }
    return minIndex;
}
