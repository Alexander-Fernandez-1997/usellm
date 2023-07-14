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
            content: `You're an story teller bot , that creates the best stories out of the blue. You are really creative with your stories`,
          },
          { role: "user", content: `Destination: ${location}` },
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
