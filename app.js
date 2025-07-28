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

    price2.appendTo($('.vacation'));//variabel price tolong tambahkan ke klas ,vacation sebelumnya atau di no10 kebalikan vacation menambhkan elemn pricenya == hasilnya di bawaah clas vacation

    //get
    console.log($('.akane').text())
    console.log($('.akane').html())
    console.log($('.input').val())

    //set
    $('.koutan').text('kouchh')
    $('.hell').html('<em>hellboy</em>')
    $('.input').val(123) //val mengambil data yang diinput pengguna pada form html

    //remove
    $('.hello').remove()//hapus dengan anakannya
    $('.world').empty()

    //eventhandler tebak angka
    $('#gass').on('click', function () {
        let kesempatan = 3
        const angka = Math.floor(Math.random() * 10) + 1

        while (kesempatan > 0) {
            let tebak = prompt(`tebak angka dari 1-10 \n anda mempunyai 3 kesempatan`)

            if (isNaN(tebak) || tebak < 1 || tebak > 10) {
                alert(`masukan angka yang valid 1-10`)
                continue
            }

            if (tebak == angka) {
                alert(`Selamat tebakan anda benar`)
                break
            } else if (tebak < angka) {
                alert(`Angak yang anda masukan terlalu kecil`)
            } else {
                alert(`angka yang anda masukan terlalu besar`)
            }
            kesempatan--
        }
        if (kesempatan === 0) {
            alert(`kesempatan anda habis ! angka yang benar adalah ${angka}`)
        }
    })

    //event handler menghapus
    $('#hapusgame').on('click', function () {
        $('#up').remove()
        alert(`anda telah menghapus list game`)
    })

    //efecct Jquery
    $('#btnhide').on('click', function (){
        $('#up').hide();
    })

    $('#btnfadeout').on('click', function (){
        $('#up').fadeOut(2000);
    })

    $('#toggelbtn').on('click', function (){
        $('#up').animate({
            marginLeft: 100
        });
    })

    //manipulasi css JQuery
    $('.jhon').addClass('kuning');

    $('#changecolor').on('click', function(){
        $('.hell').removeClass('hijau');
        $('.hell').toggleClass('tomato');
    });


    $('#changecolortomato').on('click', function(){
        $('.hell').removeClass('hijau');
        $('.hell').addClass('tomato');
    });
    $('#changecolorgrenn').on('click', function(){
        $('.hell').removeClass('tomato');
        $('.hell').addClass('hijau');
    });

    //aanimate
    $('#ftsize').on('click', function(){
        $('.hell').removeClass('tomato');
        $('.hell').removeClass('hijau');
        $('.hell').animate({
            marginLeft: 100,
            fontSize : 100
        });
    });


    //animate dengan logika seperti toggle
    $('#ftsize').on('click', function () {
        const box = $('.hell');
    
        // Hapus class warna setiap kali
        box.removeClass('tomato hijau');
    
        if (box.hasClass('besar')) {
            // Jika sudah besar, kecilkan kembali
            box.removeClass('besar').animate({
                marginLeft: 0,
                fontSize: 16
            });
        } else {
            // Jika kecil, besarkan
            box.addClass('besar').animate({
                marginLeft: 100,
                fontSize: 100
            });
        }
    });
    
    //btn
    $('#clickme').click(function () {
        $('p').toggle() //togle untuk menyembunyikan dan menampilkan
        $('li').text('Kokoroshi')//pas di klik maka akan li berubah jadi kokoroshi
        $('#destinations').css('background-color', 'tomato') //saat di click maka semua elemen <li> di dalam object yang memiliki id = destinations akan memiliki warna latar kuning.
    })
});