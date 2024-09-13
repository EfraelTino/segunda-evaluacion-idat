var $container = document.getElementById("container");
let $encontrarGohan = document.getElementById("encontrar-gohan");
let $mostrarTodos = document.getElementById("mostrarTodos");
let $encontrarSaiyayines = document.getElementById("saiyayines");
let $filtroAndroides = document.getElementById("filtroAndroides");
let $buscarPersonaje = document.getElementById("buscarPersonaje");
let $menorPoder = document.getElementById("menorPoder");
let $mayorPoder = document.getElementById("mayorPoder");
var $messageError = document.getElementById("messageError");
let $pVegueta = document.getElementById("pVegueta");
let $pFemeninos = document.getElementById("personajesFemeninos");
let $tPoderes = document.getElementById("tPoderes");
$encontrarGohan.addEventListener("click", buscarGohan);
$encontrarSaiyayines.addEventListener("click", filtrarSaiyayin);
$filtroAndroides.addEventListener("click", filtrarAndroide);
$menorPoder.addEventListener("click", filtrarMenorPoder);
$mayorPoder.addEventListener("click", filtrarMayorPoder);
$pVegueta.addEventListener("click", posicionVegeta);
$pFemeninos.addEventListener("click", personajesFemeninos);
$tPoderes.addEventListener("click", totalPoderes);
$mostrarTodos.addEventListener("click", defaultValue);


let options = [$encontrarGohan, $mostrarTodos, $encontrarSaiyayines, $filtroAndroides, $buscarPersonaje, $menorPoder, $mayorPoder, $pVegueta, $pFemeninos, $tPoderes];

function mostrarPersonaje(personaje) {
  return `
      <div class="profile">
            <div class="character-profile">
                <div class="character-head">
                    <h1>${personaje.name}</h1>
                    <h1>${personaje.race}</h1>
                </div>

                <img src=${personaje.img} />
                <div class="character-stats">
                    <div class="character-stats-abilities">
                        <div class="character-stats">
                            <ul>
                                <li>Health: ${personaje.health}</li>
                                <li>Attack: ${personaje.attack}</li>
                                <li>Defense:  ${personaje.defense}</li>
                                <li>KI Restore Speed:  ${personaje.kiRestoreSpeed}</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>`;
}
function defaultValue() {
  renderizarPersonajes(personajes);
}
function renderizarPersonajes(array) {
  $container.innerHTML = "";
  array.forEach((item) => {
    $container.innerHTML += mostrarPersonaje(item);
  });
  pintarBg($mostrarTodos)
}

// FILTROS
function buscarGohan() {
  let encontrar = personajes.filter((item) => item.id == "gohan");
  renderizarPersonajes(encontrar);
  pintarBg($encontrarGohan)
}
function filtrarSaiyayin() {
  let filtrar = personajes.filter((item) => item.race == "Saiyan");
  renderizarPersonajes(filtrar);
  pintarBg($encontrarSaiyayines)

}
function filtrarAndroide() {
  let filtrar = personajes.filter((item) => item.race == "Android");
  renderizarPersonajes(filtrar);
  pintarBg($filtroAndroides)

}
function filtrarMenorPoder() {
  let menorPoder = Math.min(...personajes.map((item) => item.attack));

  alert(`El menor poder es: 
        ${menorPoder}`);
        pintarBg($menorPoder)
        renderizarPersonajes(personajes);

}
function filtrarMayorPoder() {
  let menorPoder = Math.max(...personajes.map((item) => item.attack));

  alert(`El menor poder es: 
        ${menorPoder}`);
        pintarBg($mayorPoder)

        renderizarPersonajes(personajes);

}
function posicionVegeta() {
  let encontrarPosicion = personajes.findIndex((item) => item.id == "vegeta");

  alert(`La posición de vegeta es: 
        ${encontrarPosicion + 1}`);
  pintarBg($pVegueta)
  renderizarPersonajes(personajes);


}
function personajesFemeninos() {
  let encontrarP = personajes.filter((item) => item.gender == "Female");
  renderizarPersonajes(encontrarP);
  pintarBg($pFemeninos)

}
function totalPoderes() {
  let total = personajes.reduce(
    (total, iterador) => (total += iterador.attack),
    0
  );
  
  alert(`El total de poderes es: 
        ${total}`);
  pintarBg($tPoderes)
  renderizarPersonajes(personajes);


}
$buscarPersonaje.addEventListener("input", () => {
  let entrada = $buscarPersonaje.value;
  let encontrarPersonaje = buscarPersonaje(personajes, entrada);
  console.log(encontrarPersonaje.length);

  if (encontrarPersonaje.length > 0) {
    $messageError.style.display = "none";
    renderizarPersonajes(encontrarPersonaje);
  } else {
    $container.innerHTML = "";
    $messageError.textContent = `No se encontró el personaje`;
    $messageError.style.display = "flex";
  pintarBg('')
    
  }
});

function buscarPersonaje(lista, termin) {
  console.log(termin);
  if (termin == "") {
    return personajes;
  }
  let translateMinus = termin.toLowerCase();
  return (resultado = lista.filter((item) =>
    item.name.toLowerCase().includes(translateMinus)
  ));
}

function pintarBg (termino){
  options.forEach((item)=>{
    if(item == termino){
         item.classList.add("bg-orange-500")
    }else{
        item.classList.remove("bg-orange-500")

    }
 });

}

renderizarPersonajes(personajes);
