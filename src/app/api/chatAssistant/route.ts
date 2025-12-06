import { GoogleGenAI } from "@google/genai";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const geminiApi = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_MY_GEMINI_TOKEN!,
});

export const POST = async (req: NextRequest) => {
  try {
    const { chat } = await req.json();
    if (!chat) {
      return NextResponse.json({ err: "No chat." }, { status: 400 });
    }
    const prompt = "";
    const res = await geminiApi.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });
    return NextResponse.json({ response: res }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ err }, { status: 400 });
  }
};
