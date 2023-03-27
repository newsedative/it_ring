let express = require(`express`);
let app = express();
let port = 3000;

app.listen(port, function(){
    console.log(`http://localhost:${port}`)
});

//Раздача статики
app.use(express.static(`public`));

//Настройка handlebars
let hbs = require(`hbs`);
app.set('views', 'views');
app.set('view engine', 'hbs');

//POST-запросы
app.use(express.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.render('index')
});