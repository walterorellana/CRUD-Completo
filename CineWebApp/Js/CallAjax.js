llamadaDemo();



/*llamada*/
function llamadaDemo() {
    //alert("Hola con JavaScript");
    /*Creating an HTML table dynamically
   https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#creating_an_html_table_dynamically*/
    //uso de Fetch https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch
   
        var url = "https://movie.azurewebsites.net/api/cartelera?title=&ubication=";
        


    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var divPeli = document.getElementById('divPeli');
            divPeli.innerHTML = '';
            
            if (data.length > 0) {
                //alert(data.status );
                for (let index = 0; index < data.length; index++) {

                    const div = document.createElement("div");
                    div.className = "col-md-6";
               

                    const div2 = document.createElement("div");
                    div2.className = "row g-0 border rounded overflow-hidden flex-md-row mb-1 shadow-sm h-md-250 position-relative";

                    /*Info Peli*/
                    const div3 = document.createElement("div");
                    div3.className = "col p-4 d-flex flex-column position-static";
                    
                    const types = document.createElement("strong");
                    types.className = "d-inline-block mb-2 text-primary";
                    types.innerText = data[index].Type;

                    // const imID = document.createElement("strong");
                    // imID.className = "d-inline-block mb-1 text-primary";
                    // imID.innerText = data[index].imdbID;

                    const div5= document.createElement("div");
                    div5.className = "btn-group col-md-12 mb-4 btn-group";
                    div5.role="group";


                    const buttonActualiza=document.createElement("button");
                    buttonActualiza.type="button";
                    buttonActualiza.className="btn btn-info";
                    buttonActualiza.textContent="Actualizar";
                    buttonActualiza.setAttribute('data-bs-toggle', 'modal');
                    buttonActualiza.setAttribute('data-bs-target','#MdlForm2');
                    buttonActualiza.addEventListener('click',llamada5,false);
                    buttonActualiza.id=data[index].imdbID;
                    div5.appendChild(buttonActualiza);

                    const buttonEliminar=document.createElement("button");
                    buttonEliminar.type="button";
                    buttonEliminar.className="btn btn-info";
                    buttonEliminar.textContent="Eliminar";
                    buttonEliminar.id=data[index].imdbID;
                    buttonEliminar.addEventListener('click',llamada3,false);
                    div5.appendChild(buttonEliminar);

                  

                    const title = document.createElement("h3");
                    title.className = "mb-0";
                    title.innerText = data[index].Title;

                    const anio = document.createElement("div");
                    anio.className = "mb-1 text-body-secondary";
                    anio.innerText = data[index].Year;
                    
                    const description = document.createElement("p");
                    description.className = "card-text mb-auto";
                  if  (data[index].description === undefined ||  data[index].description === null) {

                    description.innerText = "";

                  }else{
                    description.innerText = data[index].description.substring(0,150) + " ...";
                  }
                

                    const ubitacion = document.createElement("a");
                    ubitacion.className = "stretched-link";
                    ubitacion.innerText = data[index].Ubication;

                    // div3.appendChild(imID);
                    div3.appendChild(types);
                    div3.appendChild(title);
                    div3.appendChild(anio);
                    div3.appendChild(description);
                    div3.appendChild(ubitacion);
                 

                    const div4 = document.createElement("div");
                    div4.className = "col-auto d-none d-lg-block";
                    div4.innerHTML = "<img alt=\"Not source\" src=\"" + data[index].Poster + "\" width=\"200\" height=\"250\">";

                    div2.appendChild(div3);
                    div2.appendChild(div4);
                    div.appendChild(div2);
                    div.appendChild(div5);
                    divPeli.appendChild(div);
                }
            }

        });

}

/*Llamada por ID*/
function llamada1(){
    //alert("llamada 1");
    var titulo = document.getElementById("txtPeli");
    var ubicacion = document.getElementById("cmbUbicacion");


var url="";

    
    if (titulo.value != null && ubicacion.value != null){
         url = "https://movie.azurewebsites.net/api/cartelera?title="+titulo.value+"&ubication="+(ubicacion.value=="Mostrar Todos"?"":ubicacion.value)+"";
    }
    else{
     url = "https://movie.azurewebsites.net/api/cartelera?title=&ubication=";
    }

    alert(url)
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var divPeli = document.getElementById('divPeli');
            divPeli.innerHTML = '';
            
            if (data.length > 0) {
                //alert(data.status );
                for (let index = 0; index < data.length; index++) {

                    const div = document.createElement("div");
                    div.className = "col-md-6";
                    

                    const div2 = document.createElement("div");
                    div2.className = "row g-0 border rounded overflow-hidden flex-md-row mb-1 shadow-sm h-md-250 position-relative";

                    /*Info Peli*/
                    const div3 = document.createElement("div");
                    div3.className = "col p-4 d-flex flex-column position-static";
                    
                    const types = document.createElement("strong");
                    types.className = "d-inline-block mb-2 text-primary";
                    types.innerText = data[index].Type;

                    // const imID = document.createElement("strong");
                    // imID.className = "d-inline-block mb-1 text-primary";
                    // imID.innerText = data[index].imdbID;

                    const div5= document.createElement("div");
                    div5.className = "btn-group col-md-12 mb-4 btn-group";
                    div5.role="group";

                    const buttonActualiza=document.createElement("button");
                    buttonActualiza.type="button";
                    buttonActualiza.className="btn btn-success";
                    buttonActualiza.textContent="Actualizar";
                    buttonActualiza.setAttribute('data-bs-toggle', 'model');
                    buttonActualiza.setAttribute('data-bs-target','#MdlForm2');
                    buttonActualiza.addEventListener('click',llamada5,false);
                    buttonActualiza.id=data[index].imdbID;
                    div5.appendChild(buttonActualiza);

                    const buttonEliminar=document.createElement("button");
                    buttonEliminar.type="button";
                    buttonEliminar.className="btn btn-danger";
                    buttonEliminar.textContent="Eliminar";
                    buttonEliminar.addEventListener('click',llamada3,false);
                    buttonEliminar.id=data[index].imdbID;
                    div5.appendChild(buttonEliminar);

                  
                    const title = document.createElement("h3");
                    title.className = "mb-0";
                    title.innerText = data[index].Title;

                    const anio = document.createElement("div");
                    anio.className = "mb-1 text-body-secondary";
                    anio.innerText = data[index].Year;
                    
                    const description = document.createElement("p");
                    description.className = "card-text mb-auto";
                    if  (data[index].description === undefined ||  data[index].description === null) {

                        description.innerText = "";
    
                      }else{
                        description.innerText = data[index].description.substring(0,150) + " ...";
                      }
                

                    const ubitacion = document.createElement("a");
                    ubitacion.className = "stretched-link";
                    ubitacion.innerText = data[index].Ubication;

                    // div3.appendChild(imID);
                    div3.appendChild(types);
                    div3.appendChild(title);
                    div3.appendChild(anio);
                    div3.appendChild(description);
                    div3.appendChild(ubitacion);
                 

                    const div4 = document.createElement("div");
                    div4.className = "col-auto d-none d-lg-block";
                    div4.innerHTML = "<img alt=\"Tren bala\" src=\"" + data[index].Poster + "\" width=\"200\" height=\"250\">";

                    div2.appendChild(div3);
                    div2.appendChild(div4);
                    div.appendChild(div2);
                    div.appendChild(div5);
                    divPeli.appendChild(div);
                }
            }

        });

}

/*Llamada por grabacion */
function llamada2(){
    var id = document.getElementById("txtID");
    var titulo = document.getElementById("txtTitle");
    var year = document.getElementById("txtYear");
    var types = document.getElementById("txtType");
    var poster = document.getElementById("txtPoster");
    var description = document.getElementById("txtDes");
    var ubicacion = document.getElementById("cmbUbiModal");
    var estado = document.getElementById("cmbEstadoModal");
    
alert(id);
    const Create = {
        imdbID: id.value,
        Title: titulo.value,
        Year: year.value,
        Type: types.value,
        Poster:poster.value,
        description: description.value,
        Ubication:ubicacion.value,
        Estado:Number(estado.value) ,
        };
        
        const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(Create),
        };

        fetch('https://movie.azurewebsites.net/api/cartelera', options)
        .then(data => {
      if (!data.ok) {
        throw Error(data.status);
       }
       return data.json();
      }).then(Create => {
      alert(Create);
     
      }).catch(e => {
      console.log(e);
      });
      document.querySelector('#AggPeli').reset();
}

function llamada3(e){
    const idpeli = e.target.id;

    idpeli.disabled=true;
    url = "https://movie.azurewebsites.net/api/cartelera?imdbID="+idpeli+"";
    var options = {
        method: 'DELETE'
    };

    fetch(url, options)
        .then(response => response.json())
        .then(data=>{

            alert("Codigo http: "+data.codError +" Mensaje: "+ data.msgRespuesta);
            llamadaDemo();
        })
        .catch(error => {
            console.error('Error de red',error);
        });
    
        idpeli.disabled=false;
                  
}

function llamada4(){
    // const idpeli = e.target.id;
    var id = document.getElementById("txtIDU");
    // id.innerText = idpeli;
    var titulo = document.getElementById("txtTitleU");
    var year = document.getElementById("txtYearU");
    var types = document.getElementById("txtTypeU");
    var poster = document.getElementById("txtPosterU");
    var description = document.getElementById("txtDesU");
    var ubicacion = document.getElementById("cmbUbiModalU");
    var estado = document.getElementById("cmbEstadoModalU");
    
alert(id);
    const Create = {
        imdbID: id.value,
        Title: titulo.value,
        Year: year.value,
        Type: types.value,
        Poster:poster.value,
        description: description.value,
        Ubication:ubicacion.value,
        Estado:Number(estado.value),
        };
        
        const options = {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(Create),
        };
        url = 'https://movie.azurewebsites.net/api/cartelera?imdbID='+id.value+'';
        fetch(url, options)
        .then(data => {
      if (!data.ok) {
        throw Error(data.status);
       }
       return data.json();
      }).then(Create => {
      alert(Create);
     
      }).catch(e => {
      console.log(e);
      });
      document.querySelector('#UPeli').reset();
}

function llamada5(e){
    const idpeli = e.target.id;
    var id = document.getElementById("txtIDU");
    id.value = idpeli;
}