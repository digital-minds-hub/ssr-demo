import { NextResponse } from "next/server";

export async function GET() {
  const stream = new ReadableStream({
    start(controller) {
      // Push Part 1 immediately
      controller.enqueue("<div><h1>Part 1</h1></div>");

      // Push Part 2 after 1 second
      setTimeout(() => {
        controller.enqueue("<div><p>Part 2</p></div>");
      }, 1000);

      // Close the stream after 2 seconds
      setTimeout(() => {
        controller.close();
      }, 2000);
    },
  });

  return new NextResponse(stream, {
    headers: { "Content-Type": "text/html" },
  });
}
