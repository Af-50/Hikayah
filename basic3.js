window.onload = () => {
    let testEntityAdded = false;

    const el = document.querySelector("[gps-new-camera]");

    el.addEventListener("gps-camera-update-position", e => {
        if(!testEntityAdded) {
            alert(`Got first GPS position: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`);
            // Add a model to the north of the initial GPS position
            const comp = document.createElement("a-entity"); //modell
            comp.setAttribute('gps-new-entity-place', {
                latitude: 49.565552165777945,
                longitude:27.155829202409045
            });
            
            const model = document.createElement("a-entity");
            model.setAttribute('gltf-model', './assets/white_man/scene.gltf')
            model.object3D.scale.set(20,20,20);            
            model.object3D.rotation.set(90);
            model.setAttribute("position", {
                x: 0,
                y: 20,
                z: 0
            });

            const text = document.createElement("a-text");
            const textScale = 100;
            text.setAttribute("look-at", "[gps-new-camera]");
            text.setAttribute("scale", {
                x: textScale,
                y: textScale,
                z: textScale
            });
            text.setAttribute("value", "this is home");
            text.setAttribute("align", "center");

            comp.appendChild(model);
            comp.appendChild(text);

            document.querySelector("a-scene").appendChild(comp);
        }
        testEntityAdded = true;
    });
};
