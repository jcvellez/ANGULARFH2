(function () {
  function saludar(nombre: string) {
    console.table("Hola " + nombre); // Hola Logan
  }

  let wolverine = {
    nombre: "Logan",
  };

  saludar(wolverine.nombre);
})();
