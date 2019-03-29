$(document).ready(function(){

    $("form").submit(function(event) {
      event.preventDefault
      var gender = $('input:radio[name=gender]:checked').val();

      var age = $('input:radio[name=age]:checked').val();

      var music = $('input:radio[name=music]:checked').val();
      console.log(gender+age+music);
      var imgTag = "#";
      var test = "#rf2";

      if (music === "rock") {
        imgTag = imgTag + "r";
      } else if (music === "techno") {
        imgTag = imgTag + "t";
      } else {
        imgTag = imgTag + "o";
      }

      if (gender === "male") {
        imgTag = imgTag + "m";
      } else {
        imgTag = imgTag + "f";
      }

      if (age === "18") {
        imgTag = imgTag + "1";
      } else if (age === "25") {
        imgTag = imgTag + "2";
      } else {
        imgTag = imgTag + "3";
      }

      console.log(imgTag);

      $(imgTag).removeClass('hidden');
    });

});
