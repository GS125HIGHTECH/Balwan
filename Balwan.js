
const scene = new THREE.Scene();
//scene.background = new THREE.Color( 0x000000 );
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 60;
scene.background = new THREE.Color( 0x333333 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.shadowMap.enabled = true;
document.getElementsByTagName('body')[0].appendChild( renderer.domElement );

const controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.update();

const texture = new THREE.TextureLoader().load( 'textures/BlueSkySkybox.png' );

texture.mapping = THREE.EquirectangularReflectionMapping;

scene.background = texture;

const cubeTexture1 = new THREE.TextureLoader().load( 'textures/balwan.webp' );
  cubeTexture1.wrapS = THREE.RepeatWrapping;
  cubeTexture1.wrapT = THREE.RepeatWrapping;
  cubeTexture1.repeat.set( 1, 1 );
  
const cubeTexture2 = new THREE.TextureLoader().load( 'textures/carrot.jpg' );
  cubeTexture2.wrapS = THREE.RepeatWrapping;
  cubeTexture2.wrapT = THREE.RepeatWrapping;
  cubeTexture2.repeat.set( 1, 1 );
  
const cubeTexture3 = new THREE.TextureLoader().load( 'textures/stick.jpg' );
  cubeTexture3.wrapS = THREE.RepeatWrapping;
  cubeTexture3.wrapT = THREE.RepeatWrapping;
  cubeTexture3.repeat.set( 1, 1 );


const geometry1 = new THREE.SphereGeometry( 16, 32, 16 );
const geometry2 = new THREE.SphereGeometry( 11, 32, 16 );
const geometry3 = new THREE.SphereGeometry( 7, 32, 16 );
const geometry4 = new THREE.PlaneGeometry( 100, 100 );
const geometry5 = new THREE.SphereGeometry( 1, 32, 16 );
const geometry6 = new THREE.ConeGeometry( 5, 20, 32 );
const geometry7 = new THREE.BoxGeometry( 100, 10, 100 );
const geometry8 = new THREE.CylinderGeometry( 2, 1, 25, 6 );

const material1 = new THREE.MeshStandardMaterial( {color: 0xBDB0A0, map:cubeTexture1} );
const material2 = new THREE.MeshStandardMaterial( {color: 0x999999, side: THREE.DoubleSide} );
const material3 = new THREE.MeshStandardMaterial( {color: 0x000000} );
const material4 = new THREE.MeshStandardMaterial( {color: 0xff9933, map:cubeTexture2} );
const material5 = new THREE.MeshStandardMaterial( {color: 0x996600, map:cubeTexture3} );

const reka = new THREE.Mesh( geometry8, material5 );
reka.position.set(12, 12, 0);
reka.rotation.z+=Math.PI/4.0;
scene.add( reka );

var reka2 = reka.clone();
reka.position.set(-12, 12, 0);
reka.rotation.z-=Math.PI/2.0;
scene.add( reka2 );

const plane = new THREE.Mesh( geometry4, material2 );
plane.rotation.x-=Math.PI/2.0;
plane.position.set(0, -19, 0);
plane.receiveShadow = true;
scene.add( plane );

const snieg = new THREE.Mesh( geometry7, material1 );
snieg.position.set(0, -18, 0);
snieg.receiveShadow = true;
scene.add(snieg);

const kula1 = new THREE.Mesh( geometry1, material1 );
kula1.position.set(0, -3, 0);
kula1.receiveShadow = true;
scene.add(kula1);

const kula2 = new THREE.Mesh( geometry2, material1 );
kula2.position.set(0, 14, 0);
kula2.receiveShadow = true;
scene.add(kula2);
const kula3 = new THREE.Mesh( geometry3, material1 );
kula3.position.set(0, 24, 0);
kula3.receiveShadow = true;
scene.add(kula3);

const oko1 = new THREE.Mesh( geometry5, material3 );
oko1.position.set(-3, 27, 6);
oko1.receiveShadow = true;
scene.add(oko1);

var oko3 = oko1.clone();
oko3.position.y-=6;
oko3.position.x=0;
oko3.position.z=8;
scene.add(oko3); 

var oko4 = oko3.clone(); 
oko4.position.y-=6;
oko4.position.z=11;
scene.add(oko4);

var oko5 = oko4.clone(); 
oko5.position.y-=6;
oko5.position.z=11;
scene.add(oko5);

var oko6 = oko5.clone(); 
oko6.position.y-=6;
oko6.position.z=15;
scene.add(oko6);

const oko2 = new THREE.Mesh( geometry5, material3 );
oko2.position.set(3, 27, 6);
oko2.receiveShadow = true;
scene.add(oko2);

const nos = new THREE.Mesh( geometry6, material4 );
nos.position.set(0, 25.5, 6);
nos.receiveShadow = true;
nos.rotation.x+=Math.PI/2.0;
nos.scale.set(0.5, 0.5, 0.5);
scene.add(nos);

const czapka = new THREE.Mesh( geometry6, material4 );
czapka.position.set(0, 34, 0);
czapka.receiveShadow = true;
czapka.scale.set(0.6, 0.5, 0.6);
scene.add(czapka);




// Lights and helpers

  // add ambient light
   const ambientLight = new THREE.AmbientLight( 0x2a2a2a ) ;
   scene.add( ambientLight );

  // add pointlight for the shadows
   const pointLight = new THREE.PointLight( 0xffffff, 1, 200 );
   pointLight.position.set( 0, 35, 25 );
   pointLight.castShadow = true;
   scene.add( pointLight );

//


// lights controls
  document.getElementById( 'ambient-light' ).addEventListener(
    'click',
    function() {
      this.className = this.className.indexOf( 'inactive' ) > -1 ? 'active' : 'inactive';
      ambientLight.intensity = ambientLight.intensity==1 ? 0 : 1;
      renderer.render( scene, camera );
    },
    false
  );
renderer.render( scene, camera );

// aktualizacja OrbitControls.js
function animate() {
  requestAnimationFrame( animate );
	
	camera.updateProjectionMatrix();
	controls.update();

	renderer.render( scene, camera );
}

animate();

// zmiana rozmiaru okna
window.addEventListener(
  'resize',
  function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.render( scene, camera );
  },
  false
);