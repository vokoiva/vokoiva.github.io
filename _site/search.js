var docs = 
[ 

  {
  "id"    : "http://vokoiva.com//sideline-fences",
  "title"   : "Sideline Fences",
  "content" : ""
},

  {
  "id"    : "http://vokoiva.com//lone-pole-crossing",
  "title"   : "Lone Pole Crossing",
  "content" : ""
},

  {
  "id"    : "http://vokoiva.com//lakefront-overgrowth",
  "title"   : "Lakefront Overgrowth",
  "content" : ""
},

  {
  "id"    : "http://vokoiva.com//shaded-sidewalk-shed",
  "title"   : "Shaded Sidewalk Shed",
  "content" : ""
},

  {
  "id"    : "http://vokoiva.com//fenced-brush",
  "title"   : "Fenced Brush",
  "content" : ""
},

  {
  "id"    : "http://vokoiva.com//green-belt-horizon",
  "title"   : "Green Belt Horizon",
  "content" : ""
},

  {
  "id"    : "http://vokoiva.com//tool-shed-shoes",
  "title"   : "Tool Shed Shoes",
  "content" : ""
},

  {
  "id"    : "http://vokoiva.com//ten-acre-sidewalk",
  "title"   : "Ten Acre Sidewalk",
  "content" : ""
},

  {
  "id"    : "http://vokoiva.com//green-belt-bayou",
  "title"   : "Green Belt Bayou",
  "content" : ""
},

  {
  "id"    : "http://vokoiva.com//fence-side-lawn",
  "title"   : "Fence Side Lawn",
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