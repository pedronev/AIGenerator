
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server"; 
import { OpenAI } from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

// Initialize OpenAI API client with the API key directly
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const instrucctionMessage: ChatCompletionMessageParam = {
  role: "system",
  content: "You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations.",
};

export async function POST(req: Request) {
  try {

    console.log(process.env.OPENAI_API_KEY);
    // Get user information from Clerk authentication
    const { userId } = await auth(); 
    const body = await req.json(); 
    const { messages } = body;

    // Check if the user is authenticated
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Ensure the API key is configured
    if (!process.env.OPENAI_API_KEY) {
      return new NextResponse("OpenAI API Key not configured", { status: 500 });
    }

    // Validate if messages are provided
    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    // Create the OpenAI chat completion request
const chatCompletion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [instrucctionMessage, ...messages],
    });

    // Return the AI response
     return NextResponse.json(chatCompletion.choices[0].message);

  } catch (error) {
    console.log("[code_error]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}