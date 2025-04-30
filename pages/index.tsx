import Link from "next/link";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center">Página Home</h1>
      <Link href="characters">
       <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Ir para a Lista de Characters
      </button>
    </Link>
    </div>
  )
}
