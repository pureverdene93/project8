import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const geminiApi = new GoogleGenAI({
  apiKey: process.env.GEMINI_TOKEN,
});
export async function POST(req: NextRequest) {
  try {
    const { articleTitle, articleContent } = await req.json();
    if (!articleTitle) {
      return NextResponse.json({ err: "No article title" }, { status: 400 });
    }
    if (!articleContent) {
      return NextResponse.json({ err: "No article content" }, { status: 400 });
    }
    const prompt = `You are a quiz generator.
                    Your task:
                    - Read the article title and article content.
                    - Create EXACTLY 5 quiz questions.
                    - Each quiz question must contain:
                    - "question": (string)
                    - "choices": an array with EXACTLY 4 answer choices
                    - "correctAnswer": one of the 4 choices (string)

                    Very important:
                    - Respond ONLY with valid JSON.
                    - Do NOT include explanations or extra text.
                    - The JSON must follow this structure exactly:

                    {
                    "tests": [
                    {
                    "question": "string",
                    "choices": ["A", "B", "C", "D"],
                    "correctAnswer": "A"
                    }
                        ]
                            }

                    Now generate the tests based on the article.
                    Article title: ${articleTitle}
                    Article content: ${articleContent}
                    `;
    const res = await geminiApi.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [
        {
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
    });
    const aiText = res?.candidates?.[0]?.content?.parts?.[0].text || "";
    let parsed;
    try {
      parsed = JSON.parse(aiText);
    } catch (err) {
      console.error(err, "json parse error");
      return NextResponse.json(
        { err: "AI did not return valid JSON" },
        { status: 500 }
      );
    }
    return NextResponse.json(parsed, { status: 200 });
  } catch (err) {
    return NextResponse.json({ err }, { status: 500 });
  }
}
