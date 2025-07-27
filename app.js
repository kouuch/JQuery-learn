// $(document).ready(function(){
//     console.log('test')
//     $('li').text('Kokoroshi')
//     $('#up').text('Lily')
// })


$(document).ready(function () {
    $('button').click(function(){
        $('p').toggle() //togle untuk menyembunyikan dan menampilkan
        $('li').text('Kokoroshi')//pas di klik maka akan li berubah jadi kokoroshi
        $('#destinations').css('background-color', 'tomato')
    })
});