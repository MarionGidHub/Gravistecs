
const frames = [
  'Bilder/kuerbis_0.png',
  'Bilder/kuerbis_1.png',
  'Bilder/kuerbis_2.png',
  'Bilder/kuerbis_3.png',

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
