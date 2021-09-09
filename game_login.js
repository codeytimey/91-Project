player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn - "+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn - "+player2_name;

function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    console.log("number1 = "+number1);
    console.log("number2 = "+number2);

    charAt1=number1.charAt(1);
    console.log(charAt1);
    length_divide_2=Math.floor(number1.length/2);
    charAt2=number1.charAt(length_divide_2);
    console.log(charAt2);
    length_minus_1=number1.length-1;
    charAt3=number1.charAt(length_minus_1);
    console.log(charAt3);

    charAt1=number2.charAt(1);
    console.log(charAt1);
    length_divide_2=Math.floor(number2.length/2);
    charAt2=number2.charAt(length_divide_2);
    console.log(charAt2);
    length_minus_1=number2.length-1;
    charAt3=number2.charAt(length_minus_1);
    console.log(charAt3);

    
    remove_charAt1=number1+number2;
    remove_charAt2=remove_charAt1.replace(charAt2, "X");
    remove_charAt3=remove_charAt2.replace(charAt3, document.getElementById("number2").value);
    console.log(remove_charAt3);
    

    question_word="<h4 id='word_display'>Q. "+remove_charAt3+"</h4>";
    input_box="<br>Answer : <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}
function check(){
    answer=document.getElementById("input_check_box").value;
    
    console.log("answer - "+answer);
    if(answer==number1*number2)
    {
        if(answer_turn=="player1")
        {
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else
        {
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
    if(question_turn=="player1")
    {
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question Turn - "+player2_name;
    }
    else
    {
        question_turn="player1";
        document.getElementById("player_question").innerHTML="Question Turn - "+player1_name;
    }
    if(answer_turn=="player1")
    {
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="Answer Turn - "+player2_name;
    }
    else
    {
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="Answer Turn - "+player1_name;
    }
    document.getElementById("output").innerHTML="";
}