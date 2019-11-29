
function trigerNewText(urSelecter){

$(urSelecter).rotatable( {handle: $(document.createElement('i')).attr('class', 'fas fa-undo')} ).draggable({ containment: '.Overlay' });

}

function readURL(input) {
if (input.files && input.files[0]) {
            var reader = new FileReader();
    
            reader.onload = function (e) {
                // $('.OurBackground').css('background-image' , 'url(' e.target.result ')' );
                $('.OurBackground').css({"background-image" : "url(" + e.target.result +" )"  });
 

            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }


$(document).ready(function(){

    
    $("#Cimg").change(function(){
        readURL(this);
    });


$(document).on('change','#COverlaycol',function(){
  newColor=$(this).val();

  $('.Overlay').css({"background": "#" + newColor})
    });




$('#bgopacity').on("change mousemove", function() {
newOp=$(this).val();
$('.Overlay').css({"opacity": newOp});
});


$(document).on('click','.Overlay',function(){
    newS=$('body').attr('class');
   $('#' + newS).css({"border" : "none"});
   $("body").removeAttr('class');

   
});
    
$(document).on('click','.allText',function(){
  newS=$('body').attr('class');
  $('#' + newS).css({"border" : "none"});
  selectedDivId=$(this).attr('id');
  $("body").removeAttr('class');
  $('body').addClass(selectedDivId);
  $('#' + selectedDivId).css({"border" : "1px solid #66c6ff"});

});
 
$('#textcolorSize').on("change", function() {
 newOp=$(this).val();
 newS=$('body').attr('class');
$('#' + newS).css({"font-size": newOp + "px"  });

});



$('#letterS').on("change", function() {
    newOp=$(this).val();
    newS=$('body').attr('class');
   $('#' + newS).css({"letter-spacing": newOp + "px"  });
   
   });

   $('#wordS').on("change", function() {
    newOp=$(this).val();
    newS=$('body').attr('class');
   $('#' + newS).css({"word-spacing": newOp + "px"  }); 
   });




   $('#lineH').on("change", function() {
    newOp=$(this).val();
    
    newS=$('body').attr('class');


   $('#' + newS).css({"line-height": newOp + "px"  });
   
   });







   $('.sliders').on("change", function() {
   newOp=$(this).val();
   newS=$('body').attr('class');
   forAttr=$(this).attr('forAttr').trim();
   $('#' + newS).css({ forAttr : newOp + "px"  });
   console.log(forAttr);
   });

   

$(document).on('dblclick','.scrapImages',function(){
$('.scrapImages').css({ "border" : "none"});
var selectedPhoto=$(this).attr('src');
$(this).css({ "border" : "4px solid rgb(60, 181, 255)"});
// $('#bgImage').attr('src', selectedPhoto);
$('.OurBackground').css({"background-image" : "url(" + selectedPhoto +" )"  });



   });


$(document).on('change','#textColor',function(){
  newColor=$(this).val();
  newS=$('body').attr('class');
  $('#' + newS).css({"color" : "#" + newColor });
    });

$(document).on('change','.fontWeight',function(){
  newColor=$(this).val();
 newS=$('body').attr('class');
  $('#' + newS).css({"font-weight": newColor})
    });



$(document).on('click','#addMoreText',function(){
min = -100;
max = 40
newID= Math.floor(Math.random()*(max-min+1)+min);
$('.divText').append('<h3 contenteditable="true"   id= ' + newID + ' class="target5 allText " ><span  ><i id="delText" class="far fa-times-circle"></i></span>Sample Text</h3>');
trigerNewText('.divText .target5');
});

$(document).on('click','#delText',function(){
 newS=$('body').attr('class');
  $('#' + newS).hide();
});


  setTimeout( function() {
           
$.each( $("#font-selector optgroup"), function() {

var src = $(this).data( "src" );
$('head').append("<link href='" + src + "' rel='stylesheet' type='text/css'>");


                    });
                
                }, 0);



$("#font-selector").change(function() {

var selected = $("#font-selector option:selected").text();
$('head').append('<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=' + selected +'" >');
newS=$('body').attr('class');
$('#' + newS).css( 'font-family', selected );
});
                
var loadMore=1;
$(document).on('click','#imagesUnsplash',function(){
$('.error').css({"display" : "none"});
 querySearched= $('#querySearched').val(); 
if( querySearched ==''){
        return false;
}
$(this).text("Loading");
$(this).css({"background" : "#11b51b8c" });
 querySearched= $('#querySearched').val(); 

loadMore++;
$.ajax({
url:'backend/unsplashGetMetta.php',
type:'POST',
data:{
loadMore:loadMore,
querySearched:querySearched
},
success: function(data){
$('#imagesUnsplash').text("Load  More Imges");
$('#imagesUnsplash').css({"background" : "#4a4a4a" });
$('.result').prepend(data);
$('.result').fadeIn("slow");
},
// End ajax
});
// end event
});



$(document).on('click','#clear',function(){

$("#imagesUnsplash").attr("disabled", true);
 $("#imagesUnsplash").text('Search Gallery');
$('.error').css({"display" : "none"});
$('.result').html('').hide();
$('#querySearched').val('');
});

$(document).on('click','#serchImage',function(){
$('.error').css({"display" : "none"});
 querySearched= $('#querySearched').val(); 
if(!querySearched.lenght){
return false;
}
$('#imagesUnsplash').text("Load  More Imges");
$("#imagesUnsplash").attr("disabled", false); 


$.ajax({
url:'backend/unsplashGetMetta.php',
type:'POST',
data:{
querySearched:querySearched
},
success: function(data){
$('.result').prepend(data);
$('.result').fadeIn("slow");
},
// End ajax
});
// end event
});





$(document).on('click','#controlPanel li',function(){
metaAttr=$(this).attr('forAttr');
if(metaAttr=='#Ctrig'){$('#Cimg').click();}
$('.metaBox').hide(300);
$(metaAttr).slideToggle();
});

// $(document).on('click','.nav',function(){
// $('#controlPanel').toggleClass('open');
// $('.menuIcon').toggleClass('iconSwap');

// });
// $(document).on('click','#Ctrig',function(){

// });


// $(document).on('click','#imgG',function(){
// $('.OurImages').slideToggle();
// });

// $(document).on('click','#simpleOptions',function(){
// $('.editOptions').slideToggle();
// });



$( ".allIcon i" ).dblclick(function() {

sICON=$(this).attr('class');
min = -100;
max = 40
newID= Math.floor(Math.random()*(max-min+1)+min);
// console.log(sICON);
$('.divText').append('<i id= ' + newID + ' class="icons '+  sICON +  '"><span><i  id="delText" class="iconR far fa-times-circle"></i></span></i>');
  // $('.icons').draggable()
  trigerNewText('.icons');
  
  
  });
$(document).on('click','.icons',function(){
newS=$('body').attr('class');
$('#' + newS).css({"border" : "none"});
selectedDivId=$(this).attr('id');
$("body").removeAttr('class');
$('body').addClass(selectedDivId);
$('#' + selectedDivId).css({"border" : "1px solid #66c6ff"});
  });

//   var element = $(".OurBackground"); // global variable
//   var getCanvas; // global variable
   
//   $("#btn-Preview-Image").on('click', function () {
//     html2canvas(element, {
//     onrendered: function (canvas) {
//            $("#previewImage").append(canvas);
//            getCanvas = canvas;
//         }
//     });
// });



$("#btn-Convert-Html2Image").on('click', function () {
  var imgageData = getCanvas.toDataURL("image/png");
  // Now browser starts downloading it instead of just showing it
  var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
  $("#btn-Convert-Html2Image").attr("download", "your_pic_name.png").attr("href", newData);
});


var node = $(".OurBackground");
var btn = document.getElementById('btn-Convert-Html2Image');

btn.onclick = function() {
// node.innerHTML = "I'm an image now."
  domtoimage.toBlob('.OurBackground')
    .then(function(blob) {
      window.saveAs(blob, 'my-node.png');
    });
}
// function convertCanvasToImage(canvas) {
// 	var image = new Image();
// 	image.src = canvas.toDataURL("image/png");
// 	return image;
// }

// convertCanvasToImage('.OurBackground');
// }

});
