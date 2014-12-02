var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendStatus(200);
});

app.get('/salad/italian', function (req, res) {
  res.send(
    [{
      "tomatoes": {
        "quantity": 4,
        "info": "large"
      }
    }, {
      "olive oil": {
        "quantity": "4 tbs",
        "info": "extra virgin"
      }
    }, {
      "mozzarella": {
        "quantity": "275g",
        "info": "thickly sliced"
      }
    }, {
      "fresh basil": {
        "quantity": "10 leaves",
        "info": "torn into strips"
      }
    }]
  );
});

if (!module.parent) {
  app.listen(process.env.PORT || 3000);
  console.log('I am up');
};

module.exports = app;