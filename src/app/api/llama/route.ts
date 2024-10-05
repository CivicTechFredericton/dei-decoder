import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { input } = await req.json();
    const prompt =
      "You are tasked with reviewing a job posting for potential biases based on protected classes under Canadian law. Analyze the document and identify any language or requirements that may exclude or disadvantage individuals from the following protected classes: Citizenship,Race,Place of origin,Ethnic origin,Colour,Ancestry,Disability,Age,Creed (Religion),Sex/Pregnancy,Family status,Marital status,Sexual orientation,Gender identity,Gender expression,Receipt of public assistance,Record of offences (criminal charges),For each instance of potential bias, provide a clear explanation of why the language or requirement may be problematic, and suggest how to revise the job posting to make it more inclusive and compliant with Canadian anti-discrimination laws.,Ensure that your suggestions promote diversity, equity, and inclusion, and consider any implicit bias or unintentional exclusionary language that might exist.    ";
    // Call Ollama API running on localhost
    const ollamaResponse = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama3.1",
        prompt: prompt + input,
        temprature: 0.1,
        stream: false,
      }),
    });

    // if (!ollamaResponse.ok) {
    //   throw new Error('Failed to get response from Ollama');
    // }

    const data = await ollamaResponse.json();

    console.log(data.response);

    return NextResponse.json({ response: data.response });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
}
