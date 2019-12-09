show dbs;
use nodekb
db.createCollection('articles');
show collections
db.articles.insert({title:"Article One",author:"Author 1",body:"This is article one"})
db.articles.find();
db.articles.insert({title:"Article Two",author:"Author 2",body:"This is article two"})
db.articles.find().pretty();
exit