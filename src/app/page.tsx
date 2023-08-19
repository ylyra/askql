'use client'

import logoImage from '@/assets/logo.svg'
import { useCompletion } from 'ai/react'
import { Stars, Trash2 } from 'lucide-react'
import Image from 'next/image'
import { highlight, languages } from 'prismjs'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-sql'
import 'prismjs/themes/prism-dark.css'
import { useState } from 'react'
import ReactSimpleEditor from 'react-simple-code-editor'

export default function Home() {
  const [schema, setSchema] = useState(``)
  const { completion, isLoading, handleSubmit, input, handleInputChange } =
    useCompletion({
      api: '/api/generate-sql',
      body: {
        schema,
      },
    })

  return (
    <div className="mx-auto max-w-md px-4 pb-4 pt-12">
      <header className="flex items-center justify-between">
        <Image src={logoImage} alt="" />

        <button>
          <Trash2 className="h-8 w-8 text-white" strokeWidth={0.8} />
        </button>
      </header>

      <form
        className="flex w-full flex-col py-8 text-foam"
        onSubmit={handleSubmit}
      >
        <label className="text-lg font-light" htmlFor="schema">
          Cole seu código SQL aqui:
        </label>
        <ReactSimpleEditor
          textareaId="schema"
          value={schema}
          onValueChange={(code) => setSchema(code)}
          highlight={(code) => highlight(code, languages.js, 'sql')}
          padding={{
            top: 12,
            bottom: 12,
            left: 16,
            right: 16,
          }}
          className="my-4 resize-none rounded-md border border-blueberry-300 bg-blueberry-600 px-4 py-3 font-mono outline-none focus-within:ring-2 focus-within:ring-lime-600"
        />

        <label className="text-lg font-light" htmlFor="question">
          Faça uma pergunta sobre o código:
        </label>
        <textarea
          className="my-4 resize-none rounded-md border border-blueberry-300 bg-blueberry-600 px-4 py-3 outline-none focus:ring-2 focus:ring-lime-600"
          name="question"
          id="question"
          value={input}
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="flex h-14 items-center justify-center gap-2.5 rounded-lg border border-pistachio font-semibold text-pistachio "
        >
          <Stars className="h-6 w-6" />
          Perguntar à inteligência artificial
        </button>
      </form>

      <div className="mt-8 flex flex-col">
        <span className="text-lg font-light text-foam">Resposta</span>
        <ReactSimpleEditor
          value={completion}
          onValueChange={() => {
            // do nothing
          }}
          highlight={(code) => highlight(code, languages.js, 'sql')}
          padding={{
            top: 12,
            bottom: 12,
            left: 16,
            right: 16,
          }}
          readOnly
          textareaClassName="cursor-help"
          className="my-4  resize-none rounded-md border border-blueberry-300 bg-transparent"
        />
      </div>
    </div>
  )
}
