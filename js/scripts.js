$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var thing1=$("#thing1").val();
    var thing2 = $("#thing2").val();
    var myArray=[thing1, thing2];

    myArray[1];
    //alert(myArray[1]);

    //var newArray = myArray.slice();
    //newArray.push(myArray[1]);
    //alert (newArray);

    //var newArray = [];
    //newArray.push(myArray[1]);
    //alert (newArray);

    $("#item1").text(myArray[0]);
    $("#list").show();

    $("#item2").text(myArray[1]);
    $("#list").show();


    event.preventDefault();


  });
});
