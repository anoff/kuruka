var Map = (function(THREE) {
  var GROUND_LEVEL = -10;
  var COLOR_SKY = 0x0000ff;
  var COLOR_GROUND = 0xc8c8c8;
  var COLOR_OBJECT = 0xc8c8c8;

  function generateSpike(radius, height) {
    var geometry = new THREE.CylinderGeometry(0, radius, height, 8);
    var material = new THREE.MeshLambertMaterial({ color: COLOR_OBJECT });
    var spike = new THREE.Mesh(geometry, material);
    spike.position.y = GROUND_LEVEL;
    return spike;
  }

  function createWorld() {
    /*
    var ambient = new THREE.AmbientLight(0x444444);
    scene.add(ambient);

    var light = new THREE.DirectionalLight(0x4444cc, 2);
    light.position.set(1, -1, 1).normalize();
    scene.add(light);

    var spotLight = new THREE.SpotLight(0x00FF00);
    spotLight.target.position.set(0, 0, 0);
    spotLight.position.set(0, 200, 1000);
    spotLight.castShadow = true;
    scene.add(spotLight);
*/
    var directionalLight = new THREE.DirectionalLight( COLOR_SKY, 1 );
    directionalLight.target.position.set( 0, 0, 0);
    directionalLight.castShadow = true;
    scene.add( directionalLight );

    var sphere = new THREE.SphereGeometry( 0.5, 16, 8 );
    var light1 = new THREE.PointLight( 0xff00ff, 0, 50 );
    light1.position.set( 0, 50, 1000 );
    light1.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xff00ff } ) ) );
    scene.add( light1 );

    var light = new THREE.HemisphereLight( COLOR_SKY, COLOR_GROUND, 1 );
    light.position.set( 0, 500, 0 );
    scene.add( light );

    // add ground
    var groundGeo = new THREE.PlaneBufferGeometry( 10000, 10000 );
    var groundMat = new THREE.MeshPhongMaterial( {
      color    : COLOR_GROUND,
      shading    : THREE.SmoothShading
    } );
    var ground = new THREE.Mesh( groundGeo, groundMat );
    ground.scale.multiplyScalar(3);
    ground.rotation.x = -Math.PI/2;
    ground.position.y = GROUND_LEVEL;
    ground.receiveShadow = true;
    scene.add( ground );
  }
  return {
    generateSpike: generateSpike,
    createWorld: createWorld
  };
})(THREE);
