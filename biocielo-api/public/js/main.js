// ===============================
// MENSAJE PRINCIPAL
// ===============================

function mostrarMensaje() {

  const mensaje = document.getElementById("mensaje");

  mensaje.textContent =
  "🌿 ¡Gracias por ser parte de BIOCIELO! La ciencia y la tecnología también protegen la vida silvestre.";

}


// ===============================
// MODAL INFORMATIVO
// ===============================

function mostrarPostit(tipo) {

  const modal = document.getElementById("modalInfo");

  const titulo = document.getElementById("modalTitulo");

  const texto = document.getElementById("modalTexto");


  // ===============================
  // BIODIVERSIDAD
  // ===============================

  if (tipo === "biodiversidad") {

    titulo.textContent = "🌿 Biodiversidad";

    texto.innerHTML = `
    <strong>¿Qué es la Biodiversidad?</strong><br><br>

    Es el gran equipo de la naturaleza. Está formado por todas las plantas,
    los animales, los insectos y los hongos que viven en un mismo lugar.<br><br>

    <strong>¿Por qué es importante?</strong><br><br>

    Porque cada ser vivo tiene un trabajo especial. Los árboles limpian el aire,
    las abejas polinizan las flores y los felinos cuidan el equilibrio de la selva.<br><br>

    <strong>¡Tu misión hoy!</strong><br><br>

    Explora las fotos de nuestras cámaras trampa, descubre qué animales están
    activos hoy en El Cielo y conviértete en un Guardián de la Naturaleza.<br><br>

    ¡Cada clic te acerca más a descubrir los secretos del bosque!
    `;

  }


  // ===============================
  // FOTO TRAMPEO
  // ===============================

  if (tipo === "foto") {

    titulo.textContent = "📸 Foto trampeo";

    texto.innerHTML = `
    <strong>¿Qué es el Fototrampeo?</strong><br><br>

    ¡Es como jugar a las escondidas con los animales! El fototrampeo consiste
    en usar cámaras especiales y ocultas en los árboles que toman fotos y videos
    por sí solas.<br><br>

    ⚙️ <strong>¿Cómo funciona?</strong><br><br>

    <strong>El Escondite Perfecto:</strong><br>
    Ponemos la cámara en caminos donde pasan los animales.<br><br>

    <strong>Sensor Inteligente:</strong><br>
    Detecta movimiento y calor automáticamente.<br><br>

    <strong>¡Foto automática!:</strong><br>
    Cuando un animal pasa, la cámara captura imágenes sin molestarlo.<br><br>

    💡 <strong>¿Por qué es importante?</strong><br><br>

    Porque podemos estudiar animales sin alterar su comportamiento natural.<br><br>

    <strong>VIDEO:</strong><br>

    <a href="https://youtube.com/shorts/N_Ct645Oyng?si=3HtOl2hjtmSmImQN"
    target="_blank">

    Ver video

    </a>
    `;

  }


  // ===============================
  // CIENCIA CIUDADANA
  // ===============================

  if (tipo === "ciencia") {

    titulo.textContent = "🛰️ Ciencia ciudadana";

    texto.innerHTML = `
    <strong>¡La ciencia no solo es para laboratorios!</strong><br><br>

    La Ciencia Ciudadana ocurre cuando personas comunes ayudan
    a los científicos a investigar y proteger la naturaleza.<br><br>

    Tú también puedes convertirte en un explorador ambiental
    ayudando a registrar especies y observaciones.<br><br>

    <strong>¿Cómo participar?</strong><br><br>

    ✔️ Observando animales<br>
    ✔️ Registrando especies<br>
    ✔️ Compartiendo descubrimientos<br>
    ✔️ Aprendiendo sobre biodiversidad<br><br>

    <strong>VIDEO:</strong><br>

    <a href="https://youtu.be/dY1nlhJvTSw?si=ANFD4TH_f2BDORX8"
    target="_blank">

    Ver video

    </a>
    `;

  }

  modal.style.display = "flex";

}


// ===============================
// CERRAR MODAL
// ===============================

function cerrarModal(event) {

  if (event) {

    event.stopPropagation();

  }

  const modal = document.getElementById("modalInfo");

  modal.style.display = "none";

}


// ===============================
// TRIVIA CON OPENAI
// ===============================

async function cargarTrivia() {

  const pregunta = document.getElementById("pregunta");

  const opciones = document.getElementById("opciones");

  const resultado = document.getElementById("resultado");

  pregunta.textContent = "Generando pregunta...";

  opciones.innerHTML = "";

  resultado.textContent = "";

  try {

    const respuesta = await fetch("/api/trivia");

    if (!respuesta.ok) {

      throw new Error("Error del servidor");

    }

    const data = await respuesta.json();

    pregunta.textContent = data.pregunta;

    data.opciones.forEach(opcion => {

      const boton = document.createElement("button");

      boton.textContent = opcion;

      boton.classList.add("opcionTrivia");

      boton.onclick = () => verificarRespuesta(opcion, data.correcta);

      opciones.appendChild(boton);

    });

  } catch (error) {

    console.error(error);

    pregunta.textContent =
    "❌ Error al cargar trivia. Revisa la terminal.";

  }

}


// ===============================
// VERIFICAR RESPUESTA
// ===============================

function verificarRespuesta(opcion, correcta) {

  const resultado = document.getElementById("resultado");

  if (opcion === correcta) {

    resultado.textContent =
    "✅ ¡Muy bien hecho!";

  } else {

    resultado.textContent =
    "❌ Incorrecto. Respuesta correcta: " + correcta;

  }

}