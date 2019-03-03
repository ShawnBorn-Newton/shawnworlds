var keystone = require('keystone');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  //set locals
  locals.section = 'worlds';
  locals.filters={
    world: req.params.world
  }
  locals.data = {
    worlds: []
  }

  //load world
  view.on('init', function(next){
    var q = keystone.list('World').model.findOne({
      slug: locals.filters.world
    })

    q.exec(function(err, result){
      locals.data.world = result;
      next(err);
    });

  });

  //render view
  view.render('world');
}