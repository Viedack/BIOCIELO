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


  // ===============================
  // JAGUAR
  // ===============================

  if (tipo === "jaguar") {

    titulo.textContent = "🐆 Jaguar";

    texto.innerHTML = `
    <strong>Nombre Científico:</strong><br>
    Panthera onca<br><br>

    <strong>Categoría de Riesgo:</strong><br>
    En Peligro de Extinción (NOM-059-SEMARNAT-2010)<br><br>

    <strong>Estatus Internacional:</strong><br>
    Casi amenazado (IUCN) / Apéndice I (CITES)<br><br>

    <strong>Rol en el Ecosistema:</strong><br>
    Especie paraguas: protege todo el ecosistema de El Cielo.<br><br>

    <strong>Función Trófica:</strong><br>
    Carnívoro / Superpredador.<br><br>

    <strong>Parámetros de Identificación:</strong><br>
    Peso: 45 kg a 85 kg.<br>
    Longitud: 1.50 m a 2.10 m.<br>
    Rosetas negras únicas en cada individuo.<br><br>

    <strong>👣 Huella y Rastro:</strong><br>
    Largo: 9 cm a 13 cm.<br>
    Sin marcas de uñas.
    `;

  }


  // ===============================
  // ZORRO GRIS
  // ===============================

  if (tipo === "zorro") {

    titulo.textContent = "🦊 Zorro Gris";

    texto.innerHTML = `
    <strong>Nombre Científico:</strong><br>
    Urocyon cinereoargenteus<br><br>

    <strong>Estatus:</strong><br>
    Preocupación menor (IUCN)<br><br>

    <strong>Rol en el Ecosistema:</strong><br>
    Controla roedores e insectos.<br><br>

    <strong>Función Trófica:</strong><br>
    Omnívoro.<br><br>

    <strong>Identificación:</strong><br>
    Peso: 3 a 7 kg.<br>
    Cola larga con punta negra.<br>
    Pelaje gris con tonos rojizos.<br><br>

    <strong>👣 Huellas:</strong><br>
    4 dedos con uñas visibles.
    `;

  }


  // ===============================
  // TEPEZCUINTLE
  // ===============================

  if (tipo === "tepezcuintle") {

    titulo.textContent = "🐾 Tepezcuintle";

    texto.innerHTML = `
    <strong>Nombre Científico:</strong><br>
    Cuniculus paca<br><br>

    <strong>Estatus:</strong><br>
    Preocupación menor (IUCN)<br><br>

    <strong>Rol en el Ecosistema:</strong><br>
    Dispersor de semillas.<br><br>

    <strong>Función Trófica:</strong><br>
    Herbívoro / Frugívoro.<br><br>

    <strong>Identificación:</strong><br>
    Pelaje café con manchas blancas laterales.<br>
    Peso: 6 kg a 12 kg.<br><br>

    <strong>👣 Huellas:</strong><br>
    Huellas pequeñas y redondeadas.
    `;

  }


  // ===============================
  // CARACARA
  // ===============================

  if (tipo === "caracara") {

    titulo.textContent = "🦅 Caracara Crestado";

    texto.innerHTML = `
    <strong>Nombre Científico:</strong><br>
    Caracara plancus<br><br>

    <strong>Estatus:</strong><br>
    Preocupación menor (IUCN)<br><br>

    <strong>Rol en el Ecosistema:</strong><br>
    Ave carroñera y controladora de fauna pequeña.<br><br>

    <strong>Función Trófica:</strong><br>
    Carnívoro oportunista.<br><br>

    <strong>Identificación:</strong><br>
    Cara naranja y cresta negra.<br>
    Envergadura de hasta 1.2 metros.<br><br>

    <strong>👣 Rastros:</strong><br>
    Marcas de garras largas en suelo blando.
    `;

  }


  // ===============================
  // VENADO
  // ===============================

  if (tipo === "venado") {

    titulo.textContent = "🦌 Venado Cola Blanca";

    texto.innerHTML = `
    <strong>Nombre Científico:</strong><br>
    Odocoileus virginianus<br><br>

    <strong>Estatus:</strong><br>
    Preocupación menor (IUCN)<br><br>

    <strong>Rol en el Ecosistema:</strong><br>
    Dispersor de semillas y presa clave.<br><br>

    <strong>Función Trófica:</strong><br>
    Herbívoro.<br><br>

    <strong>Identificación:</strong><br>
    Cola blanca visible al correr.<br>
    Peso: 35 kg a 70 kg.<br><br>

    <strong>👣 Huellas:</strong><br>
    Huella partida en forma de corazón.
    `;

  }


  // ===============================
  // COATI
  // ===============================

  if (tipo === "coati") {

    titulo.textContent = "🐾 Coatí";

    texto.innerHTML = `
    <strong>Nombre Científico:</strong><br>
    Nasua narica<br><br>

    <strong>Estatus:</strong><br>
    Preocupación menor (IUCN)<br><br>

    <strong>Rol en el Ecosistema:</strong><br>
    Dispersor de semillas y controlador de insectos.<br><br>

    <strong>Función Trófica:</strong><br>
    Omnívoro.<br><br>

    <strong>Identificación:</strong><br>
    Cola anillada y hocico largo.<br>
    Peso: 3 kg a 6 kg.<br><br>

    <strong>👣 Huellas:</strong><br>
    Cinco dedos visibles con uñas marcadas.
    `;

  }

  modal.style.display = "flex";


  // ===============================
// HOCOFAISÁN
// ===============================

if (tipo === "hocofaisan") {

  titulo.textContent = "🦃 Hocofaisán";

  texto.innerHTML = `
  <strong>Nombre Científico:</strong><br>
  Crax rubra<br><br>

  <strong>Estatus:</strong><br>
  Vulnerable en algunas regiones.<br><br>

  <strong>Rol en el Ecosistema:</strong><br>
  Dispersor de semillas y regenerador del bosque.<br><br>

  <strong>Función Trófica:</strong><br>
  Omnívoro.<br><br>

  <strong>Identificación:</strong><br>
  Ave grande de plumaje oscuro, copete rizado y protuberancia en el pico.
  `;

}


// ===============================
// MARIPOSA MONARCA
// ===============================

if (tipo === "monarca") {

  titulo.textContent = "🦋 Mariposa Monarca";

  texto.innerHTML = `
  <strong>Nombre Científico:</strong><br>
  Danaus plexippus<br><br>

  <strong>Estatus:</strong><br>
  Especie protegida y migratoria.<br><br>

  <strong>Rol en el Ecosistema:</strong><br>
  Importante polinizadora de flores silvestres.<br><br>

  <strong>Función Trófica:</strong><br>
  Herbívora.<br><br>

  <strong>Identificación:</strong><br>
  Alas anaranjadas con patrones negros y puntos blancos.
  `;

}
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
  const siguienteBtn = document.getElementById("siguienteBtn");

  pregunta.textContent = "🌿 Generando pregunta...";
  opciones.innerHTML = "";
  resultado.textContent = "";

  if (siguienteBtn) {
    siguienteBtn.style.display = "none";
  }

  try {

    const respuesta = await fetch("https://biocielo.onrender.com/api/trivia");

    if (!respuesta.ok) {
      throw new Error("Error del servidor");
    }

    const trivia = await respuesta.json();

    pregunta.textContent = trivia.pregunta;

    trivia.opciones.forEach(opcion => {

      const boton = document.createElement("button");
      boton.textContent = opcion;
      boton.classList.add("opcionTrivia");

      boton.onclick = () => {

        const botones = document.querySelectorAll(".opcionTrivia");

        botones.forEach(b => {
          b.disabled = true;
        });

        if (opcion === trivia.correcta) {

          boton.classList.add("correcta");
          resultado.textContent = "✅ ¡Correcto!";

        } else {

          boton.classList.add("incorrecta");

          botones.forEach(b => {
            if (b.textContent === trivia.correcta) {
              b.classList.add("correcta");
            }
          });

          resultado.textContent =
          "❌ Incorrecto. Respuesta correcta: " + trivia.correcta;

        }

        if (siguienteBtn) {
          siguienteBtn.style.display = "block";
        }

      };

      opciones.appendChild(boton);

    });

  } catch (error) {

    console.error(error);
    pregunta.textContent = "❌ Error al cargar trivia.";

  }

}