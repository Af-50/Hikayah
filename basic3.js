window.onload = () => {
    let testEntityAdded = false;

    const el = document.querySelector("[gps-new-camera]");

    el.addEventListener("gps-camera-update-position", e => {
        if(!testEntityAdded) {
            alert(`Got first GPS position: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`);
            // Add a model to the north of the initial GPS position
            const comp = document.createElement("a-entity"); 
            
            comp.setAttribute('gps-new-entity-place', {
                latitude: e.detail.position.latitude + 0.001,
                longitude: e.detail.position.longitude
            });
            
            const model = document.createElement("a-entity");
            model.setAttribute('gltf-model', './assets/white_man/scene.gltf')
            model.object3D.scale.set(20,20,20); 
            
            /*model.setAttribute('gps-new-entity-place',{ //this
                latitude: e.detail.position.latitude + 0.001,
                longitude: e.detail.position.longitude
            });           
            //model.object3D.rotation.set(90);
           /**/
            model.setAttribute("position", {
                x: 0,
                y: 0,
                z: 0
            });

           
            const text = document.createElement("a-entity");
            const textScale = 100;
            text.setAttribute("look-at", "[gps-new-camera]");
            
            text.setAttribute("value", " this is home");
            text.setAttribute("align", "center");

            
            comp.appendChild(model);
            comp.appendChild(text);

            document.querySelector("a-scene").appendChild(comp);
            //document.querySelector("a-scene").appendChild(model);//this
            //document.querySelector("a-scene").appendChild(text);//this
            model.addEventListener("model-error",function mm(){
                alert("did not loead");}
            );
        }
        testEntityAdded = true; 
    });
};

/*
window.onload = () => {
    let testEntityAdded = false;

    const el = document.querySelector("[gps-new-camera]");

    el.addEventListener("gps-camera-update-position", e => {
        if(!testEntityAdded) {
            alert(`Got first GPS position: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`);
            // Add a box to the north of the initial GPS position
            const model = document.createElement("a-entity"); //modell
            const box = document.createElement("a-box");  // box
            
            
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
            box.setAttribute('material', { color: 'red' } );
            box.setAttribute('gps-new-entity-place', {
                
                latitude: e.detail.position.latitude + 0.001,
                longitude: e.detail.position.longitude +0.001
            });
            document.querySelector("a-scene").appendChild(model);
            document.querySelector("a-scene").appendChild(box);
        }
        testEntityAdded = true;
    });
};
*/