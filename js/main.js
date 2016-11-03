function agregarTarea(){
	contenedorDeTareas = document.getElementsByClassName("tarea")[0];
	nuevaTarea = document.createElement("div");
	tareaUsuario = document.getElementsByTagName("textarea")[0].value;
  	contenedorNuevaTarea = document.createElement("p");
  	contenedorNuevaTarea.setAttribute("class", "pDeTarea");
  	tarroBasura = document.createElement("span");
  	tarroBasura.setAttribute("class", "icon-bin basurero");
  	//tarroBasura.setAttribute("onclick", borrarTareas()) //verificar nombre de funcion
  	nodoTarea = document.createTextNode(tareaUsuario);
  	contenedorNuevaTarea.appendChild(nodoTarea);
  	contenedorNuevaTarea.appendChild(tarroBasura);
  	nuevaTarea.appendChild(contenedorNuevaTarea);
  	nuevaTarea.setAttribute("class", "laNuevaTarea");
  	contenedorDeTareas.appendChild(nuevaTarea);
}

/*function borrarTareas(){
	var borrar = document.getElementsByClassName("laNuevaTarea")[0];
	tarea.parentNode.removeChild(borrar);
}*/