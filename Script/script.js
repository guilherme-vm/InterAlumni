// When ready... HIDE SEARCHBAR
window.addEventListener("load",function() {
	// Set a timeout...
	setTimeout(function(){
		// Hide the address bar!
		window.scrollTo(0, 1);
	}, 0);
});

//AUDIOS
var audioOLA = document.getElementById("audioOLA");

//DATA
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
var newdate = day + "/" + month + "/" + year;

// esconder Password
var pass = document.getElementById("passwordInput");
$('#seePass').on('click', function(){
  if (pass.type === "password") {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
})


//animação de Log In
$('#signInButton').on('click', function(){
    $('.logInSection').addClass("logInSectionAnim");
    $('#logo').addClass("logoAnim");
    $('.appTitle')
        .addClass("appTitleAnim")
        .fadeIn(1000);
    $('#bottomMenu')
        .addClass("bottomMenuAnim")
        .fadeIn(1000);
    $('.menuIcon')
        .delay(2100)
        .fadeIn(600);
    $('.plusIcon')
        .delay(2600)
        .fadeIn(600);
    $('.hotTopicsContainer')
        .delay(2000)
        .fadeIn(1000);
    $('#hotTopics')
        .delay(4200)
        .css('opacity', '1');
    $('.insideScrollTopicsContainer')
        .delay(2600)
        .addClass("hotTopicsAnim");
     $('.categoriasContentor')
        .delay(2800)
        .addClass("categoriasAnim")
        .fadeIn(1800);
    
    setTimeout(function(){
		// Hide the address bar!
		 $('.logInSection').hide();
	}, 2800);
})


//Adicionar e remover favoritos HOMEPAGE
$(".estrelaFav").on("click", function(){
    if ($(this).attr("src") == "Assets/Star.svg") {
        console.log("Swap");
        $(this).attr("src", "Assets/StarSelected.svg")
        $(this).parent().prependTo('.categoriasContentor');
} else if ($(this).attr("src") == "Assets/StarSelected.svg") {
       console.log("Swap Back");
     $(this).attr("src", "Assets/Star.svg");
     $(this).parent().appendTo('.categoriasContentor'); 
}
})


// OPEN New Post UI Animation
$(".plusIcon").on("click", function(){
    $('.circleAnimation').removeClass("squareToCircleAnim");
    $('.circleAnimation').show();
    $(this).fadeOut();
    $(".lightBoxEffect").fadeIn();
    $('.circleAnimation').addClass("circleToSquareAnim");
    $(".newPostUI").show();
    $(".custom-select").delay(1400).animate({opacity:1},800);
    $(".crossBox").delay(2800).animate({opacity:1},800);
    $("#addImage").delay(2600).animate({opacity:1},800);
    $(".newPostTitle").delay(1800).animate({opacity:1},800);
    $(".newPostMessage").delay(2000).animate({opacity:1},800);
    $(".postPost").delay(2400).animate({opacity:1},800);
    $(document.body).css("overflow", "hidden");
})


// CLOSE New Post UI Animation
$(".crossBox").on("click", function(){
    $(".newPostUI").fadeOut(300);
    $(".custom-select, .crossBox, .newPostTitle, .newPostTitle, .newPostMessage, .postPost, #addImage").delay(1000).css("opacity", "0");
    $('.circleAnimation').delay(400).addClass("squareToCircleAnim");
    $('.circleAnimation').delay(600).removeClass("circleToSquareAnim");
    $(".lightBoxEffect").fadeOut(600);
    $(".plusIcon").delay(1200).fadeIn();
    $('.circleAnimation').delay(400).fadeOut();
    $(document.body).css("overflow", "scroll");
})


$(".select-selected").on("click", function(){
    $(".custom-select").css("bottom-border", "none");
})



// POST New Post UI Animation
$(".postPost").on("click", function(){
    $(".newPostUI").fadeOut(300);
    $(".postSentFeedback").delay(300).fadeIn().delay(700).fadeOut();
    
    setTimeout(function () {
        $('.circleAnimation').addClass("squareToCircleAnim");
        $('.circleAnimation').removeClass("circleToSquareAnim");
    }, 1500);
     $(".custom-select, .crossBox, .newPostTitle, .newPostTitle, .newPostMessage, .postPost, #addImage").delay(1000).css("opacity", "0");

     setTimeout(function () {
        $(".lightBoxEffect").fadeOut(600);
    $(".plusIcon").delay(100).fadeIn();
    $('.circleAnimation').delay(400).fadeOut();
    $(document.body).css("overflow", "scroll");
    }, 2500);
    
    $("#tituloDoPost, #mensagemDoPost").val("");
    
})




// SEARCH Animation
$("#searchIcon").on('click', function(){
    $(".lightBoxEffect").fadeIn();
    $(".searchBarContainer").fadeIn();
    $('html').css("overflow", "hidden");
    
         
    
    
    $("#searchInput").on('click',function(){
         $(".searchBarContainer").animate({bottom:15},700);
         $('#bottomMenu').addClass("menuOutAni");
         $('.plusIcon').fadeOut();
         $('.menuIcon').fadeOut();
     })
    
})





// Get the input field
var input = document.getElementById("searchInput");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    console.log("enter");
       if ($("#favouritesIcon").hasClass("opened")) { 
            $(this).removeClass("opened");
            $(".favouritePosts").addClass("favouritePostsAnimBack");
            setTimeout(function () {
            $(".favouritePosts")
                .hide()
                .removeClass("favouritePostsAnimBack")
                .removeClass("favouritePostsAnim");
    }, 1500);
        $(".noFavToSeeContainer").fadeOut();
        $("#goBack").fadeOut();
}       $(".noFavToSee").fadeOut();
        $(".lightBoxEffect").fadeOut();
        $(".hotTopicsContainer").fadeOut();
        $(".categoriasContentor").fadeOut();
        $(".searchBarContainer").animate({bottom:660},800);
        $("#homeIcon").attr("src","Assets/ICON-Home.svg");
        $("#favouritesIcon").attr("src","Assets/ICON-Favourites.svg");
        $("#searchIcon").attr("src","Assets/ICON-SearchSelected.svg");
        $('.mausHabitosSearchPostsContainer')
            .fadeIn()
            .addClass("mausHabitosPostAnim")
            .addClass("opened"); 
        $('#bottomMenu').removeClass("menuOutAni");
         $('.plusIcon').delay(1300).fadeIn();
         $('.menuIcon').delay(1300).fadeIn();
         $('html').css("overflow", "scroll");
  }
});



let NrE = 0;
let NrA = 10;

//Adicionar posts aos Favoritos
$(document).ready(function () {
$(".favouriteIcon").on("click", function(){  
    
    if($(this).attr("src") == "Assets/FavouriteButton.svg"){
        NrE=NrE + 1;
        NrA=NrA + 1;
        $(this).attr("src","Assets/FavouriteButtonSelected.svg");
        $(this).addClass("favIconAnim");
        $(this).attr('id', NrE.toString());
                
        $(this)
            .closest(".MausHabitosPost")
            .attr('id', NrA.toString())
            .clone(true)
            .appendTo('#favPosts')
            .attr('id', "clone");
    

    } else if ($(this).attr("src") == "Assets/FavouriteButtonSelected.svg"){
        
      
        
        let delPostFav = $(this).attr('id');
         $(this).attr("src","Assets/FavouriteButton.svg");
         $(this).removeClass("favIconAnim");
        console.log($(this).attr('id'));
        $(this).closest("#clone").remove();
        
        $(".favouritePosts").find("#" + delPostFav).closest("#clone").remove();
        
        
        $("#" + delPostFav).attr("src", "Assets/FavouriteButton.svg")
          //show NO FAVOURITES TO SEE screen
     if( $('#favPosts').text().length == 0 ){
         $(".noFavToSee").delay(400).fadeIn(400);
     } 
     if( $('#favPosts').text().length == 1 ){
         $(".noFavToSee").fadeOut();
     }
//        $("#" + delPostFav).closest(".MausHabitosPost").remove();
//        $("#" + delPostFav).closest(".MausHabitosPost").css("display", "none");

        
    }
    
})
})




    







//adicionar FAVORITOS POSTS






//CATEGORIAS DROPDOWN REF-https://www.w3schools.com/howto/tryit.asp?filename=tryhow_custom_select

var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);








//open ACCOMMODATION subcategories
$("#AccommodationTap").on('click', function(){
    $("#Accommodation").addClass("opened");
    $("#homeIcon").attr("src", "Assets/ICON-Home.svg");
    $(".hotTopicsContainer, .categoriasContentor").fadeOut();
    $('.accommodationUI').show();
    $("#accPlatforms").delay(300).animate({opacity:1},1200);
    $("#accPosts").delay(600).animate({opacity:1},1200);
})

//open ACCOMMODATION PLATFORMS 
$("#accPlatforms").on('click', function(){
    $(this).addClass("opened");
    $(".accommodationUI").addClass("accommodationUIanim");
    $(".accommodationUI").removeClass("accommodationUIanimBack");
    $(".accommodationPlatforms").show().addClass("accommodationPlatformsAnim");
    $(".accommodationPlatforms").removeClass("accommodationPlatformsAnimBack");
    $("#goBack").fadeIn().addClass("accommodationPlatformsArrow");
})





//open GRI subcategories
$("#IROtap").on('click', function(){
    $("#IRO").addClass("opened");
    $("#homeIcon").attr("src", "Assets/ICON-Home.svg");
    $(".hotTopicsContainer, .categoriasContentor").fadeOut();
    $('.griUI').show();
    $("#griOffice").delay(300).animate({opacity:1},1200);
    $("#griContacts").delay(600).animate({opacity:1},1200);
    $("#griGuide").delay(900).animate({opacity:1},1200);
})
//open GRI Contacts
$("#griContacts").on('click', function(){
    $("#goBack").fadeIn().addClass("GRIcontactsBack");
    $(".griUI").addClass("griUIAnim");
    $(".griUI").removeClass("griUIAnimBack");
    $(this).addClass("opened");
    $(".contactsGRI").show().addClass("contactsGRIanim");
    $(".contactsGRI").removeClass("contactsGRIanimBack");
    
})


//open GRI Office
$("#griOffice").on('click', function(){
    $(".Fernanda").delay(200).fadeIn(500);
    $("#goBack").fadeIn().addClass("GRIofficeBack");
    $(".griUI").addClass("griUIAnim");
    $(".griUI").removeClass("griUIAnimBack");
    $(this).addClass("opened");
    $(".textAreaGRI").show().addClass("textAreaGRIanim");
    $(".textAreaGRI").removeClass("textAreaGRIanimBack"); 
    $(".textAreaGRI").animate({top:"71%"},700);
     $("#mensagemGRI").on('click',function(){
         $("#tapOutside").addClass("closeOnTap");
//         $(".textAreaGRI").animate({top:"87%"},700);
         $(".textAreaGRI").animate({top:"87%"},700);
//         $(".searchBarContainer").animate({bottom:15},700);
         $('#bottomMenu').addClass("menuOutAni");
         $('.plusIcon').fadeOut();
         $('.menuIcon').fadeOut();
     
//         $(".textAreaGRI").addClass("textAreaGRIanim2");
     })
})

//enviar mensagem
$("#enviarGRImessage").on('click', function(){
    $("#mensagemGRI").addClass("mensagemAnim");
    $('#mensagemGRI').click(false);
    $("#mensagemGRI2").addClass("newGRImessage2Anim"); 
    $('#time').html(newdate);
    $('#time').delay(1300).fadeIn();
    $("#mensagemGRI").css("position", "fixed").css("height", "auto")
})






     



//tap outside text area to drop it, mobile
$(document).click(function() {
    var container = $("#tapOutside");
    if (!container.is(event.target) && !container.has(event.target).length && $("#tapOutside").hasClass("closeOnTap")) {
       console.log("teste");
         $('#bottomMenu').removeClass("menuOutAni");
         $('.plusIcon').delay(1300).fadeIn();
         $('.menuIcon').delay(1300).fadeIn();
         $(".textAreaGRI").animate({top:"71%"},700);
    } 
    
    else if (!container.is(event.target) && !container.has(event.target).length && $("#mensagemGRI2").hasClass("newGRImessage2Anim")) {
     $('#bottomMenu').removeClass("menuOutAni");
         $('.plusIcon').delay(1300).fadeIn();
         $('.menuIcon').delay(1300).fadeIn();
        $("").animate({top:"71%"},700);
    }
    
})



//open PORTUGUESE
$("#PortugueseTap").on('click', function(){
    $("#Portuguese").addClass("opened");
//    $("#goBack").fadeIn().addClass("portugueseArrow");
    $("#homeIcon").attr("src", "Assets/ICON-Home.svg");
    $(".hotTopicsContainer, .categoriasContentor").fadeOut();
     $(".portugueseUI").show();
    
    setTimeout(function () {
         $(".portugueseUI h2").fadeIn();
              $(".portugueseComponents").each(function(i) {
            $(this).delay(100 * i).fadeIn(500);  
              });
        }, 400);  
})

$("#OlaSoundIcon").on('click', function(){
    audioOLA.play();
})








//————————————————————————————————————————————
//BACK ARROW
$("#goBack").on('click', function(){
    $("#goBack").fadeOut();
    
    //se estiver a sair de GRI — CHAT
     if ($(this).hasClass("GRIofficeBack")) {
            $(".Fernanda").fadeOut();
            $(".griUI").addClass("griUIAnimBack");
            $(".griUI").removeClass("griUIAnim");
            $("#griOffice").removeClass("opened");
            $(".textAreaGRI").fadeOut();
            $("#tapOutside").removeClass("closeOnTap");
            $(this).removeClass("GRIofficeBack");
            setTimeout(function () {     
                $(".textAreaGRI").removeClass("textAreaGRIanim");
                $("#tapOutside").animate({top:"89%"},100);        
    }, 1000);
}

    //se estiver a sair de GRI — CONTACTOS
     if ($(this).hasClass("GRIcontactsBack")) {
            $("#griContacts").removeClass("opened");           
            $(".contactsGRI").addClass("contactsGRIbackArrowAnim");
            $(".contactsGRI").removeClass("contactsGRIanim");
            $(".griUI").addClass("griUIAnimBack");
            $(".griUI").removeClass("griUIAnim");
            $(this).removeClass("GRIcontactsBack");
            setTimeout(function () {
                $(".contactsGRI").removeClass("contactsGRIbackArrowAnim");
                $(".contactsGRI").removeClass("contactsGRIanimBack");
                $(".contactsGRI").hide();    
    }, 1000);
}
 
    
    //se estiver a sair de ACCOMMODATION — PLATFORMS
     if ($(this).hasClass("accommodationPlatformsArrow")) {
           $(".accommodationPlatforms").addClass("accommodationPlatformsAnimBack");
     $(".accommodationUI").addClass("accommodationUIanimBack");
    setTimeout(function () {
        $(".accommodationPlatforms").removeClass("accommodationPlatformsAnim");
        $(".accommodationUI").removeClass("accommodationUIanim");
    }, 1500);  
}
    
    
    
    
    
    
})



//————————————————————————————————————————————————————————————————————————
// HOME icon - return
 $("#homeIcon").on("click", function(){
    $(".noFavToSeeContainer").fadeOut();
    $("#goBack").fadeOut();
    $("#favouritesIcon").attr("src", "Assets/ICON-Favourites.svg");
     $(this).attr("src", "Assets/ICON-HomeSelected.svg");
     $('.hotTopicsContainer')
        .delay(300)
        .fadeIn(1000);
    $('#hotTopics')
        .delay(500)
        .css('opacity', '1');
    $('.insideScrollTopicsContainer')
        .delay(900)
        .addClass("hotTopicsAnim");
     $('.categoriasContentor')
        .delay(1200)
        .addClass("categoriasAnim")
        .fadeIn(1800);
        
//se estiver a sair de ACCOMMODATION
     if ($("#Accommodation").hasClass("opened")) {
            $("#Accommodation").removeClass("opened");
            $(".accommodationUI").addClass("accommodationUIanim");
            $(".accommodationUI").removeClass("accommodationUIanimBack");
            setTimeout(function () {
                $("#accPlatforms").css('opacity', '0');
                $("#accPosts").css('opacity', '0');
                $(".accommodationUI").removeClass("accommodationUIanim");
                $(".accommodationUI").hide();
    }, 1500);
}
     
     
     
     //se estiver a sair de ACCOMMODATION — PLATAFORMAS
     if ($("#accPlatforms").hasClass("opened")) {
            $("#accPlatforms").removeClass("opened");
            $(".accommodationPlatforms").addClass("accommodationPlatformsAnimReturn");
            setTimeout(function () {
                $(".accommodationPlatforms")
                    .removeClass("accommodationPlatformsAnimReturn")
                    .removeClass("accommodationPlatformsAnim");      
    }, 2500);
}
     
     
     
//se estiver a sair de INTERNATIONAL RELATIONS OFFICE
      if ($("#IRO").hasClass("opened")) {
            $("#IRO").removeClass("opened");
            $(".griUI").addClass("griUIAnim");
            $(".griUI").removeClass("griUIAnimBack");
            setTimeout(function () {
                $("#griOffice").css('opacity', '0');
                $("#griContacts").css('opacity', '0');
                $("#griGuide").css('opacity', '0');
                $(".griUI").removeClass("griUIAnim");
                $(".griUI").hide();
    }, 1500);
}
     
//se estiver a sair de INTERNATIONAL RELATIONS OFFICE — CONTACTS
      if ($("#griContacts").hasClass("opened")) {
            $("#griContacts").removeClass("opened");
            $("#IRO").removeClass("opened");
            $(".contactsGRI").addClass("contactsGRIanimBack");
            $(".contactsGRI").removeClass("contactsGRIanim");
            setTimeout(function () {
                $(".contactsGRI").removeClass("contactsGRIanimBack");
                $(".contactsGRI").hide();    
    }, 1500);
}

//se estiver a sair de INTERNATIONAL RELATIONS OFFICE — CHAT 
      if ($("#griOffice").hasClass("opened")) {
            $(".Fernanda").fadeOut();
            $("#griOffice").removeClass("opened");
            $("#IRO").removeClass("opened");
            $(".textAreaGRI").fadeOut();
            $("#tapOutside").removeClass("closeOnTap");
            setTimeout(function () {
                $(".textAreaGRI").removeClass("textAreaGRIanim");
                $("#tapOutside").animate({top:"89%"},100);
    }, 1500);
}
     
          
//se estiver a sair de PORTUGUESE
      if ($("#Portuguese").hasClass("opened")) { 
            $("#Portuguese").removeClass("opened");
            $(".portugueseUI").addClass("portugueseUIanim");
            setTimeout(function () {
                $(".portugueseUI").removeClass("portugueseUIanim");
                $(".portugueseUI").hide();
                $(".portugueseComponents").hide();
                $(".portugueseUI h2").hide();     
    }, 1500);
}
     
     
//se estiver a sair de SEARCH — MAUS HABITOS
      if ($(".mausHabitosSearchPostsContainer").hasClass("opened")) { 
            $(".mausHabitosSearchPostsContainer").removeClass("opened");
            $(".mausHabitosSearchPostsContainer").addClass("mausHabitosPostAnimBack");
            $(".searchBarContainer").fadeOut();
            $("#searchIcon").attr("src","Assets/ICON-Search.svg");
            setTimeout(function () {
                $(".mausHabitosSearchPostsContainer").removeClass("mausHabitosPostAnimBack");
                $(".mausHabitosSearchPostsContainer").removeClass("mausHabitosPostAnim");
                $(".mausHabitosSearchPostsContainer").hide();
//                $(".searchBarContainer").animate({top:630},800);
                $("#searchInput").val("");
                $(".searchBarContainer").animate({bottom:150},700);
    }, 1500);
}
     
     
//se estiver a sair dos favoritos
      if ($("#favouritesIcon").hasClass("opened")) {
          $(".noFavToSee").fadeOut();
            $(this).removeClass("opened");
            $(".favouritePosts").addClass("favouritePostsAnimBack");
            setTimeout(function () {
            $(".favouritePosts")
                .hide()
                .removeClass("favouritePostsAnimBack")
                .removeClass("favouritePostsAnim");
    }, 1500);
}
})




//————————————————————————————————————————————————————————————————————————
// FAVOURITES icon 

$("#goBack").fadeOut();


 $("#favouritesIcon").on("click", function(){
     $(".noFavToSeeContainer").delay(500).fadeIn(500);
     $(this).addClass("opened");  
      $("#homeIcon").attr("src", "Assets/ICON-Home.svg");
      $(this).attr("src", "Assets/ICON-FavouritesSelected.svg");
     $('.favouritePosts').fadeIn().addClass("favouritePostsAnim"); 
     
      $("#homeIcon").attr("src", "Assets/ICON-Home.svg");
      $(".hotTopicsContainer, .categoriasContentor").fadeOut();
      $(".favouritePosts").fadeIn();
     
     //show NO FAVOURITES TO SEE screen
     if( $('#favPosts').text().length == 0 ){
         $(".noFavToSee").delay(400).fadeIn(400);
     } 
     if( $('#favPosts').text().length == 1 ){
         $(".noFavToSee").fadeOut();
     }
     
     
     
     //se estiver a sair de ACCOMMODATION
     if ($("#Accommodation").hasClass("opened")) {
            $("#Accommodation").removeClass("opened");
            $(".accommodationUI").addClass("accommodationUIanim");
            $(".accommodationUI").removeClass("accommodationUIanimBack");
            setTimeout(function () {
                $("#accPlatforms").css('opacity', '0');
                $("#accPosts").css('opacity', '0');
                $(".accommodationUI").removeClass("accommodationUIanim");
                $(".accommodationUI").hide();
    }, 1500);
}
     
      //se estiver a sair de ACCOMMODATION — PLATAFORMAS
     if ($("#accPlatforms").hasClass("opened")) {
            $("#accPlatforms").removeClass("opened");
            $(".accommodationPlatforms").addClass("accommodationPlatformsAnimReturn");
            setTimeout(function () {
                $(".accommodationPlatforms")
                    .removeClass("accommodationPlatformsAnimReturn")
                    .removeClass("accommodationPlatformsAnim");      
    }, 2500);
}
     
     
     
     
//se estiver a sair de INTERNATIONAL RELATIONS OFFICE
      if ($("#IRO").hasClass("opened")) {
            $("#IRO").removeClass("opened");
            $(".griUI").addClass("griUIAnim");
            $(".griUI").removeClass("griUIAnimBack");
            setTimeout(function () {
                $("#griOffice").css('opacity', '0');
                $("#griContacts").css('opacity', '0');
                $("#griGuide").css('opacity', '0');
                $(".griUI").removeClass("griUIAnim");
                $(".griUI").hide();
    }, 1500);
}
     
//se estiver a sair de INTERNATIONAL RELATIONS OFFICE — CONTACTS
      if ($("#griContacts").hasClass("opened")) {
            $("#griContacts").removeClass("opened");
            $("#IRO").removeClass("opened");
            $(".contactsGRI").addClass("contactsGRIanimBack");
            $(".contactsGRI").removeClass("contactsGRIanim");
            setTimeout(function () {
                $(".contactsGRI").removeClass("contactsGRIanimBack");
                $(".contactsGRI").hide();    
    }, 1500);
}

//se estiver a sair de INTERNATIONAL RELATIONS OFFICE — CHAT 
      if ($("#griOffice").hasClass("opened")) {
            $(".Fernanda").fadeOut();
            $("#griOffice").removeClass("opened");
            $("#IRO").removeClass("opened");
            $(".textAreaGRI").fadeOut();
            $("#tapOutside").removeClass("closeOnTap");
            setTimeout(function () {
                $(".textAreaGRI").removeClass("textAreaGRIanim");
                $("#tapOutside").animate({top:"89%"},100);
    }, 1500);
}
     
          
//se estiver a sair de PORTUGUESE
      if ($("#Portuguese").hasClass("opened")) { 
            $("#Portuguese").removeClass("opened");
            $(".portugueseUI").addClass("portugueseUIanim");
            setTimeout(function () {
                $(".portugueseUI").removeClass("portugueseUIanim");
                $(".portugueseUI").hide();
                $(".portugueseComponents").hide();
                $(".portugueseUI h2").hide();     
    }, 1500);
}
     
   //se estiver a sair de SEARCH — MAUS HABITOS
      if ($(".mausHabitosSearchPostsContainer").hasClass("opened")) { 
            $(".mausHabitosSearchPostsContainer").removeClass("opened");
            $(".mausHabitosSearchPostsContainer").addClass("mausHabitosPostAnimBack");
            $(".searchBarContainer").fadeOut();
            $("#searchIcon").attr("src","Assets/ICON-Search.svg");
            setTimeout(function () {
                $(".mausHabitosSearchPostsContainer").removeClass("mausHabitosPostAnimBack");
                $(".mausHabitosSearchPostsContainer").removeClass("mausHabitosPostAnim");
                $(".mausHabitosSearchPostsContainer").hide();
//                $(".searchBarContainer").animate({top:630},800);
                $("#searchInput").val("");
                $(".searchBarContainer").animate({bottom:150},700);
    }, 1500);
}
     
     
    
})





