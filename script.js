const materias = [
  { id: "IntroMate", nombre: "Introducción a la Matemática", correlativas: [], semestre: "Cursillo" },
  { id: "IEUyE", nombre: "Introducción a los Estudios Universitarios y a Economía", correlativas: [], semestre: "Cursillo" },
  { id: "IntroConta", nombre: "Introducción a la Contabilidad", correlativas: [], semestre: "Cursillo" },
  
  { id: "Mate1", nombre: "Matemática I", correlativas: ["IntroMate"], semestre: "1° Año - 1er Semestre" },
  { id: "PyEE", nombre: "Principios y Estructura de la Economía", correlativas: ["IntroMate", "IEUyE"], semestre: "1° Año - 1er Semestre" },
  { id: "IntroAdm", nombre: "Introducción a la Administración", correlativas: ["IntroConta"], semestre: "1° Año - 1er Semestre" },
  
  { id: "Mate2", nombre: "Matemática II", correlativas: ["Mate1"], semestre: "1° Año - 2do Semestre" },
  { id: "Micro1", nombre: "Microeconomía I", correlativas: ["PyEE"], semestre: "1° Año - 2do Semestre" },
  { id: "Socs", nombre: "Introducción a las Ciencias Sociales", correlativas: ["IEUyE"], semestre: "1° Año - 2do Semestre" },
  { id: "Conta1", nombre: "Contabilidad I", correlativas: ["IntroConta"], semestre: "1° Año - 2do Semestre" },
  
  { id: "Est1", nombre: "Estadística I", correlativas: ["Mate2"], semestre: "2° Año - 1er Semestre" },
  { id: "Macro1", nombre: "Macroeconomía I", correlativas: ["Micro1"], semestre: "2° Año - 1er Semestre" },
  { id: "DCyA", nombre: "Derecho Constitucional y Administrativo", correlativas: ["Socs"], semestre: "2° Año - 1er Semestre" },
  { id: "PrincAdm", nombre: "Principios de la Administración", correlativas: ["IntroAdm"], semestre: "2° Año - 1er Semestre" },
  
  { id: "Est2", nombre: "Estadística II", correlativas: ["Est1"], semestre: "2° Año - 2do Semestre" },
  { id: "HistEcoSoc", nombre: "Historia Económica y Social", correlativas: ["Macro1"], semestre: "2° Año - 2do Semestre" },
  { id: "DerPriv1", nombre: "Derecho Privado I", correlativas: ["DCyA"], semestre: "2° Año - 2do Semestre" },
  { id: "Conta2", nombre: "Contabilidad II", correlativas: ["Conta1"], semestre: "2° Año - 2do Semestre" },
  
  { id: "MateFinan", nombre: "Matemática Financiera", correlativas: ["Est1"], semestre: "3° Año - 1er Semestre" },
  { id: "FinanPub", nombre: "Finanzas Públicas", correlativas: ["Macro1"], semestre: "3° Año - 1er Semestre" },
  { id: "DerPriv2", nombre: "Derecho Privado II", correlativas: ["DerPriv1"], semestre: "3° Año - 1er Semestre" },
  { id: "Conta3", nombre: "Contabilidad III", correlativas: ["Conta2"], semestre: "3° Año - 1er Semestre" },
  
  { id: "MetCuant", nombre: "Método Cuantitativo", correlativas: ["Est2"], semestre: "3° Año - 2do Semestre" },
  { id: "PolEcoArg", nombre: "Política Económica Argentina", correlativas: ["FinanPub"], semestre: "3° Año - 2do Semestre" },
  { id: "Gub", nombre: "Gubernamental", correlativas: ["FinanPub"], semestre: "3° Año - 2do Semestre" },
  { id: "Tic1", nombre: "Tecnología de Información I", correlativas: ["Conta1", "PrincAdm"], semestre: "3° Año - 2do Semestre" },
  
  { id: "Fisc1", nombre: "Fiscal I", correlativas: ["FinanPub"], semestre: "4° Año - 1er Semestre" },
  { id: "CosyGest1", nombre: "Costos y Gestión I", correlativas: ["Conta2"], semestre: "4° Año - 1er Semestre" },
  { id: "Elec1", nombre: "Electiva I", correlativas: [], semestre: "4° Año - 1er Semestre" },
  
  { id: "DerLab", nombre: "Derecho Laboral", correlativas: ["DerPriv2"], semestre: "4° Año - 2do Semestre" },
  { id: "CosyGest2", nombre: "Costos y Gestión II", correlativas: ["CosyGest1"], semestre: "4° Año - 2do Semestre" },
  { id: "Audit", nombre: "Auditoría", correlativas: ["Conta3"], semestre: "4° Año - 2do Semestre" },
  { id: "Conta4", nombre: "Contabilidad IV", correlativas: ["Conta3"], semestre: "4° Año - 2do Semestre" },
  
  { id: "AdmFinan", nombre: "Administración Financiera", correlativas: ["MateFinan", "CosyGest2"], semestre: "5° Año - 1er Semestre" },
  { id: "Fisc2", nombre: "Fiscal II", correlativas: ["Fisc1"], semestre: "5° Año - 1er Semestre" },
  { id: "Socie", nombre: "Sociedades", correlativas: ["Fisc1"], semestre: "5° Año - 1er Semestre" },
  { id: "AnEstCont", nombre: "Análisis de Estados Contables", correlativas: ["Audit"], semestre: "5° Año - 1er Semestre" },
  
  { id: "Fisc3", nombre: "Fiscal III", correlativas: ["Fisc2"], semestre: "5° Año - 2do Semestre" },
  { id: "Semi", nombre: "Seminario", correlativas: ["AdmFinan", "Fisc2", "Socie", "CosyGest2", "AnEstCont"], semestre: "5° Año - 2do Semestre" },
  { id: "DerConcyCamb", nombre: "Derecho Concursal y Cambiario", correlativas: ["Socie"], semestre: "5° Año - 2do Semestre" },
  { id: "Elec2", nombre: "Electiva II", correlativas: [], semestre: "5° Año - 2do Semestre" },
  
  { id: "ModInfo", nombre: "Módulo de Informática", correlativas: [], semestre: "Módulos" },
  { id: "ModIng", nombre: "Módulo de Inglés", correlativas: [], semestre: "Módulos", requiere21: true },
  { id: "ModPort", nombre: "Módulo de Portugués", correlativas: [], semestre: "Módulos", requiere21: true },
];

const estadosValidos = ["Aprobada", "Final pendiente"];
const contenedor = document.getElementById("contenedor");

function renderMaterias() {
  contenedor.innerHTML = "";
  const semestres = [...new Set(materias.map(m => m.semestre))];

  semestres.forEach(sem => {
    const div = document.createElement("div");
    div.className = "semestre";
    div.innerHTML = `<h2>${sem}</h2>`;
    const fila = document.createElement("div");
    fila.className = "fila";

    materias.filter(m => m.semestre === sem).forEach(m => {
      const estadoGuardado = localStorage.getItem(m.id + "-estado") || "No cursada";
      const año = localStorage.getItem(m.id + "-año") || "";
      const nota = localStorage.getItem(m.id + "-nota") || "";
      const obs = localStorage.getItem(m.id + "-obs") || "";

      let estadoFinal = estadoGuardado;

      if (m.requiere21) {
        const materiasAprobadas = materias.filter(mat =>
          localStorage.getItem(mat.id + "-estado") === "Aprobada"
        ).length;

        if (materiasAprobadas < 21 && estadoGuardado === "No cursada") {
          estadoFinal = "Bloqueada";
        }
      } else if (m.correlativas.length > 0) {
        const correlativasCumplidas = m.correlativas.every(corId => {
          const estado = localStorage.getItem(corId + "-estado") || "No cursada";
          return estadosValidos.includes(estado);
        });
        if (!correlativasCumplidas && estadoGuardado === "No cursada") {
          estadoFinal = "Bloqueada";
        }
      }

      const matDiv = document.createElement("div");
      matDiv.className = "materia";
      matDiv.dataset.estado = estadoFinal;
      matDiv.dataset.id = m.id;
      matDiv.innerHTML = `
        <h3>${m.nombre}</h3>
        <small>Correlativas: ${
          m.correlativas.length
            ? m.correlativas.map(id => materias.find(x => x.id === id)?.nombre || id).join(", ")
            : "-"
        }</small>
        <div class="detalle">
          <input type="text" placeholder="Año de cursado" value="${año}" data-campo="año" />
          <input type="text" placeholder="Nota final" value="${nota}" data-campo="nota" />
          <input type="text" placeholder="Observaciones" value="${obs}" data-campo="obs" />
        </div>
      `;

      matDiv.addEventListener("click", (e) => {
        if (e.target.tagName === "INPUT" || matDiv.dataset.estado === "Bloqueada") return;
        const estados = ["No cursada", "Cursando", "Final pendiente", "Aprobada"];
        const actual = estados.indexOf(matDiv.dataset.estado);
        const siguiente = (actual + 1) % estados.length;
        localStorage.setItem(m.id + "-estado", estados[siguiente]);
        renderMaterias(); // Re-renderiza todo
      });

      matDiv.querySelectorAll("input").forEach(input => {
        input.addEventListener("input", (e) => {
          const campo = e.target.dataset.campo;
          localStorage.setItem(m.id + "-" + campo, e.target.value);
        });
      });

      fila.appendChild(matDiv);
    });

    div.appendChild(fila);
    contenedor.appendChild(div);
  });
}

renderMaterias();