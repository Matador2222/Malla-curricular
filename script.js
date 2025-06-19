
const API_BASE_URL = window.location.hostname.includes("github.io")
  ? "back-end-malla-universidad-production.up.railway.app"
  : "http://localhost:3000/api";
  
fetch(`${API_BASE_URL}/malla/1`)
  .then(res => {
    if (!res.ok) throw new Error("Error al conectar con el backend");
    return res.json();
  })
  .then(data => {
    mostrarMalla(data);
  })
  .catch(err => {
    console.error("Error al cargar la malla:", err);
    document.getElementById("contenedor").innerHTML = `<p style="color:red;"> No se pudo cargar la malla. Intenta más tarde.</p>`;
  });

fetch(`${API_BASE_URL}/carreras`)
  .then(res => res.json())
  .then(carreras => {
    const select = document.getElementById("carrera");

    // Opción por defecto
    const opcionInicial = document.createElement("option");
    opcionInicial.disabled = true;
    opcionInicial.selected = true;
    opcionInicial.hidden = true;
    opcionInicial.textContent = "Selecciona una carrera";
    select.appendChild(opcionInicial);

    // Agregar opciones desde la base
    carreras.forEach(c => {
      const option = document.createElement("option");
      option.value = c.id_carrera;
      option.textContent = c.nombre;
      select.appendChild(option);
    });
  })
  .catch(err => {
    console.error("Error al cargar carreras:", err);
  });


function mostrarMalla() 
{
  const carrera = document.getElementById("carrera").value;
  const contenedor = document.getElementById("malla-container");
  const titulo = document.getElementById("titulo-carrera");
  contenedor.innerHTML = "";

const icono = document.getElementById("info-icono");
const tooltip = document.getElementById("tooltip-info");

if (icono && tooltip) {
  icono.onclick = () => {
  const estaVisible = tooltip.style.display === "block";

  
  tooltip.style.display = estaVisible ? "none" : "block";

  
  if (!estaVisible) {
    const detalle = document.getElementById("detalle-asignatura");
    if (detalle && detalle.style.display === "block") {
      detalle.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
};

}

  if (!carrera) {
  titulo.textContent = "";
  titulo.style.display = "none";
  contenedor.innerHTML = "";

  const detalle = document.getElementById("detalle-asignatura");
  detalle.style.display = "none";
  detalle.innerHTML = "";
  return;
}

fetch(`${API_BASE_URL}/malla/${carrera}`)
  .then(res => res.json())
  .then(asignaturas => {
    console.log("Asignaturas recibidas:", asignaturas);
    titulo.textContent = document.getElementById("carrera").selectedOptions[0].text;
    titulo.style.display = "block";

    for (let i = 1; i <= 11; i++) {
      const columna = document.createElement("div");
      columna.className = "columna-semestre";
      columna.style.gridColumn = i;

      const tituloSem = document.createElement("div");
      tituloSem.className = "semestre-titulo";
      tituloSem.textContent = `Semestre ${i}`;
      columna.appendChild(tituloSem);

      asignaturas
        .filter(r => r.semestre === i)
        .forEach(asignatura => {
          const div = document.createElement("div");
          div.className = "tarjeta";
          div.textContent = asignatura.nombre;
          div.onclick = () => mostrarPrerrequisitos(asignatura, div, asignaturas);
          columna.appendChild(div);
        });

      contenedor.appendChild(columna);
    }

    const detalle = document.getElementById("detalle-asignatura");
    detalle.style.display = "none";
    detalle.innerHTML = "";
  })
  .catch(err => {
    console.error("Error al cargar malla:", err);
    contenedor.innerHTML = `<p style="color:red;">Error al cargar la malla.</p>`;
  });

  
  

}

function mostrarPrerrequisitos(asignatura, elemento, todasLasAsignaturas) {
  
  document.querySelectorAll(".tarjeta").forEach(el => {
    el.classList.remove("verde", "rojo");
  });

  
  elemento.classList.add("verde");

  
  const prerreqs = asignatura.prerrequisitos || [];
  prerreqs.forEach(idPrerrequisito => {
    const nombrePrerrequisito = todasLasAsignaturas.find(r => r.id_ramo === idPrerrequisito)?.nombre;
    if (nombrePrerrequisito) {
      document.querySelectorAll(".tarjeta").forEach(el => {
        if (el.textContent.trim() === nombrePrerrequisito) {
          el.classList.add("rojo");
        }
      });
    }
  });

  
  const detalle = document.getElementById("detalle-asignatura");
  detalle.style.display = "block";
  detalle.innerHTML = `
    <h3>${asignatura.nombre}</h3>
    <p>${asignatura.descripcion || "Descripción no disponible."}</p>
  `;

  detalle.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

