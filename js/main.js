function twitter(){

  contenedorDeTareas = document.getElementsByClassName("tarea")[0];
	nuevaTarea = document.createElement("div");
	tareaUsuario = document.getElementsByTagName("textarea")[0].value;
  contenedorNuevaTarea = document.createElement("p");
  contenedorNuevaTarea.setAttribute("class", "pDeTarea");
  tarroBasura = document.createElement("span");
  tarroBasura.setAttribute("class", "icon-bin basurero");
  //tarroBasura.setAttribute("onclick", borrarTareas());
  nodoTarea = document.createTextNode(tareaUsuario);
  contenedorNuevaTarea.appendChild(nodoTarea);
  contenedorNuevaTarea.appendChild(tarroBasura);
  nuevaTarea.appendChild(contenedorNuevaTarea);
  nuevaTarea.setAttribute("class", "laNuevaTarea");
  contenedorDeTareas.appendChild(nuevaTarea);

  //Se crea un checkbox
  var minicaja = document.createElement('input');
  minicaja.type = "checkbox";
  //Se posiciona el checkbox
  minicaja.setAttribute("class", "cuadrito");
  contenedorNuevaTarea.appendChild(minicaja);

  function paraTachar(){
    //Se tacha el texto si 
    minicaja.addEventListener('click', function() {
      nuevaTarea.classList.toggle('tachado');
    }, false);
  } paraTachar();

  function borrarTareas(){
    tarroBasura.addEventListener('click', function() {
      laTarea = document.getElementsByClassName("laNuevaTarea")[0];
      laTarea.parentNode.removeChild(laTarea); //No sirve porque borra todos los p definitivamente y no deja crear más
    }, false);
  }borrarTareas();
}