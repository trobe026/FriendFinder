var friendsList = require("../data/friends");
var match;

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsList);
  });

  app.get("/api/match", function(req, res) {
    res.json(match);
  });

  app.post("/api/friends", function(req, res) {
    // console.log(req.body);
    friendsList.push(req.body);
    var currentUser = friendsList[friendsList.length - 1];
    var diffs = [];
    // console.log(currentUser);
    for (var i = 0; i < friendsList.length - 1; i++) {
      var diff = 0;
      for (var j = 0; j < friendsList[i].scores.length - 1; j++) {

        // console.log(friendsList[i].scores);
        diff += Math.abs(friendsList[i].scores[j] - currentUser.scores[j]);
        // console.log(diff);
        // console.log(currentUser);
        // totalDiff += parseInt(diff);
        // console.log(currentUser.scores[j])
        // console.log(friendsList[i].scores[j])
      }
      // console.log(friendsList.length);
      diffs.push(diff);

      // var min = diffs[0];
      // var minIndex = 0;
      // for (var i = 1; i < diffs.length; i++) {
      //   if (diffs[i] < min) {
      //     minIndex = i;
      //     min = diffs[i];
      //   }
      // }
      // console.log(diffs);
      // console.log(i);
      // console.log(friendsList[i].scores);
      // console.log(currentUser.scores);


    }
    match = [friendsList[indexOfmin(diffs)].name, friendsList[indexOfmin(diffs)].photo];
    console.log(friendsList[indexOfmin(diffs)].name);
    console.log(friendsList[indexOfmin(diffs)].photo);
    // console.log(friendsList[minIndex]);
    // console.log("_____________________")
    // console.log(friendsList);
  });

}
// function to return lowest
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
