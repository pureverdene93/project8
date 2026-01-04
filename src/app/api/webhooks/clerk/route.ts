import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";
import { verifyWebhook } from "@clerk/nextjs/webhooks";

export const POST = async (req: NextRequest) => {
  try {
    const event = await verifyWebhook(req);
    const userData = event.data;
    const newUser = await prisma.user.upsert({
      where: {
        clerkId: userData.id,
      },
      update: {
        email: userData.id,
        name: userData.id,
      },
      create: {
        clerkId: "djfhvbhfb",
        email: "ufhguerh",
        name: "dgfvuefgvuyg",
      },
    });
    console.log(userData, "this is user data");

    return NextResponse.json({ user: newUser }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ err }, { status: 500 });
  }
};
