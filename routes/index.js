var express = require('express');
var mongoose = require('mongoose');
var Wish = require("../features/wish/wish.js");
var router = express.Router();

// connect to Mongo daemon
mongoose
  .connect(
    'mongodb://localhost:27017/wish-db', {
      useNewUrlParser: true
    }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));



/* GET home page. */
const newWish = new Wish({
  title: 'title wish sd ',
  story: 'story of wish'
});

newWish.save();


const findResult = Wish.find({}, 'wish', function (err, wishes) {
  return wishes;
}).exec(function (error, wishes) {
  console.log(wishes);
});

// const findResult = Wish.find(() => (err, result) => {
//   if (err) throw err;
//   return res.json(result);
// });

console.log('Results: ' + findResult);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: JSON.stringify(findResult)
  });
});


// newWish.save().then(item => res.render('index', {
//   title: findResult
// }));

// newWish.save().then(item => res.render('index', {
//   title: 'Express success'
// }));



module.exports = router;