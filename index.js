const express = require("express");
const app = express();

app.use(express.json())
app.use('/',express.static(__dirname + '/_site'))


app.get('*', function(req, res){
  res.status(404).send('404', '<script>location.href = "/404.html";</script>');
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});