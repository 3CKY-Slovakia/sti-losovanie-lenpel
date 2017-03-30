$(document).ready(function () {
    var textfields = $('#text-fields');
    var list = $('#students');
    var student = $('.student', textfields);
    var btn = $('.btn');
    var index;
    var timer;
    var canIPlay = true;
    var randomNumber ;


    function moveList() {   //pohyb zoznamom
        var name;
        if (index < randomNumber) {
            list.animate({
                'margin-top': '-=52px'
            }, 100);

            name = getName();     //aktualny student
            push(name);          //prilepi na koniec
            index += 1;
        }else{
            clearInterval(timer);
            canIPlay = !canIPlay;
        }
    }

    function getName() {
        studentName = list.children('.student').eq(index).text();
        return studentName;
    }

    function push(studentName) {
        list.append('<li class="student">'+  studentName +'</li>');  //na koniec zoznamu prilepi aktualny item
    }
    
    btn.click(function () {
    //    alert(randomNumber);
        //inicializujem tuto, aby sa to dalo opakovane spustat
        index = 0;
        randomNumber = Math.floor(Math.random() * 15) + 1;
        if (canIPlay) {
            timer = setInterval(function(){
                moveList();
            }, 100);
        }else{
            clearInterval(timer);
        }
        canIPlay = !canIPlay;

    })

});