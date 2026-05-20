import express from "express";
import OpenAI from "openai";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carpeta pública
app.use(express.static(path.join(__dirname, "public")));

// Prueba directa del PDF
app.get("/test-pdf", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "pdf", "pintar.pdf"));
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.get("/api/trivia", async (req, res) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "Genera una pregunta tipo trivia sobre biodiversidad, foto trampeo o ciencia ciudadana. Responde SOLO en JSON."
        },
        {
          role: "user",
          content: `
          Formato:

          {
            "pregunta":"",
            "opciones":["","","",""],
            "correcta":""
          }
          `
        }
      ]
    });

    const texto = completion.choices[0].message.content;
    const trivia = JSON.parse(texto);

    res.json(trivia);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: "Error generando trivia"
    });
  }
});

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});