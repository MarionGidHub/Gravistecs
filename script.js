
const frames = [
  'Bilder/kuerbis_0.png'
  'Bilder/kuerbis_1.png'
  'Bilder/kuerbis_2.png'
  'Bilder/kuerbis_3.png'
  'Bilder/kuerbis_4.png'
  'Bilder/kuerbis_5.png'
  'Bilder/kuerbis_6.png'
  'Bilder/kuerbis_7.png'
  'Bilder/kuerbis_8.png'
  'Bilder/kuerbis_9.png'
  'Bilder/kuerbis_10.png'
  'Bilder/kuerbis_11.png'
  'Bilder/kuerbis_12.png'
  'Bilder/kuerbis_13.png'
  'Bilder/kuerbis_14.png'
  'Bilder/kuerbis_15.png'
  'Bilder/kuerbis_16.png'
  'Bilder/kuerbis_17.png'
  'Bilder/kuerbis_18.png'
  'Bilder/kuerbis_19.png'
  'Bilder/kuerbis_20.png'
  'Bilder/kuerbis_21.png'
  'Bilder/kuerbis_22.png'
  'Bilder/kuerbis_23.png'
  'Bilder/kuerbis_24.png'
  'Bilder/kuerbis_25.png'
];
let currentIndex = 0;
let autoAnimationInterval = null;
const kuerbisImg = document.getElementById('Kürbis');
function updateFrame() {
  kuerbisImg.src = frames [currentIndex];
}
function rotateRight() {
  currentIndex = (currentIndex +1) % frames.length;
  updateFrame();
}
function rotateLeft() {
  currentIndex = (currentIndex -1 + frames.length) % frames.length;
  updateFrame();
}
function toggleAutoRotate (){
  if (autoAnimationInterval){
    clearInterval(autoAnimationInterval);
    autoAnimationInterval =  null;}else{ autoAnimationInterval =
  setInterval (rotateRight, 100);
    )
}
  (event)=>{
    const key = event.key.toLowerCase ();
    if (key=== 'r') {
      rotateRight();
    } else if (key ==='l') {
      rotateLeft ();
    }else if (key ==='a'){
      toggleAutoRotate();
    }
  });
