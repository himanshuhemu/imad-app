var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));



var articles = { 
'article-one' : {
    title: 'Article-one|himanshu',
    heading:'Article one',
    date: 'august 9, 2017',
    content:`<p>
            So this is himanshu i am a tech enthusiast .I am pursuing my b. tech course from CGC college of engineering . I am also trying to o something different which can make myself unique .
        </p>
        <p>
            One morev  thing i am also qwing a youtube channel with almost 50 subscribers . and i try to post a new technical video every weekend to make a good content at my channel .
        </p>`
}, 
'article-two':{
    title: "Article-Two|himanshu",
    heading:"Article two",
    date: "august 10, 2017",
    content:` <p>
        I am a shy boy , i am a bit nervous about a lot of people and i am trying to increase m confidence.
            
        </p>
        <p>
            For gaining some confidence i am doing a bit regular excercises .
        </p>`
},
'article-three':{title: "Article-Three|himanshu",
    heading:"Article three",
    date: "august 11, 2017",
    content:`<p>
            So this is himanshu i am a tech enthusiast .I am pursuing my b. tech course from CGC college of engineering . I am also trying to o something different which can make myself unique .
        </p>
        <p>
            One more thing i am also qwing a youtube channel with almost 50 subscribers . and i try to post a new technical video every weekend to make a good content at my channel .https://imad.hasura.io/code/files/ui%2Farticle-two.html
        </p>`}
};
function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;

var htmlTemplate = `
<html>
    <head>
        <title>
            ${tile}
        </title>
        <meta name="viewport" content="width-device,initial-scale-1"/>
       <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="contain">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
    <h3>
        ${heading}    </h3>
    <div>
        ${date}
    </div>
    <div>  
     ${content}
    </div>
    </div>
    </body>
</html>








`;
return htmlTemplate;
}

 

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articlename', function (req, res) //articleName == article-one
{ var articleName = req.params.article/name;
     res.send(createTemplate(articles[article-name]));
});




app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
