import express from "express";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.static("public"));

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.get("/api/trivia", async(req, res) => {

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
          content:
          `
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

  } catch(error){

    console.log(error);

    res.status(500).json({
      error: "Error generando trivia"
    });

  }

});

app.listen(3000, () => {

  console.log("Servidor corriendo en puerto 3000");

});