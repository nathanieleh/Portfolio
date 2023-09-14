import * as THREE from 'three';

const scene = new THREE.Scene();
// scene.fog = new THREE.Fog( 0x111111, 3, 7 );
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.outerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const geometry = new THREE.OctahedronGeometry(1);
const material = new THREE.MeshBasicMaterial({color: 0x00ff00, /*transparent: true, opacity: .8,*/ wireframe: true});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

const shape = document.getElementsByTagName("canvas");

function animate() {
    requestAnimationFrame(animate);
    // cube.rotation.x += 0.01;
    cube.rotation.x = 0.2;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();

window.addEventListener("scroll", function(e) {
    let scrollValue = window.scrollY;
    shape[0].style.top = "calc(20% + " + scrollValue + "px)";
    // cube.rotation.x += 0.05;
    cube.rotation.y += 0.05;
});