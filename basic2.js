window.onload = () => {
    let testEntityAdded = false;

    const el = document.querySelector("[gps-new-camera]");

    el.addEventListener("gps-camera-update-position", e => {
        if(!testEntityAdded) {
            alert(`Got first GPS position: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`);
            // Add a box to the north of the initial GPS position
            const model = document.createElement("a-entity"); //modell
            const box = document.createElement("a-text");  // box
            
            model.setAttribute('gltf-model', './assets/white_man/scene.gltf')
            model.object3D.scale.set(20,20,20);
            //entity.setAttribute('material', { color: 'red' } );
            model.setAttribute('gps-new-entity-place', {
                latitude: e.detail.position.latitude + 0.001,
                longitude: e.detail.position.longitude
            });
            //model.object3D.rotation.set(90);
            box.setAttribute("scale", {
                x: 20, 
                y: 20,
                z: 20
            });
            box.setAttribute("value", "this is home" );
            box.setAttribute('gps-new-entity-place', {
                
                latitude: e.detail.position.latitude + 0.001,
                longitude: e.detail.position.longitude + 0.001
            });
            document.querySelector("a-scene").appendChild(model);
            document.querySelector("a-scene").appendChild(box);
        }
        testEntityAdded = true;
    });
};
