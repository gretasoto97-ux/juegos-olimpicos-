
        // función: Mostrar mensaje
        function mostrarMensaje() {
            document.getElementById("mensaje").innerHTML =
            "México hizo historia en 1968 al convertirse en el primer país de América Latina en organizar unos Juegos Olímpicos. Además, la atleta mexicana Soraya Jiménez ganó la primera medalla de oro olímpica para una mujer mexicana en Sídney 2000, convirtiéndose en un orgullo para todo el país.";
        }

        // función: Cambiar color de fondo
        function cambiarColor() {
            document.body.style.backgroundColor = "#d6eaff";
        }

        // función : Mostrar fecha actual
        function mostrarFecha() {
            let fecha = new Date();

            document.getElementById("fecha").innerHTML =
            "Fecha actual: " + fecha.toLocaleDateString();
        }

    