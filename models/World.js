var keystone = require('keystone');
var Types = keystone.Field.Types;

var World = new keystone.List('World', {
  map: {name: 'title'},
  plural: 'Worlds',
  autokey: {path:'slug', from:'title', unique: true}
});

World.add({
  title: {type : String, required: true},
  intro: {type: Types.Html, wysiwyg: true, height: 300},
  races: {type: Types.Html, wysiwyg: true, height: 300},
  geography: {type: Types.Html, wysiwyg: true, height: 300},
  notes: {type: Types.Html, wysiwyg: true, height: 300},
  image: {type: Types.CloudinaryImage},
  publishedDate: {type: Date, default: Date.now}
});

World.register();
