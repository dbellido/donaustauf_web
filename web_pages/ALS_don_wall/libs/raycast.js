
var raycaster = new THREE.Raycaster();

function onDocumentMouseDown( event )
{   //event.preventDefault();
	//https://it.wikipedia.org/wiki/Torre_Aquila
	//drawImage();
	var camera = viewer.camera;

	var scroll = $('body').scrollTop();
	var top = $('#potree_render_area').offset().top;
	var left = $('#potree_render_area').offset().left;
	// calculate mouse position in normalized device coordinates
	var mouse = { x : 0 , y : 0 };
	mouse.x =((event.clientX-left)/ $('#potree_render_area').width()) * 2 - 1;
	mouse.y = - ((event.clientY-top+scroll)/ $('#potree_render_area').height() ) * 2 + 1;


	// mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	// mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;


	// update the picking ray with the camera and mouse position
	raycaster.setFromCamera( mouse, camera );

	// create an array containing all objects in the scene with which the ray intersects
	var intersects_1 = raycaster.intersectObjects( [cube] );

	// if there is one (or more) intersections
	if ( intersects_1.length > 0 )
	{
		//console.log("Hit right @ " + toString( intersects[0].point ) )
		window.open("‪../../donaustauf_village.html#st_salvator")
		// change the color of the closest face.
		//intersects[0].object.callback();
		intersects_1[ 0 ].face.color.setRGB( 0.8 * Math.random() + 0.2, 0, 0 );
		intersects_1[ 0 ].object.geometry.colorsNeedUpdate = true;
		// window.alert("Questo Ã¨ un esempio di alert incluso nello script.");
		winW = ""+(screen.width / 2) -200 ;
		winH = ""+(screen.height / 2) -200 ;
		// window.open("http://www.gazzetta.it", "_blank", " scrollbars=yes, resizable=yes, top=" + winH + ", left="+ winW +", width=400, height=400");
		// window.open("", "MsgWindow", "resizable=yes", "top=500", "left=500", "width=100", "height=100");
	}

	var intersects_4 = raycaster.intersectObjects( [cube4] );

	// if there is one (or more) intersections
	if ( intersects_4.length > 0 )
	{
		//console.log("Hit right @ " + toString( intersects[0].point ) );
		window.open("‪../../donaustauf_village.html#Walhalla")
		// change the color of the closest face.
		//intersects[0].object.callback();
		intersects_4[ 0 ].face.color.setRGB( 0.8 * Math.random() + 0.2, 0, 0 );
		intersects_4[ 0 ].object.geometry.colorsNeedUpdate = true;
		winW = ""+(screen.width / 2) -200 ;
		winH = ""+(screen.height / 2) -200 ;

	}

	var intersects_3 = raycaster.intersectObjects( [cube3] );

	// if there is one (or more) intersections
	if ( intersects_3.length > 0 )
	{
		//console.log("Hit right @ " + toString( intersects[0].point ) );
		window.open("‪http://dbellido.github.io/Donaustauf_castle/Donaustauf/index.html","_blank")
		// change the color of the closest face.
		//intersects[0].object.callback();
		intersects_3[ 0 ].face.color.setRGB( 0.8 * Math.random() + 0.2, 0, 0 );
		intersects_3[ 0 ].object.geometry.colorsNeedUpdate = true;

		

		winW = ""+(screen.width / 2) -200 ;
		winH = ""+(screen.height / 2) -200 ;

	}

	var intersects_5 = raycaster.intersectObjects( [cube5] );

	// if there is one (or more) intersections
	if ( intersects_5.length > 0 )
	{
		//console.log("Hit right @ " + toString( intersects[0].point ) );
		window.open("‪../index.html")
		// change the color of the closest face.
		//intersects[0].object.callback();
		intersects_5[ 0 ].face.color.setRGB( 0.8 * Math.random() + 0.2, 0, 0 );
		intersects_5[ 0 ].object.geometry.colorsNeedUpdate = true;

		

		winW = ""+(screen.width / 2) -200 ;
		winH = ""+(screen.height / 2) -200 ;

	}

}

	//else {
		//cube3.material.color.setRGB( 1,0,1);
		//cube3.material.color.setRGB( 1,0.3,1);
		//cube3.geometry.colorsNeedUpdate = true;
		//cube3.material.opacity=[0.6];
		//plane_hs3.visible=false
	//}

	// else{
	// 	viewer.scenePointCloud.remove(plane);
	// }


function onMouseMove( event ) {
	var camera = viewer.camera;

	var scroll = $('body').scrollTop();
	var top = $('#potree_render_area').offset().top;
	var left = $('#potree_render_area').offset().left;
	// calculate mouse position in normalized device coordinates
	var mouse = { x : 0 , y : 0 };
	mouse.x =((event.clientX-left)/ $('#potree_render_area').width()) * 2 - 1;
	mouse.y = - ((event.clientY-top+scroll)/ $('#potree_render_area').height() ) * 2 + 1;
	// update the picking ray with the camera and mouse position
	raycaster.setFromCamera( mouse, camera );

	// create an array containing all objects in the scene with which the ray intersects
	var intersects_1 = raycaster.intersectObjects( [cube] );

	// if there is one (or more) intersections
	if ( intersects_1.length > 0 )
	{
	//	console.log("Hit this @ " + toString( intersects[0].point ) );
		// change the color of the closest face.
		//intersects[ 0 ].object.material.color.setRGB(1,0.3,1);
		//intersects[ 0 ].object.material.opacity=[0.3];
		//intersects[ 0 ].object.geometry.colorsNeedUpdate = true;
		plane_hs.visible=true
	}
	else {
		//cube.material.color.setRGB( 1,0,1);
		//cube.geometry.colorsNeedUpdate = true;
		//cube.material.opacity=[0];
		// cube2.material.color.setRGB( 1,0,1);
		// cube2.geometry.colorsNeedUpdate = true
		// cube2.material.opacity=[0];
		plane_hs.visible=false
	}

	//for the loggia cube	// create an array containing all objects in the scene with which the ray intersects
	var intersects_4 = raycaster.intersectObjects( [cube4] );

	// if there is one (or more) intersections
	if ( intersects_4.length > 0 )
	{

		//console.log("Hit right @ " + toString( intersects[0].point ) );
		//window.open("‪../../donaustauf_village.html#Walhalla")
		// change the color of the closest face.
		//intersects_4[ 0 ].object.material.color.setRGB(1,0.3,1);
		//intersects_4[ 0 ].object.material.opacity=[0.3];
		//intersects_4[ 0 ].object.geometry.colorsNeedUpdate = true;
		plane_hs2.visible=true
	}
	else {
		//cube4.material.color.setRGB( 1,0,1);
		//cube4.geometry.colorsNeedUpdate = true;
		//cube4.material.opacity=[0];
		plane_hs2.visible=false
	}



	var intersects_3 = raycaster.intersectObjects( [cube3] );

	// if there is one (or more) intersections
	if ( intersects_3.length > 0 )
	{
		//console.log("Hit right @ " + toString( intersects[0].point ) );
		//window.open("‪http://dbellido.github.io/Donaustauf_castle/Donaustauf/index.html")

		// change the color of the closest face.
		//intersects_3[ 0 ].object.material.color.setRGB(1,0.3,1);
		//intersects_3[ 0 ].object.material.opacity=[0.3];
		//intersects_3[ 0 ].object.geometry.colorsNeedUpdate = true;
		plane_hs3.visible=true
	}
	else {
		//cube3.material.color.setRGB( 1,0,1);
		//cube3.geometry.colorsNeedUpdate = true;
		//cube3.material.opacity=[0];
		plane_hs3.visible=false
	}

	var intersects_5 = raycaster.intersectObjects( [cube5] );

	// if there is one (or more) intersections
	if ( intersects_5.length > 0 )
	{
		//console.log("Hit right @ " + toString( intersects[0].point ) );
		//window.open("‪http://dbellido.github.io/Donaustauf_castle/Donaustauf/index.html")

		// change the color of the closest face.
		//intersects_3[ 0 ].object.material.color.setRGB(1,0.3,1);
		//intersects_3[ 0 ].object.material.opacity=[0.3];
		//intersects_3[ 0 ].object.geometry.colorsNeedUpdate = true;
		plane_hs7.visible=true
	}
	else {
		//cube3.material.color.setRGB( 1,0,1);
		//cube3.geometry.colorsNeedUpdate = true;
		//cube3.material.opacity=[0];
		plane_hs7.visible=false
	}

	plane_hs.lookAt(viewer.camera.position);
	plane_hs2.lookAt(viewer.camera.position);
	plane_hs3.lookAt(viewer.camera.position);
	//plane_hs4.lookAt(viewer.camera.position);
	plane_hs5.lookAt(viewer.camera.position);
	//plane_hs6.lookAt(viewer.camera.position);
	//plane_hs7.lookAt(viewer.camera.position);

}
