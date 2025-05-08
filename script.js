
const mallaInformatica = [
  { nombre: "Proyecto Cornerstone", semestre: 1, prerrequisitos: [] },
  { nombre: "Pensamiento Computacional", semestre: 1, prerrequisitos: [] },
  { nombre: "Introducción a la administración de proyectos", semestre: 1, prerrequisitos: [] },
  { nombre: "Álgebra", semestre: 1, prerrequisitos: [] },
  { nombre: "Química Aplicada a la Ingeniería", semestre: 1, prerrequisitos: [] },
  { nombre: "Creatividad e Innovación", semestre: 2, prerrequisitos: [] },
  { nombre: "Programación Aplicada en Análisis de Datos", semestre: 2, prerrequisitos: [] },
  { nombre: "Estadística", semestre: 2, prerrequisitos: [] },
  { nombre: "Cálculo", semestre: 2, prerrequisitos: [] },
  { nombre: "Física", semestre: 2, prerrequisitos: [] },
  { nombre: "Electivo 1", semestre: 2, prerrequisitos: [] },
  { nombre: "Modelos de Negocios", semestre: 3, prerrequisitos: [] },
  { nombre: "Aplicaciones Computacionales en Ingeniería", semestre: 3, prerrequisitos: [] },
  { nombre: "Inferencia", semestre: 3, prerrequisitos: ["Estadística"] },
  { nombre: "Cálculo Integral", semestre: 3, prerrequisitos: ["Cálculo"] },
  { nombre: "Álgebra Lineal", semestre: 3, prerrequisitos: ["Álgebra"] },
  { nombre: "Electivo 2", semestre: 3, prerrequisitos: [] },
  { nombre: "Proyecto de Innovación Tecnológico", semestre: 4, prerrequisitos: [] },
  { nombre: "Programación Aplicada en Microcontroladores", semestre: 4, prerrequisitos: [] },
  { nombre: "Cálculo Multivariable", semestre: 4, prerrequisitos: ["Cálculo Integral"] },
  { nombre: "Ecuaciones Diferenciales", semestre: 4, prerrequisitos: ["Álgebra Lineal"] },
  { nombre: "Mecánica", semestre: 4, prerrequisitos: ["Física"] },
  { nombre: "Electivo 3", semestre: 4, prerrequisitos: [] },
  { nombre: "Arquitectura de Computadores", semestre: 5, prerrequisitos: [] },
  { nombre: "Ingeniería de Software", semestre: 5, prerrequisitos: [] },
  { nombre: "Estructura de Datos", semestre: 5, prerrequisitos: ["Pensamiento Computacional"] },
  { nombre: "Análisis Numérico", semestre: 5, prerrequisitos: ["Ecuaciones Diferenciales"] },
  { nombre: "Microeconomía", semestre: 5, prerrequisitos: [] },
  { nombre: "Estadística Multivariada", semestre: 5, prerrequisitos: ["Inferencia"] },
  { nombre: "Base de Datos I", semestre: 6, prerrequisitos: ["Pensamiento Computacional"] },
  { nombre: "Sistemas Operativos", semestre: 6, prerrequisitos: ["Arquitectura de Computadores"] },
  { nombre: "Arquitectura de Desarrollo (Móvil y Web)", semestre: 6, prerrequisitos: ["Estructura de Datos"] },
  { nombre: "Lenguajes de Programación", semestre: 6, prerrequisitos: ["Estructura de Datos"] },
  { nombre: "Interacción Humano Computador", semestre: 6, prerrequisitos: ["Ingeniería de Software"] },
  { nombre: "Electivo 4", semestre: 6, prerrequisitos: [] },
  { nombre: "Base de Datos II", semestre: 7, prerrequisitos: ["Base de Datos I"] },
  { nombre: "Seguridad de la Información", semestre: 7, prerrequisitos: ["Sistemas Operativos"] },
  { nombre: "Calidad de Software", semestre: 7, prerrequisitos: ["Ingeniería de Software"] },
  { nombre: "Inteligencia Artificial", semestre: 7, prerrequisitos: ["Estadística Multivariada"] },
  { nombre: "Redes de Computadores", semestre: 7, prerrequisitos: ["Sistemas Operativos"] },
  { nombre: "Práctica Inicial", semestre: 7, prerrequisitos: ["Lenguajes de Programación", "Interacción Humano Computador"] },
  { nombre: "Certificación 1", semestre: 7, prerrequisitos: [] },
  { nombre: "Proyecto Capstone Intermedio", semestre: 8, prerrequisitos: ["Proyecto de Innovación Tecnológico"] },
  { nombre: "Ingeniería Financiera", semestre: 8, prerrequisitos: [] },
  { nombre: "Computación Paralela y Distribuida", semestre: 8, prerrequisitos: ["Sistemas Operativos"] },
  { nombre: "Machine Learning", semestre: 8, prerrequisitos: ["Inteligencia Artificial"] },
  { nombre: "Certificación 2", semestre: 8, prerrequisitos: [] },
  { nombre: "Deep Learning", semestre: 9, prerrequisitos: ["Machine Learning"] },
  { nombre: "Inteligencia de Negocios", semestre: 9, prerrequisitos: [] },
  { nombre: "Evaluación Económica y Financiera de Proyectos", semestre: 9, prerrequisitos: ["Ingeniería Financiera"] },
  { nombre: "Desarrollo Seguro de Software", semestre: 9, prerrequisitos: ["Seguridad de la Información"] },
  { nombre: "Práctica Profesional", semestre: 9, prerrequisitos: ["Práctica Inicial"] },
  { nombre: "Certificación 3", semestre: 9, prerrequisitos: [] },
  { nombre: "Proyecto de Ingeniería", semestre: 10, prerrequisitos: ["Evaluación Económica y Financiera de Proyectos"] },
  { nombre: "Planificación Estratégica", semestre: 10, prerrequisitos: ["Evaluación Económica y Financiera de Proyectos"] },
  { nombre: "Gestión de Proyectos de TI", semestre: 10, prerrequisitos: ["Evaluación Económica y Financiera de Proyectos"] },
  { nombre: "Legislación y Normatividad Informática", semestre: 10, prerrequisitos: [] },
  { nombre: "Gestión de Riesgos de Seguridad de la Información", semestre: 10, prerrequisitos: ["Seguridad de la Información"] },
  { nombre: "Innovación y Transferencia Tecnológica", semestre: 10, prerrequisitos: [] },
  { nombre: "Proyecto de Título", semestre: 11, prerrequisitos: ["Proyecto de Ingeniería"] },
];

const mallaIndustrial = [
  { nombre: "Química aplicada a la ingeniería", semestre: 1, prerrequisitos: [] },
  { nombre: "Álgebra", semestre: 1, prerrequisitos: [] },
  { nombre: "Cálculo", semestre: 2, prerrequisitos: ["Álgebra"] },
  { nombre: "Gestión del talento humano", semestre: 4, prerrequisitos: [] },
  { nombre: "Investigación de operaciones", semestre: 5, prerrequisitos: ["Cálculo"] }
];

function mostrarMalla() {
  const carrera = document.getElementById("carrera").value;
  const contenedor = document.getElementById("malla-container");
  const titulo = document.getElementById("titulo-carrera");
  contenedor.innerHTML = "";

  let asignaturas = [];

  if (carrera === "informatica") {
    titulo.textContent = "Ingeniería Civil en Computación e Informática";
    titulo.style.display = "block";
    asignaturas = mallaInformatica;
  } else if (carrera === "industrial") {
    titulo.textContent = "Ingeniería Civil Industrial";
    titulo.style.display = "block";
    asignaturas = mallaIndustrial;
  } else {
    titulo.textContent = "";
    titulo.style.display = "none";
    return;
  }
  

  
  for (let i = 1; i <= 11; i++) {
    
    const columna = document.createElement("div");
    columna.className = "columna-semestre";
    columna.style.gridColumn = i;
  
    
    const titulo = document.createElement("div");
    titulo.className = "semestre-titulo";
    titulo.textContent = `Semestre ${i}`;
    columna.appendChild(titulo);
  
    
    asignaturas
      .filter(r => r.semestre === i)
      .forEach(asignatura => {
        const div = document.createElement("div");
        div.className = `tarjeta`;
        div.textContent = asignatura.nombre;
        div.onclick = () => mostrarPrerrequisitos(asignatura, div);
        columna.appendChild(div);
      });
  
    
    contenedor.appendChild(columna);
  }
}
function mostrarPrerrequisitos(asignatura, elemento) {
  
  document.querySelectorAll(".tarjeta").forEach(el => {
    el.classList.remove("verde", "rojo");
  });

  
  elemento.classList.add("verde");

  
  const prerreqs = asignatura.prerrequisitos || [];
  prerreqs.forEach(nombre => {
    document.querySelectorAll(".tarjeta").forEach(el => {
      if (el.textContent.trim() === nombre) {
        el.classList.add("rojo");
      }
    });
  });

}
