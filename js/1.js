const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

			const renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			const geometry = new THREE.BoxGeometry( 1, 1, 1 );
			const material = new THREE.MeshBasicMaterial( { color: "rgb(20%, 50%, 30%)"} );
			const cube = new THREE.Mesh( geometry, material );
			scene.add( cube );
			const geometry2 = new THREE.BoxGeometry( 1, 1, 1 );
			const material2 = new THREE.MeshBasicMaterial( { color: "rgb(20%, 50%, 30%)"} );
			const cube2 = new THREE.Mesh( geometry2, material2 );
			scene.add( cube2 );
			const geometry3 = new THREE.BoxGeometry( 1, 1, 1 );
			const material3 = new THREE.MeshBasicMaterial( { color: "rgb(20%, 50%, 30%)"} );
			const cube3 = new THREE.Mesh( geometry3, material3 );
			scene.add( cube3 );
			//////
			const geometry4 = new THREE.BoxGeometry( 1, 1, 1 );
			const material4 = new THREE.MeshBasicMaterial( { color: "rgb(255, 0, 0)"} );
			const cube4 = new THREE.Mesh( geometry4, material4 );
			scene.add( cube4 );
			const geometry5 = new THREE.BoxGeometry( 1, 1, 1 );
			const material5 = new THREE.MeshBasicMaterial( { color: "rgb(255, 0, 0)"} );
			const cube5 = new THREE.Mesh( geometry5, material5 );
			scene.add( cube5 );
			const geometry6 = new THREE.BoxGeometry( 1, 1, 1 );
			const material6 = new THREE.MeshBasicMaterial( { color: "rgb(255, 0, 0)"} );
			const cube6 = new THREE.Mesh( geometry6, material6 );
			scene.add( cube6 );
			camera.position.z = 5;
			cube2.position.x=-1;
			cube3.position.x=1;
			cube4.position.y=1;
			cube4.position.x=-1;
			cube5.position.y=1;
			cube6.position.y=1;
			cube6.position.x=1;

			function animate() {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.01;
				cube2.rotation.x += 0.01;
				cube3.rotation.x += 0.01;
				cube4.rotation.x += 0.01;
				cube5.rotation.x += 0.01;
				cube6.rotation.x += 0.01;
				cube.rotation.y += 0.01;
				cube2.rotation.y += 0.01;
				cube3.rotation.y += 0.01;
				cube4.rotation.y += 0.01;
				cube5.rotation.y += 0.01;
				cube6.rotation.y += 0.01;

				renderer.render( scene, camera );
			};

			animate();