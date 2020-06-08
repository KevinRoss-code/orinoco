class fichierProduit {


    ficheProduit() {
        document.getElementById("x").addEventListener("click", () => {
            cameraSchema.setName('name');
            cameraSchema.setPrice("price");
            cameraSchema.setDescription("Description");
            cameraSchema.setLenses("Lenses");
        })
    }

}
