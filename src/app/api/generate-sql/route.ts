import { OpenAIStream, StreamingTextResponse } from 'ai'
import OpenAI from 'openai'

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge'

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { schema, prompt } = await req.json()

  const message = `
  O seu trabalho é criar queries em SQL a partir de um schema SQL abaixo.
  Me retorne SOMENTO O código SQL, nada além disso.

  Schema SQL:
  """
  ${schema}
  """

  A partir do schema acima, escreva um query SQL a partir da solicitação abaixo.
  Solicitação: ${prompt}
  `.trim()

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [
      {
        role: 'user',
        content: message,
      },
    ],
  })
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response)
  // Respond with the stream
  return new StreamingTextResponse(stream)
}
