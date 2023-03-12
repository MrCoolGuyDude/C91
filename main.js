<!DOCTYPE html>
<html>
<head>
    <title>The Math Quiz Game!</title>

<meta name="viewport" content="width=device-width, intitial"></meta>
<link rel="stylesheet" href="width=device-width, intitial-scale=1"></link>
<sript src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
</script>

<link rel="stylesheet" type="text/css" href="quiz_game.css"></link>

<script src="quiz_login.js"></script>
<script src="quiz_game_page.js"></script>
<meta name="viewport"

function send () {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
}

question_number = "<h4>" + number1 + " X "+ number2 +"</h4>"
input_box = "<br>Answer : <input type='text' id='input_check_box'></input></br>"
check_button = "<br></br><button class='btn-info' onclick='check()'></button>"
row = question_number + input_box + check_button ;

document.getElementById("output").innerHTML = row;
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";
