var keystone = require('keystone');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  //set locals
  locals.section = 'worlds';

  //load words
  view.query('worlds', keystone.list('World').model.find());

  //render view
  view.render('worlds');
}