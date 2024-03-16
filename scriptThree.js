document.getElementById('finalButtonAnimalQuiz').addEventListener('click', checkAnimalQuiz);

function checkAnimalQuiz() {
    var form1 = document.getElementById('form1z');
    var form2 = document.getElementById('form2z');
    var form3 = document.getElementById('form3z');

    var answer1 = form1.querySelector('input[name="gender"]:checked');
    var answer2 = form2.querySelector('input[name="gender2"]:checked');
    var answer3 = form3.querySelector('input[name="gender3"]:checked');

    var textDisplayer1 = document.getElementById("anwser1z");
    var textDisplayer2 = document.getElementById("anwser2z");
    var textDisplayer3 = document.getElementById("anwser3z");

    if (answer1 !== null) {
        if (answer1.value === 'Żyrafa') {
            textDisplayer1.innerHTML = "Odpowiedź na pytanie pierwsze jest poprawna";
        } else {
            textDisplayer1.innerHTML = "Odpowiedź na pytanie pierwsze jest niepoprawna";
        }
    } else {
        textDisplayer1.innerHTML = "Nie wybrano odpowiedzi na pytanie pierwsze";
    }

    if (answer2 !== null) {
        if (answer2.value === 'Fałsz') {
            textDisplayer2.innerHTML = "Odpowiedź na pytanie drugie jest poprawna";
        } else {
            textDisplayer2.innerHTML = "Odpowiedź na pytanie drugie jest niepoprawna";
        }
    } else {
        textDisplayer2.innerHTML = "Nie wybrano odpowiedzi na pytanie drugie";
    }

    if (answer3 !== null) {
        if (answer3.value === 'Meksyk') {
            textDisplayer3.innerHTML = "Odpowiedź na pytanie trzecie jest poprawna";
        } else {
            textDisplayer3.innerHTML = "Odpowiedź na pytanie trzecie jest niepoprawna";
        }
    } else {
        textDisplayer3.innerHTML = "Nie wybrano odpowiedzi na pytanie trzecie";
    }
}

function refreshPage() {
    location.reload();
}

document.getElementById('refreshButton').addEventListener('click', refreshPage);
