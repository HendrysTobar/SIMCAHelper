
function addTxt()
{
	var lblDatos = document.createElement("label");
	lblDatos.setAttribute("type","text");
	lblDatos.setAttribute("style","width:100%");
	var filasEstudiantes = document.getElementById('notasDocenteDataTable_data').getElementsByTagName('tr').length;
	lblDatos.innerHTML = "<h1>Inserte Datos de notas aquí</h1> <p>Cantidad de estudiantes: "+"<span id='cantidadEstudiantes'>"+filasEstudiantes+"</span>"+"</p>";
	
	
	
	
	var txtDatos = document.createElement("textarea");
	txtDatos.setAttribute("type","text");
	txtDatos.setAttribute("rows","20");
	txtDatos.setAttribute("style","width:100%");
	txtDatos.setAttribute("value","");
	txtDatos.setAttribute("id","txtDatos");
	
	
	var btnDatos = document.createElement("button");
	btnDatos.setAttribute("onclick","IngresarDatos()");
	btnDatos.setAttribute("style","width:100%");
	btnDatos.setAttribute("value","Insertar Datos");
	btnDatos.innerHTML = "Insertar Datos";
	
	
	var notasDocenteDataTable = document.getElementById("notasDocenteDataTable");
	
	notasDocenteDataTable.appendChild(lblDatos);
	notasDocenteDataTable.appendChild(txtDatos);
	notasDocenteDataTable.appendChild(btnDatos);
	
	
	
}



addTxt();

function IngresarDatos()
{
    console.log("Ingresando datos...");
	var txtDatos = document.getElementById("txtDatos");
	var notasRaw = txtDatos.value;
	console.log(notasRaw);
	//cambia las comas por puntos
	notasRaw = notasRaw.replace(/,/g,".");
	console.log(notasRaw);
	
	var datos = notasRaw.split("\n");
	//Redondea a un decimal
	datos.forEach(function(d,i){ this[i] = parseFloat(d).toFixed(1) }, datos);
		
	var txtPrefijo = "notasDocenteDataTable:";
	var txtSufijo = ":ingresoNotaInput";
	for(i = 0; i< datos.length; i++)
	{
		console.log(i+" ");
		document.getElementById(txtPrefijo+i+txtSufijo).value = datos[i];
	}

}