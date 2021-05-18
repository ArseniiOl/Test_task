$(document).ready(function () {

    let $select = $("#age");
    for (let i = 18; i <= 100; i++) {
        $select.append($('<option></option>').val(i).html(i))
    }

});