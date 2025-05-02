import Link from "next/link";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h1 className="text-3xl font-bold text-center">Dragon ball API</h1>
      <Link href="characters">
       <button className="bg-yellow-500 text-white px-4 py-2 rounded">
        Ir para a Lista de Characters
      </button>
    </Link>
    <Link href="planets">
       <button className="bg-red-500 text-white px-4 py-2 rounded">
        Ir para a Lista de Planets
      </button>
    </Link>
    </div>
  )
}
