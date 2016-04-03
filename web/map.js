var Map = (function (THREE) {
	const GROUND_LEVEL = -10;
	function generateSpike(radius, height) {
		var geometry = new THREE.CylinderGeometry( 0, radius, height, 8 );
		var material = new THREE.MeshLambertMaterial( {color: 0xc8c8c8} );
		var spike = new THREE.Mesh( geometry, material );
		spike.position.y = GROUND_LEVEL;
		return spike;
	}

	function createWorld() {
        var ambient	= new THREE.AmbientLight( 0x444444 );
		scene.add( ambient );
		
		var light	= new THREE.DirectionalLight( 0x4444cc, 2 );
		light.position.set( 1, -1, 1 ).normalize();
		scene.add( light );

		var spotLight	= new THREE.SpotLight( 0x00FF00 );
		spotLight.target.position.set( 0, 2, 0 );
		spotLight.position.set( 0, 200, 1000 );
		spotLight.castShadow		= true;
		scene.add( spotLight );	

/*
        // add ground
        var groundGeo = new THREE.PlaneBufferGeometry( 10000, 10000 );
        var groundMat = new THREE.MeshPhongMaterial( { 
			color		: 0x66aa66,
			specular	: 0x888888,
			shading		: THREE.SmoothShading
		} );
        var ground = new THREE.Mesh( groundGeo, groundMat );
        ground.scale.multiplyScalar(3);
        ground.rotation.x = -Math.PI/2;
        ground.position.y = GROUND_LEVEL;
        ground.receiveShadow = true;
        scene.add( ground );
*/
var geometry	= new THREE.CubeGeometry( 1000, 0.2, 1000);
	var material	= new THREE.MeshPhongMaterial({
		ambient		: 0x444444,
		color		: 0x66aa66,
		shininess	: 150, 
		specular	: 0x888888,
		shading		: THREE.SmoothShading
	});
	var ground		= new THREE.Mesh( geometry, material );
	ground.scale.multiplyScalar(3);
	ground.position.y		= GROUND_LEVEL;
	scene.add( ground );

	ground.castShadow	= false;
	ground.receiveShadow	= true;
 	}
	return {
		generateSpike: generateSpike,
		createWorld: createWorld
	};
})(THREE);