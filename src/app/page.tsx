"use client";
import useLLM from "usellm";
import { useState } from "react";
import { Book } from "./components/Book";

export default function Home() {
  const llm = useLLM({ serviceUrl: "https://usellm.org/api/llm" });
  const [location, setLocation] = useState("");
  const [result, setResult] = useState("");

  async function handleClick() {
    try {
      await llm.chat({
        messages: [
          {
            role: "system",
            content: `Eres un bot narrador de historias, que crea las mejores historias de la nada. Eres realmente creativo con tus historias.`,
          },
          { role: "user", content: `Destino: ${location}` },
        ],
        stream: true,
        onStream: ({ message }) => setResult(message.content),
      });
    } catch (error) {
      console.error("Something went wrong!", error);
    }
  }
  return (
    <Book
      location={location}
      setLocation={setLocation}
      handleClick={handleClick}
      result={result}
    ></Book>
  );
}
