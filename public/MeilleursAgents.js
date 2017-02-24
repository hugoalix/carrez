var request = require('request');
var cheerio = require('cheerio');
var DataLeboncoin= require('./DataLeboncoin.json');
var DataMeilleursAgents=require('./DataMeilleursAgents.json');


var price=DataLeboncoin.properties.price;
var surface=DataLeboncoin.properties.surface;
var type=DataLeboncoin.properties.type;
var priceHouse=DataMeilleursAgents.properties.priceHouse;
var priceApp=DataMeilleursAgents.properties.priceApp;

var urlMeilleursAgents='https://www.meilleursagents.com/prix-immobilier/'+DataLeboncoin.properties.city+'-'+DataLeboncoin.properties.departement+'/';


function fillMeilleursAgents (urlMeilleursAgents,callback){
  request(urlMeilleursAgents,function(err,resp,html)
  {
    if(!err)
    {
      var $ = cheerio.load(html);

      $('#synthese > div > div.prices-summary__values > div:nth-child(3) > div.small-4.medium-2.columns.prices-summary__cell--median').filter(function(){
        var data=$(this);

        priceHouse=data.text();
        priceHouse=price.trim();
        json.properties.priceHouse=priceHouse;
        console.log(priceHouse);
      });

      $('#synthese > div > div.prices-summary__values > div:nth-child(2) > div.small-4.medium-2.columns.prices-summary__cell--median').filter(function(){
        var data=$(this);

        priceApp=data.text();
        priceApp=price.trim();
        json.properties.priceApp=priceApp;
        console.log(priceApp);
      });
      callback;
    }
  }



var compare=function meilleursagents (DataLeboncoin,DataMeilleursAgents,callback){
  if(!err)
  {
    if (DataLeboncoin.properties.type=='Maison') {
      if(price/surface>priceHouse){
        console.log("It's not a good Deal");
      }
      else{console.log("It's a good Deal");}
    }
    else if (DataLeboncoin.properties.type=='Appartement') {
      ìf(price/surface>priceApp){
        console.log("It's not a good Deal");
      }
      else{console.log("It's a good deal");}
    }
  }
}