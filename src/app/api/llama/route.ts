import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  try {
    const { input } = await req.json();
    const json_format = '{"flagged_words": ["word1", "word2"],"explanations": {"word1": "Explanation for why word1 is problematic","word2": "Explanation for why word2 is problematic"},"suggestions": {"word1": "New suggested word without description","word2": "New suggested word without description"},"revisedjobposting":"New fully revised job posting with good language and should have format of job posting(new lines) and atleast length'+input.length+'"}';
    const prompt =
      'You are tasked with reviewing a job posting for potential biases based on protected classes under Canadian law. Analyze the document and identify any flagged words or phrases that may disadvantage individuals from the following protected classes: Citizenship, Race, Place of origin, Ethnic origin, Colour, Ancestry, Disability, Age, Creed (Religion), Sex/Pregnancy, Family status, Marital status, Sexual orientation, Gender identity, Gender expression, Receipt of public assistance, and Record of offences (criminal charges). For each instance of potential bias, provide a JSON response strictly in the format below. Ensure no text, characters, or formatting marks are included before or after the JSON output. The output should be valid JSON that follows this format precisely mandatorily:' + json_format + 'Ensure that your response is completely and strictly in the above JSON format (no text or characters before and after JSON). Promote diversity, equity, and inclusion, and consider any implicit biases or unintentional exclusionary language that might exist.';
    // Call Ollama API running on localhost
    const ollamaResponse = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama3.1",
        // model: "gemma2",
        prompt: prompt + input,
        temperature: 1,
        stream: false,
        maxtokens: 1024,
        response_format: {
          type: "json_object"
        },
      }),
    });

    let parsedResponse;
    const ollamaData = await ollamaResponse.json();
    const cleanedResponse = ollamaData.response
      .replace(/[\b\f\r\t]/g, '') // Remove bad control characters
      .replace(/\\"/g, '"')
      .replace(/^```|```$/g, '');


    console.log(cleanedResponse)
    try {
      parsedResponse = JSON.parse(cleanedResponse)
    } catch (error) {
      console.error("Failed to parse JSON response:", error);
      return NextResponse.json({ error: "Invalid JSON response from model" }, { status: 500 });
    }
    return NextResponse.json(parsedResponse);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
}
