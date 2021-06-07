console.log('complete');
(function($){
  //jquery
  var section = document.querySelectorAll('span.about'); // span.about 객체를 "모두"(querySelectorAll) 불러와서 section 변수에 반환.
  
  var topbtn = document.querySelector('#top');
  var nav = document.querySelectorAll('.nnaa a');
  nav = Array.prototype.slice.call(nav);
var secIndex = 0; // index를 체크해줄 secIndex라는 변수 선언.
var sc = false;

function onScrollWindow(e){
  e.preventDefault();
  // console.log(e.wheelDelta);
  // console.log('스크롤 성공!');
  // console.log('secIndex: ' + secIndex); // console.log로 console에 secIndex의 값을 출력.
  // console.log(section[secIndex].getBoundingClientRect().y);
  // section 에 []로 배열의 순번을 불러오고 getBounding...의 y축 위치를 불러옴
  if(sc){return;}
  
  timeset();
  
  
   // secIndex의 값을 1씩 증가 -> onScrollWindow함수가 실행될때마다.
  if(e.wheelDelta < 0 && secIndex < section.length -1){ // 만약. 마우스 스크롤 아래
    secIndex++;
    console.log('마우스 스크롤 아래' + secIndex);
    
  }else if(e.wheelDelta > 0 && secIndex > 0){ // 그 이외의 만약. 마우스 스크롤 위
    secIndex--;
    console.log('마우스 스크롤 위' + secIndex);
  }
  $('html, body').animate({scrollTop:$('span.about').eq(secIndex).offset().top});
  // nav[secIndex-1].style.color = '#a0bfea';
}
function timeset(){
  sc = true;
  setTimeout(function(){
    sc = false;
    console.log('1초가 지났습니다.');
  },500);
}

window.addEventListener('mousewheel', onScrollWindow, { passive: false });
topbtn.addEventListener('click', function(){
  secIndex = 0;
});
for(var i=0;i<nav.length;i++){
  // console.log(i);
  nav[i].addEventListener('click', function(e){
    var target = e.currentTarget;
    var index = nav.indexOf(target);
    if(index == 3){
      secIndex = 1;
    }else if(index == 2){
      secIndex = 2;
    }else if(index == 1){
      secIndex = 4;
    }else if(index == 0){
      secIndex = 12;
    }
    console.log(nav.length, index, secIndex);
  });
}


// window에 scroll이라는 이벤트를 부여하고 스크롤을 할때마다 onScrollWindow함수 실행

})(jQuery);