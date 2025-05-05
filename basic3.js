window.onload = () => {
    let testEntityAdded = false;

    const el = document.querySelector("[gps-new-camera]");

    el.addEventListener("gps-camera-update-position", e => {
        if(!testEntityAdded) {
            alert(`Got first GPS position: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`);
            // Add a model to the north of the initial GPS position
            const model = document.createElement("a-entity"); //modell
            
            
            model.setAttribute('gltf-model', './assets/white_man/scene.gltf')
            model.object3D.scale.set(20,20,20);
            //entity.setAttribute('material', { color: 'red' } );
            model.setAttribute('gps-new-entity-place', {
                latitude: 49.565552165777945,
                longitude:27.155829202409045
            });
            
            document.querySelector("a-scene").appendChild(model);
        }
        testEntityAdded = true;
    });
};
