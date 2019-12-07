const express=require('express')
const path = require('path')

// Init app
const app=express();

// Load view Engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

// Home Route
app.get('/',function(req,res){
    //res.send('Hello World');
    //res.render('index'); 
    let articles=[
        {
            id:1,
            title:'Article One',
            author:'Auther 1',
            body:'This is article one'
        },
        {
            id:2,
            title:'Article Two',
            author:'Auther 2',
            body:'This is article two'
        },
        {
            id:3,
            title:'Article Three',
            author:'Auther 3',
            body:'This is article three'
        },
    ]
    res.render('index',{ 
        title:'Articles',
        articles:articles
    });
});

// Add Route
app.get('/articles/add',function(req,res){
    res.render('add_article',{
        title:'Add Article'
      
    })
});

// Start server
app.listen(3000,function(){
    console.log('Server started on port 3000...')
})
