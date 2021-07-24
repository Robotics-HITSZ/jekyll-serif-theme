const express = require("express");
const app = express();

app.use(express.json())
app.use('/',express.static(__dirname + '/_site'))


// app.use(function(req, res, next) {
//   res.status(404);

//   // respond with html page
//   if (req.accepts('html')) {
//     res.render('404', { url: req.url });
//     return;
//   }
// });
app.get('*', function(req, res){
  // res.status(404).render('/404.html');
  res.status(404).send('404', '<script>location.href = "/404.html";</script>');
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});