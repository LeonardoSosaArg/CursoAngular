(function () {//funcion anonima autoinvocada bro
    
    function activar(quien: string, 
                    objeto: string = "balon de oro",
                    momento: string ){
    
    console.log(`${quien} gano el ${objeto}`)
    }

    activar("Lionel");
})();