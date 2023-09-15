function getCharacterPage(page) {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            $('.characterContainer').empty();
            for (let el of data.results) {
                $('.characterContainer').append(`<div class='characterItem'>
                    <img src="${el.image}" alt="">
                    <h3>${el.name}</h3>
                    <p><b>Gender: <b>${el.gender}</p>
                    <button id="${el.id}">More</button> <i class="fa-regular fa-star fa-xl" id="star"></i>
                </div> `);



$('#1').click(function () {

    
        $('.cardconteiner').css('display','flex')
 
       
})      
$('#close').click(function () {

    
    $('.cardconteiner').css('display','none')

   
})      
         
                
            }
        })
}



let currentPage = 1;
getCharacterPage(currentPage);

$('#nextBtn').click(function () {
    if (currentPage <= 43) {
        currentPage++;
        getCharacterPage(currentPage);
        $('#pageNumber').text(currentPage); 
    }
})

$('#prewBtn').click(function () {
    if (currentPage >= 1) {
        currentPage--;
        getCharacterPage(currentPage);
        $('#pageNumber').text(currentPage);
    }
})


    let Open = true;



    $('.filtericon').click(function () {
        if (Open == true) {
            $( '.characterContainer' ).css("width", "80%"  );
            $( '.filtercard' ).css("width", "20%"  );
            $( '.filtercard' ).css("display", "flex"  );
            $( '.pagination' ).css("width", "80%"  );
          Open = false;
        } else {
            $( '.characterContainer' ).css("width", "100%"  );
            $( '.filtercard' ).css("width", "20%"  );
            $( '.filtercard' ).css("display", "none"  );
            $( '.pagination' ).css("width", "100%"  );
            Open = true;
          
        }
       
    })
   




    $('.OpenFilter').hide();
$('#Species').click(function () {
    $('#OpenSpecies').slideToggle(100);
})
$('#status').click(function () {
    $('#OpenStatus').slideToggle(100);
})
$('#sex').click(function () {
    $('#OpenSex').slideToggle(100);
})

