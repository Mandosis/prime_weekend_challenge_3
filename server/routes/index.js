var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

var router = express.Router();

var Cat = mongoose.model('Cat', {name:String});

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

router.post('/add', function(request, response, next){
   var kitty = new Cat({name: request.body.name});
   kitty.save(function(err){
       if(err) console.log('meow %s', err);
       response.send(kitty.toJSON());
       next();

   });
});

router.get('/cats', function(request, response, next){
   return Cat.find({}).exec(function(err, cats){
       if(err) throw new Error(err);
       response.send(JSON.stringify(cats));
       next();
   });
});

module.exports = router;
