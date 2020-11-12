$( document ).ready(function() {
    console.log( "ready!" );

var date = moment().format('MMMM Do YYYY, h:mm:ss a');
document.getElementById("currentDay").innerHTML = date;

$(".clickEvent").on("click", function(){
    var text = $(this).siblings(".textArea").val()
    console.log(text)
    var time = $(this).parent().attr("id")
    localStorage.setItem(time, text)
    console.log(time)
});

$("#9am textarea").val(localStorage.getItem("9am"))
$("#10am textarea").val(localStorage.getItem("10am"))
$("#11am textarea").val(localStorage.getItem("11am"))
$("#12pm textarea").val(localStorage.getItem("12pm"))
$("#1pm textarea").val(localStorage.getItem("1pm"))
$("#2pm textarea").val(localStorage.getItem("2pm"))
$("#3pm textarea").val(localStorage.getItem("3pm"))
$("#4pm textarea").val(localStorage.getItem("4pm"))
$("#5pm textarea").val(localStorage.getItem("5pm"))

for (i = 9; i < 18; i++) {
    let el = ".localTime[data-hour=" + i + "]";

    if ($(el).attr("data-hour") === moment().format("H")) {
        $(el).attr("class", "present");

    } else if (parseInt($(el).attr("data-hour")) < moment().format("H")) {
        $(el).attr("class", "past");
    } else {
        $(el).attr("class", "future");
    }
}
});