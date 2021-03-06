var docs = 
[ 

  {
  "id"    : "http://vokoiva.com//parked-park-hoops",
  "title"   : "Parked Park Hoops",
  "content" : ""
},

  {
  "id"    : "http://vokoiva.com//back-to-the-cul-de-sac",
  "title"   : "Back To The Cul-de-sac",
  "content" : ""
},

  {
  "id"    : "http://vokoiva.com//natural-medicine",
  "title"   : "Natural Medicine",
  "content" : ""
},

  {
  "id"    : "http://vokoiva.com//grass-lot-grounds",
  "title"   : "Grass Lot Grounds",
  "content" : ""
},

  {
  "id"    : "http://vokoiva.com//fenced-forest",
  "title"   : "Fenced Forest",
  "content" : ""
},

  {
  "id"    : "http://vokoiva.com//hidden-meadow",
  "title"   : "Hidden Meadow",
  "content" : ""
},

  {
  "id"    : "http://vokoiva.com//field-of-play",
  "title"   : "Field of Play",
  "content" : ""
},

  {
  "id"    : "http://vokoiva.com//cicada-empress-vertical",
  "title"   : "Cicada Empress Vertical",
  "content" : ""
},

  {
  "id"    : "http://vokoiva.com//cicada-empress",
  "title"   : "Cicada Empress",
  "content" : ""
},

  {
  "id"    : "http://vokoiva.com//cicada-emprerors",
  "title"   : "Cicada Emperors",
  "content" : ""
},

];
// init lunr
var idx = lunr(function () {
  this.field('title', 10);
  this.field('content');
})
// add each document to be index
for(var index in docs) {
  idx.add(docs[index]);
}

$(function() {
  $("#search button").click(function() {
    search();
  });
  $("#search input").keypress(function(e) {
    if(e.which == 13) {
      e.preventDefault();
      search();
    }
  });
})

function search() {
  var result = idx.search($("#search input").val());
  if(result && result.length > 0) {
    window.location.replace(result[0].ref);
  } else {
    alert("Found nothing");
  }
}