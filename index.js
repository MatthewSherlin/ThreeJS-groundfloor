//set up scene, camera, renderer
const scene = new THREE.Scene();{
  const color = 0xAFD0F0;
  const near = 3;
  const far = 6;
  scene.fog = new THREE.Fog(color, near, far);
  scene.background = new THREE.Color(color);
}

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

//set up new cube object and add to scene
var geometry = new THREE.BoxGeometry( 1, 1, 1)
var material = new THREE.MeshStandardMaterial( { color: 0xF0C9AD })
var cube = new THREE.Mesh ( geometry, material )
scene.add( cube )
renderer.render( scene, camera )
camera.position.z = 5

//new box shape w wireframe
var geometry = new THREE.BoxGeometry( 3, 3, 3)
var material = new THREE.MeshBasicMaterial( {
 color: "0xF0C9AD", wireframe: true, transparent: true
})
var wireframeCube = new THREE.Mesh ( geometry, material )
scene.add( wireframeCube )

//adding ambient light
var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.5)
scene.add( ambientLight )

//adding point light
var pointLight = new THREE.PointLight( 0x005F94, 1 );
pointLight.position.set( 25, 50, 25 );
scene.add( pointLight );

//animation
function animate() {
 requestAnimationFrame( animate )
 cube.rotation.x += 0.013;
 cube.rotation.y += 0.013;
 wireframeCube.rotation.x -= 0.01;
 wireframeCube.rotation.y -= 0.01;
 renderer.render( scene, camera )
}
animate()
