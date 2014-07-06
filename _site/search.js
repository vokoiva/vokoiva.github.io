var docs = 
[ 

  {
  "id"    : "http://vokoiva.com//sign-line-fields",
  "title"   : "Sign Line Fields",
  "content" : ""
},

  {
  "id"    : "http://vokoiva.com//parking-yards",
  "title"   : "Parking Yards",
  "content" : ""
},

  {
  "id"    : "http://vokoiva.com//ditch-side-skyline",
  "title"   : "Ditch Side Skyline",
  "content" : ""
},

  {
  "id"    : "http://vokoiva.com//lone-gate-goal",
  "title"   : "Lone Gate Goal",
  "content" : ""
},

  {
  "id"    : "http://vokoiva.com//floating-knolls",
  "title"   : "Floating Knolls",
  "content" : ""
},

  {
  "id"    : "http://vokoiva.com//cul-de-sac-lawns",
  "title"   : "Cul-de-sac Lawns",
  "content" : ""
},

  {
  "id"    : "http://vokoiva.com//reassessments-%40-recess",
  "title"   : "Reassessments @ Recess",
  "content" : "These sketches are simultaneously visions and forms of meditation. Some of them are clear and precise while others are blurrier and more ambiguous. Many sketches here are also like stops between trails because of the fact that power-lines in each drawing trace their own paths through my neighborhood. Since every sketch mirrors my mind-states, they often act as outlets for fleeting thoughts or feelings. As of now, I&#39;ve mostly been focusing on sketching landscapes and still life&#39;s more than imaginative drawings but still plan on doing imaginary works sometime in the future. For some reason, imaginative sketching was easier when I&#39;d first started drawing but now it&#39;s more difficult since I&#39;ve drawn too many real world objects through still life&#39;s or landscapes and never took enough breaks for just dreaming. Still life pictures usually take less of my energy to finish since they&#39;re done away from the elements and it&#39;s often easier to capture smaller details while sketching objects up close inside. Landscapes require some extra energy to make since focusing on details larger objects have while observing buildings, trees, hills, and stones from a distance during various seasons usually takes more time. As of now, most sketches take between two to four hours even though many get finished within three. So far, I&#39;ve drawn more landscapes than people recently because I&#39;ve found that it&#39;s easier to draw a person whenever they don&#39;t know I&#39;m there in order to get more movement, or liveliness, within the composition. The people I&#39;ve drawn so far were all sitting still enough and close enough to me that I could draw them without freaking them out too much too. Even though individuals who have time to sit still are usually challenging to find within exurban suburbs, I still plan on doing more human figure sketches while simultaneously discovering additional places and spaces to sketch at overtime. The overall lack of variety in objects I&#39;m drawing is partially due to constraints and also due to my own lack of creative observation whenever I&#39;m planning compositions. For now though, I think constraints I&#39;m working within are simultaneous gifts and curses since they often force me to be more observant of different sketching opportunities. "
},

  {
  "id"    : "http://vokoiva.com//softball-sidelines",
  "title"   : "Softball Sidelines",
  "content" : ""
},

  {
  "id"    : "http://vokoiva.com//backyard-breezes",
  "title"   : "Backyard Breezes",
  "content" : ""
},

  {
  "id"    : "http://vokoiva.com//self-study-two",
  "title"   : "Self Study Two",
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