window.onload = () => {
    let testEntityAdded = false;

    const el = document.querySelector("[gps-new-camera]");

    el.addEventListener("gps-camera-update-position", e => {
        if(!testEntityAdded) {
            alert(`Got first GPS position: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`);
            // Add a box to the north of the initial GPS position
            
            const comp = document.createElement("a-entity");
            const model = document.createElement("a-entity"); //modell
            const box = document.createElement("a-text");  // box
            
            comp.setAttribute('gps-new-entity-place', {
                latitude: e.detail.position.latitude + 0.001,
                longitude: e.detail.position.longitude
            });

            model.setAttribute('gltf-model', './assets/white_man/scene.gltf')
            model.object3D.scale.set(20,20,20);
            //entity.setAttribute('material', { color: 'red' } );
            model.setAttribute("position",{
                x: 0,
                y: 0.001,
                z:0
            })
            //model.object3D.rotation.set(90);
            
            box.setAttribute("look-at","[gps-new-camer");
            box.setAttribute("scale", {
                x: 50, 
                y: 50,
                z: 50
            });
            box.setAttribute('value', 'this is home' );

            box.setAttribute("position", {
                x:0,
                y:0,
                z:0
            });

            comp.querySelector("a-scene").appendChild(model);
            comp.querySelector("a-scene").appendChild(box);
            document.querySelector("a-scene").appendChild(comp);
        }
        testEntityAdded = true;
    });
};
