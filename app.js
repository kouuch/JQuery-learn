// $(document).ready(function(){
//     console.log('test')
//     $('li').text('Kokoroshi')
//     $('#up').text('Lily')
// })


$(document).ready(function () {
    let price = $('<li>From $100.99</li>')
    let price1 = $('<li>From $99.99</li>')
    let price2 = $('<li>From $98.99</li>')

    $('.vacation').before(price)//manipulasi dom before di atas after dibawh atau setelah li atau di atas li pertama
    $('.vacation').prepend(price1)//manipulasi dom before di atas after dibawh atau setelah li atau di atas li pertama

        price2  .appendTo($('.vacation'));//variabel price tolong tambahkan ke klas ,vacation sebelumnya atau di no10 kebalikan vacation menambhkan elemn pricenya == hasilnya di bawaah clas vacation

    //get
    console.log($('.akane').text())
    console.log($('.akane').html())
    console.log($('.input').val())

    
    //btn
    $('button').click(function(){
        $('p').toggle() //togle untuk menyembunyikan dan menampilkan
        $('li').text('Kokoroshi')//pas di klik maka akan li berubah jadi kokoroshi
        $('#destinations').css('background-color', 'tomato') //saat di click maka semua elemen <li> di dalam object yang memiliki id = destinations akan memiliki warna latar kuning.
    })
});