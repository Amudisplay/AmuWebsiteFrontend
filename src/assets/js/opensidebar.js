

var openLeft=false;
function openLeftNav() {
    $('#leftSidenav').css({'display':'block'});
    $('#rightSidenav').css({'display':'none'});
    $('#filterSidenav').css({'display':'none'});
    
    openLeft=true;
    $('#overlay').height(documentHeight());
    document.getElementById("main").style.marginLeft = '300px';
    $('#overlay').addClass('overlay');
    document.getElementById("overlay").style.marginLeft = '300px';
    setTimeout(function(){
        $('#leftSidenav').css({'zIndex':'2'});
    },400);
    $('#header-scroll').slideUp(100, "linear");
}
function closeLeftNav() {
    openLeft=false;
    document.getElementById("main").style.marginLeft = '0';
    document.getElementById("overlay").style.marginLeft = '0';
    $('#overlay').removeClass('overlay');
    $('#overlay').height(0);
    $('#leftSidenav').css({'zIndex':'-1'});
    slideDownAfterCloseSidebar();
    setTimeout(function(){
        $('#leftSidenav').css({'display':'none'});
    },400);
}

function slideDownAfterCloseSidebar(){
    var scrollPosition=$(window).scrollTop();
    if(scrollPosition>=400){
        setTimeout(function(){
            $('#header-scroll').slideDown(200,'linear');
        },   
        300);
    }
}
var openRight=false;
function openRightNav() {
    openRight=true;
    $('#rightSidenav').css({'display':'block'});
    $('#leftSidenav').css({'display':'none'});
    $('#filterSidenav').css({'display':'none'});
    $('#overlay').height(documentHeight());
    document.getElementById("main").style.marginLeft = '-300px';
    setTimeout(function(){
        document.getElementById("overlay").style.marginLeft = '-300px';
        $('#overlay').addClass('overlay');
    },100);
    setTimeout(function(){
        $('#rightSidenav').css({'zIndex':'3'});
    },400);

    $('#header-scroll').slideUp(100, "linear");
}
function closeRightNav() {
    openRight=false;
    document.getElementById("main").style.marginLeft = '0';
    document.getElementById("overlay").style.marginLeft = '0';
    $('#overlay').removeClass('overlay');
    $('#overlay').height(0);
    $('#rightSidenav').css({'zIndex':'-1'});

    slideDownAfterCloseSidebar();
    setTimeout(function(){
        $('#rightSidenav').css({'display':'none'});
    },400);
}




var openFilter=false;
function openFilterNav() {
    openFilter=true;
    $('#filterSidenav').css({'display':'block'});
    $('#rightSidenav').css({'display':'none'});
    $('#leftSidenav').css({'display':'none'});
    document.getElementById("main").style.marginLeft = '300px';
   
    
    setTimeout(function(){
        $('#filterSidenav').css({'zIndex':'3'});
    },400);
    $('#header-scroll').slideUp(100, "linear");
}
function closeFilterNav() {
    openFilter=false;
    document.getElementById("main").style.marginLeft = '0';
    $('#filterSidenav').css({'zIndex':'-1'});
    slideDownAfterCloseSidebar();
    setTimeout(function(){
        $('#filterSidenav').css({'display':'none'});
    },400);
}


// $(document).bind( "touchend", function(e){
//     let containerLeft = $("#leftSidenav");
    
//      if (!containerLeft.is(e.target) && containerLeft.has(e.target).length === 0 && openLeft == true){
//        closeLeftNav();
//      }
 
//      if(e.target.className==='closeLeft'){
//          closeLeftNav();
//      }
// });


$(document).on("mouseup",function(e){
    e.preventDefault();
    var containerLeft = $("#leftSidenav");
   
    if (!containerLeft.is(e.target) && containerLeft.has(e.target).length === 0 && openLeft == true){
      closeLeftNav();
    }

    if(e.target.className==='closeLeft'){
        closeLeftNav();
    }

});


$(document).mouseup(function(e){
    e.preventDefault();
    var containerRight= $("#rightSidenav");
   
    if (!containerRight.is(e.target) && containerRight.has(e.target).length === 0 && openRight == true){
      closeRightNav();
    }
});

$(document).mouseup(function(e){
    e.preventDefault();
    var containerFilter= $("#filterSidenav");
   
    if (!containerFilter.is(e.target) && containerFilter.has(e.target).length === 0 && openFilter == true){
      closeFilterNav();
    }
});


function documentHeight() {
    return Math.max(
        document.documentElement.clientHeight,
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight
    );
}



var openModal=false;
function openModalView(){
    openModal=true;
    $('body').addClass('modal-open');
}


function closeModalView(){
    var modal=document.getElementById('imageModal');
    modal.style.display='none';
    openModal=false;
    $('body').removeClass('modal-open');
}


$(document).mouseup(function(e){
    if(!e.target.className.includes('closeImage') && openModal==true){
        closeModalView();
    }
   
});