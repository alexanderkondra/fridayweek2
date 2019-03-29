
var question1;
var question2;
var question3;
var question4;
var question5;

var result = function(q1, q2, q3, q4, q5) {
  var language;
  var rPoints = 0; // Ruby points
  var jPoints = 0; // Java points
  var cPoints = 0; // CSS points

  if (q2 === 1) {
    rPoints = rPoints + 1;
    jPoints = jPoints + 1;
  };
  if (q2 === 2) {
    rPoints = rPoints + 1;
    jPoints = jPoints + 1;
    cPoints = cPoints + 1;
  };
  if (q3 === 1 || q3 === 2) {
    jPoints = jPoints + 1;
  };
  if (q3 === 3) {
    rPoints = rPoints + 1;
    cPoints = cPoints + 1;
  };
  if (q4 === 1) {
    cPoints = cPoints + 1;
  };
  if (q4 === 2) {
    rPoints = rPoints + 1;
    jPoints = jPoints + 1;
  };
  if (q5 === 1 || q5 === 2 || q5 === 4) {
    jPoints++;
  };
  if (q5 === 3 || q5 === 5) {
    rPoints = rPoints + 1;
  };
  if (q5 === 6) {
    rPoints++;
    cPoints++;
  };

  if (rPoints > jPoints && rPoints > cPoints) {
    language = "Ruby/Rails";
  } else if (jPoints > rPoints && jPoints > cPoints) {
    language = "Java/Android";
  } else if (cPoints > rPoints && cPoints > jPoints){
    language = "CSS/Design";
  } else {
    language = "Either of the tracks will work great for you!";
  };

  return language;
};


$(document).ready(function(){

  $("#survey_form").submit(function(event){
    event.preventDefault();

    question1 = parseInt($('input:radio[name=question1]:checked').val());
    question2 = parseInt($('input:radio[name=question2]:checked').val());
    question3 = parseInt($('input:radio[name=question3]:checked').val());
    question4 = parseInt($('input:radio[name=question4]:checked').val());
    question5 = parseInt($('input:radio[name=question5]:checked').val());

    var track = result(question1, question2, question3, question4, question5);

    $("#output").text(track);
    $("#survey_well").hide();
    $("#result_well").show();
  });

  $("#back_btn").click(function(event){
    $("#result_well").hide();
    $("#survey_well").show();
  });

});
