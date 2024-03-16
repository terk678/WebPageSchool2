document.getElementById('checkCsharpBtn').addEventListener('click', checkCsharp);

function checkCsharp() {
    var form1 = document.querySelector('.div1Csharp');
    var form2 = document.querySelector('.div2z');
    var form3 = document.querySelector('.div3z');

    // zapisałem w zmiennej divy abym mógł je wykorzystać

    var answer1 = form1.querySelector('input[name="gender"]:checked');
    var answer2 = form2.querySelector('input[name="gender2"]:checked');
    var answer3 = form3.querySelector('input[name="gender3"]:checked');

    var textDisplayer1 = document.getElementById("anwser1");
    var textDisplayer2 = document.getElementById("anwser2");
    var textDisplayer3 = document.getElementById("anwser3");

    // powyżej wybrałem id p w którym ma sie wyświetlić text czy odpowiedzi są poprawne

    // poniżej dałem if'y zeby sprawdziły kondycje czy odpowiedzi są poprawne

    if (answer1 !== null) {
        if (answer1.value === 'male1') {
            textDisplayer1.innerHTML = "Odpowiedź na pytanie pierwsze jest poprawna";
        } else {
            textDisplayer1.innerHTML = "Odpowiedź na pytanie pierwsze jest niepoprawna";
        }
    } else {
        textDisplayer1.innerHTML = "Nie wybrano odpowiedzi na pytanie pierwsze";
    }

    if (answer2 !== null) {
        if (answer2.value === 'male2') {
            textDisplayer2.innerHTML = "Odpowiedź na pytanie drugie jest poprawna";
        } else {
            textDisplayer2.innerHTML = "Odpowiedź na pytanie drugie jest niepoprawna";
        }
    } else {
        textDisplayer2.innerHTML = "Nie wybrano odpowiedzi na pytanie drugie";
    }

    if (answer3 !== null) {
        if (answer3.value === 'male2') {
            textDisplayer3.innerHTML = "Odpowiedź na pytanie trzecie jest poprawna";
        } else {
            textDisplayer3.innerHTML = "Odpowiedź na pytanie trzecie jest niepoprawna";
        }
    } else {
        textDisplayer3.innerHTML = "Nie wybrano odpowiedzi na pytanie trzecie";
    }
}

// funkcja w której gdy się wkliknie guzik do mozna zacząć quiz od nowa

function refreshPage() {
    location.reload();
}
document.getElementById('refreshButton').addEventListener('click', refreshPage);

console.log("Dzięki jeszcze raz za granie")
