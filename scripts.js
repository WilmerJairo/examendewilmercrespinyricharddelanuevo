/**********************************
richar
1 pagina indicando los buques q arriba cada buque debe tener informacion acerca del tipo

de carga, (banana,autos,etc), BANDERAS (ecuador,austraulia, chile, etc,,)capitan,compañia naviera,tipo (panama,

postapanama), minimos 5 buques.

la lista de busqueda debe ser un arreglo de objetos buque.

en la pagina de lista de buques,debe existir un cuadro de texto(textbox) y un boton para buscar. tambien debe

existir un select para buscar 3 criterios (carga,bandera,nombre del buque).al presionar el boton el sistema debe buscar

y prestar los objetos buque que cumplan los criterios de busqueda(texto a buscar y criterios).


****************************************/


var buque = [
{nombre:"Maria",carga:"Banana", bandera:"Ecuador", naviera:"Panama"},//primer registro
{nombre:"Richard",carga:"Autos", bandera:"Chile", naviera:"PostaPanama"},//segundo registro
{nombre:"Alexandra",carga:"Ropa",	bandera:"Colombia", naviera:"Ecuador"},//tercer registro
{nombre:"Cecilia",carga:"Computadoras", bandera:"Peru", naviera:"Colombia"},//cuarto registro
{nombre:"Carlos",carga:"Banana",	bandera:"Brasil", naviera:"Chile"}//quinto registro
];


/****************************************************
Impresion por pantalla de lista u objeto seleccionado
*****************************************************/

function printList(list, posicion){ //recibe el objeto y la posicion
	var listHTML = '';
	if (posicion < 0) { //si posicion es menor que cero entonces imoprime la lista completa
		for(var i=0; i<list.length; i++){
			listHTML += creaList(list, i);
		}
	}else{//si posicion tiene un valor mayor o igual que cero imprime solo la informacion que se ubica en la posicion enviada
		listHTML += creaList(list, posicion);
	}
	printHTML(listHTML, "info-estudiantes");//envia el codigo html a imprimir, ademas se asigna el TAG en el que se va a imprimir
}


/******************************************
Funcion que crea las listas
********************************************/

function creaList(list, posicion){//crea la lista de datos de la posicion solicitada
	var listHTML = '';
	
		listHTML += '<ul>';
		listHTML += '<li>Nombre Buque: ' + list[posicion].nombre + '</li>'; //nos entrega el dato del buque segun la posicion que tenga en el objeto
		listHTML += '<li>Carga Que Tiene: ' + list[posicion].carga + '</li>';
		listHTML += '<li>Bandera: ' + list[posicion].bandera + '</li>';
	
		
		listHTML += '<li>Naviera: ' + list[posicion].naviera + '</li>';
		
		
	listHTML += '</ul> <br>' ;// al final del HTML se agraga un espacio en blaco que diferencia a cada buque
	return listHTML; //retorna la lista listo para presentada
}



/******************************************
Funcion que imprime en el tag que queramos
********************************************/
function printHTML(mensaje, tag){
	var outputDiv = document.getElementById(tag);// aqui en el parametro TAG indica el id del tag en el que se va a presentar
	outputDiv.innerHTML = mensaje;
}


/********************************************
funcion de busqueda de buque
*******************************************/
function buscarPersona(list, nombre){
	var existe = '-1';// se define por defecto ya que las posiciones de un array comienzan en cero
	for(var i=0; i<list.length; i++){
		if(list[i].nombre.toLowerCase() == nombre){//compara los nombres con el dato ingresado, en caso de coincidir se asigna la posicion el la variable existe
			existe = i;
		}
	}
	return existe; //retorna la poscion encontrada o la de defecto
}

/*********************************************
Funciones ingresadas por teclado
de lista, salir o seleccion
*********************************************/
alert("Bienvenidos A Este Espacio Presione Enter para Ingresar");
while(true){
	var nombrebuque = prompt("Ingrese el Nombre de Buque a Consultar, S para salir o L para listar y salir");
	if(nombrebuque != '' && nombrebuque !=null){//filtro para no recibir valores nullos
		if(nombrebuque.toLowerCase() =='s'){ // si digita s el programa termina
			
			printHTML('', "info-estudiantes");//borramos la pantalla antes de salir
			break;
		}
		else if(nombrebuque.toLowerCase() =='l'){// si digita l se muestra la lista de estudiantes y el programa termina
			printList(buque, -1); // posicion menos 1 es para imprimir la lista completa
			break;
		}else{
			//lla ma a la funcion de buscar la poscion en la que se encuentra la persona dontro del arreglo del objeto
			var posicion = buscarPersona(buque, nombrebuque.toLowerCase());
			if(posicion >=0){
				printList(buque, posicion); //llama a la funcion de imprimir la lista un solo buque
				}else{
					alert('el buque no esta en la lista');
				}
			}
		}else{
			alert('error de escritura revise');//valor nulo ingresado
			//throw new Error("valor nulo ingresado");
		}
	}