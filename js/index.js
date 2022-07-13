let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
let clientsImg = document.querySelectorAll(".client_CI");
let clientImgWrap = document.querySelector("ul"); 
let plusButton = document.querySelector(".button");  
// let countVisible = document.querySelectorAll("li[style='display: none']");

let clientArray = [];
//스크롤시 실행되는 지그재그 이벤트
window.onload = function() {
   window.addEventListener("scroll", function() {
      scrollEvent();
      // e.preventDefault(); 
   });
}
   
// 해상도 1218px~ 이상일때 지그재그 애니메이션 실행 함수
function  overWidth1217 () {
      
      let fixNum = 8;
      for (let i = 0; i < clientsImg.length; i++) {
         
         if (i < 9) {
            setTimeout(function () {
               clientsImg[i].style.opacity = 1;
            }, i * 200)
         } else if (i >= 9 && i < 18) {
            let j = i + fixNum;
            let e = 26;
            fixNum = fixNum - 2;
            setTimeout(function () {
               clientsImg[j].style.opacity = 1;
               // i=i+1;
   
            }, (e - j) * 200)
   
         } else if(i>=18) {
               setTimeout(function () {
                  clientsImg[i].style.opacity = 1;
               }, i * 200)
            }
          
         }
        
   }
// 해상도 1217px 이하일때 지그재그 애니메이션 실행 함수
   function width1217(){
         
   let fixNum = 7;
   for (let i = 0; i < clientsImg.length-3; i++) {
      if (i < 8) {
         setTimeout(function () {
            clientsImg[i].style.opacity = 1;
         }, i * 200)
      } else if (i >= 8 && i < 16) {
         let j = i + fixNum;
         let e = 23;
         fixNum = fixNum - 2;
         setTimeout(function () {
            clientsImg[j].style.opacity = 1;
            // i=i+1;

         }, (e-j) * 200)

      } else if(i>=16) {
            setTimeout(function () {
               clientsImg[i].style.opacity = 1;
            }, i * 200)
         }
       
      }
      
   
   }

// 해상도 940px 이하일때 애니메이션 실행 함수
   function width940(){
      for (let i = 0; i < clientsImg.length-15; i++) {
            setTimeout(function () {
               clientsImg[i].style.opacity = 1;
            }, i * 200)
      }
     
   }

   let startAni = true;
   let $BLOCK = 'block';
   // let NONE =  'none';
   // let sNum1 = [24, 27];
   // let sNum2 = [12, 27];   
   //해상도에 따라 애니메이션 함수 실행.
   const clientListAni = ()=> {
    
      if(windowWidth > 1218 ){
         overWidth1217();
         plusButton.style.display = 'none';
         // startAni = false;
         // console.log(windowWidth);
      } else if(windowWidth >= 941 && windowWidth <= 1218){
         width1217();
         // startAni = false;
        console.log("테스트")
       
         // buttonClickWidth1218(NONE, sNum1[0], sNum1[1]);
         // width940();
         // console.log(windowWidth);
      
      } else if(windowWidth < 941){
         width940();
         // startAni = false;
         // buttonClickWidth1218(NONE, sNum2[0], sNum2[1]);
         // console.log(windowWidth);
      }
   }

   for(let b=0;b<clientsImg.length;b++){
      clientArray.push(clientsImg[b]);
   }
   
  
// // 해상도 마다 숨겨진 로고 갯수 및 해당 갯수 로고 안보이게 스타일 줌.
   function buttonClickWidth1218(BLOCK, num1, num2) {
      let sliceArray = [];
      sliceArray = clientArray.slice(num1, num2);
      // console.log(sliceArray);
      for(let s = 0; s < sliceArray.length;s++){
      sliceArray[s].style.display = BLOCK;
    }
   //  console.log('나머지로고')
   }

   //플러스 버튼 눌렀을때 나머지 로고 애니메이션 실행.
   function hiddenAni(startNum){
      let e =1;
      for(let v = startNum;v<clientsImg.length;v++){
         e++;
         setTimeout(function () {
            clientsImg[v].style.opacity = 1;
         }, e * 200)
      }
   }

   // 플러스 버튼 눌렀을때 나머지 로고 표시
   const clickButtonEvent = () => {
      console.log('클릭이벤트');
      buttonClickWidth1218($BLOCK);
      if(windowWidth >= 941 && windowWidth <= 1218){
         hiddenAni(24);
      } else if(windowWidth < 941){
         hiddenAni(12);
      }
 
      if(clientsImg[26].style.display == 'block'){
         console.log('여기');
         plusButton.style.display = 'none';
      } else{
         console.log("here to");
         plusButton.style.display = 'block';
      }
   }
 // clientListAni();

// 스크롤시 실행되는 함수
 let scrollEvent = function() {
      
   // 사용자 모니터 화면 높이 + 스크롤이 움직인 높이
   const scrollY = window.scrollY;
   const innerHeight = window.innerHeight;
   const scroll = (innerHeight * 0.9) + scrollY;
   
   Array.prototype.forEach.call(clientsImg, function(li) {
      // console.log(li.offsetTop);
      // 객체 위치와 높이 비교 : 화면에 표출되는 높이인지 체크
      if(li.offsetTop < scroll) {
         clientListAni();
         // console.log('스크롤');
         // window.clearTimeout(clientListAni);
       } 
       plusButton.addEventListener("click", clickButtonEvent);
  });
  

}

// 해당 고객 기업 리스트 파트에서 새로고침시 실행되게 함수 한번 더 적어줌.
scrollEvent();

   // console.log(buttonClickWidth1218);

   // window.addEventListener("scroll", scrollEvent);
 

   
