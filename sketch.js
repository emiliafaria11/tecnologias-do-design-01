
let gIteration = 1;
let gRotationAngle = 46.0 / 85
let gNum = 5;

const WIDTH = 1400;
const HEIGHT = 850;

function setup() {

  createCanvas( windowWidth,windowHeight );
  colorMode( HSB, 100 );
  setupController( gNum );
  background( 'black' );

}

function draw() {
  
  translate( WIDTH/2, HEIGHT/2);
  fill( "white" );
  drawFermatSpiral( gIteration, gRotationAngle );
   gIteration++;

}

const drawFermatSpiral = ( iteration, angleRotation ) => {

  const scalar = 25;

  const theta = 3 * Math.PI * angleRotation * iteration;
  const vectorV = p5.Vector.fromAngle( theta );
  vectorV.mult( scalar * Math.sqrt( iteration ) );
  ellipse( vectorV.x, vectorV.y, scalar, scalar );

}

const setSpiralMode = ( mode ) => {

  gMode = mode;
  if( mode === MODE_1 ){
    gRotationAngle = 46.0 / 85;
  }else if( mode === MODE_2 ){
    gRotationAngle = Math.sqrt( 5 );
  }else if( mode === MODE_3 ){
    gNum = getSliderNumValue();
    gRotationAngle = 1 / gNum;
    console.log( 'num: ' + gNum  );
  }else if( mode === MODE_4 ){
    gRotationAngle = ( 1 + Math.sqrt(5) ) / 2;
  }else{
    gRotationAngle = Math.PI;
  }
  gIteration =  5;

}


// Set up all controllers 
const setupController = ( initNum ) => {

  const controllerOffset = 20;
  const controllerMargin = 0;

 


}

