var request = require('request');
var cheerio = require('cheerio'),
json= require('./DataLeboncoin.json');



var price,surface,city,type;

urlLeBoncoin='http://www.leboncoin.fr/ventes_immobilieres/1087339301.htm?ca=12_s';

module.export=function fill (urlLeBoncoin,callback){

  request(urlLeBoncoin,function(err,resp,html)
  {
    if(!err)
    {
      var $ = cheerio.load(html);

      $('#adview > section > section > section.properties.lineNegative > div:nth-child(5) > h2 > span.value').filter(function(){
        var data=$(this);

        price=data.text();
        price=price.trim();
        json.properties.price=price;
        console.log(price);
      });

      $('#adview > section > section > section.properties.lineNegative > div.line.line_city > h2 > span.value').filter(function(){
        var data=$(this);

        city=data.text();
        city=city.trim();
        json.properties.city=city;
        console.log(city);
      });

      $('#adview > section > section > section.properties.lineNegative > div:nth-child(9) > h2 > span.value').filter(function(){
        var data=$(this);

        surface=data.text();
        surface=surface.trim();
        json.properties.surface=surface;
        console.log(surface);
      });

      $('#adview > section > section > section.properties.lineNegative > div:nth-child(7) > h2 > span.value').filter(function(){
        var data=$(this);

        type=data.text();
        type=type.trim();
        json.properties.type=type;
        console.log(type);
      });

      callback;
    }
  });
}