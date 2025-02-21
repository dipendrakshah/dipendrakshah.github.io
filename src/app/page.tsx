import Link from "next/link";
 
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">      
      <Link href="/"><h1>Dipendra K. Shah</h1></Link>   
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">        
        <div className="flex gap-4 items-center flex-col sm:flex-row"> 
{/*                       
          <ul className="flex gap-6 items-center">
            <li>
              <Link href="/" className="hover:text-gray-500 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-500 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/publication" className="hover:text-gray-500 transition-colors">
                Publication
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-gray-500 transition-colors">
                Contact
              </Link>
            </li>
          </ul> */}
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">        
      </footer>
    </div>
  );
}
