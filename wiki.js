$(document).ready(function() {
 //   var wikiAPIurl="https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json&callback=?";

$("#searchInput").keypress(function(press){
                           if (press.which==13){
                             $("#searchbutton").click();
                           }
                           });
  
$("#searchbutton").click(function(){
  var searchterm = document.getElementById('searchInput');
  searchterm=searchterm.value;
  var wikiAPIurl="https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="+searchterm+"&namespace=0&limit=10&callback=?";
  $.getJSON(wikiAPIurl, function(result){
var htmlResults= ""
for (i=0;i<10;i++){
  if(result[1][i]!=undefined){
htmlResults += "<a href=" + result[3][i] + ">" + "<div class='panel panel-default'><div class='panel-body'><b>"  +result[1][i] +"</b>" + "  "+ result[2][i] + " " + "</div></div></a><br>"
  }
}

    $("#wikiResult").html(htmlResults);
  });
});
  
   function getWiki() {
   alert("1")
   // call wiki api for articles related to search term
   //output list of articles to html page

}; 
  
  
  
});


