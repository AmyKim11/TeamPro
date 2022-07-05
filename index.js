
let clientsImg = document.querySelectorAll(".client_CI");
let clientImgWrap = document.querySelector("ul");

const clientsImagesClass = () => {
   // let d = i+1;
   // clientsImg.className = classN;
   // clientImgWrap = parent;
   // clientsImg[i].style.animation = `0.${i}1s ease-in 0.1s`;
   // setTimeout(() => {
   //    clientsImagesClass(clientsImg[i], clientImgWrap);
   // }, i*1000);
   let v = 8;
   for (let i = 0; i < clientsImg.length; i++) {
      if (i < 9) {
         setTimeout(function () {
            clientsImg[i].style.opacity = 1;
         }, i * 200)
      } else if (i >= 9 && i < 18) {
         let j = i + v;
         let e = 26;
         v = v - 2;
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
   clientsImagesClass();
// $( document ).ready( function() {
//    $( 'h1.fi' ).fadeIn( 2000 );
//  } );
   function width1217(){
      
   }
// for(let i=0;i <clientsImg.length;i++){

// }