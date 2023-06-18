import Image from 'next/image'
import { GitHubIcon, LinkedInIcon } from '@/components/Icons'

export default function Home() {
  return (
    <main className="bg-[#e2e2e2]">
      <nav className='flex justify-between items-center h-16 w-full px-10 bg-[#e2e2e2]'>
        <p className='text-xl font-extrabold'>Danilo</p>
        <ul className='flex gap-6 font-bold'>
          <li className=''>Home</li>
          <li className=''>About</li>
          <li className=''>Projects</li>
          <li className=''>Contact</li>
        </ul>
      </nav>
      <section className='flex justify-center items-center h-[700px] '>
        <div className='flex flex-col w-[700px]'>
          <div className='flex w-full gap-6'>
            <div className='flex flex-col gap-4'>
              <h1 className='text-5xl font-extrabold'>Cientista de Dados 👋</h1>
              <p className=''>Olá, me chamo Danilo Marano. Sou programador apaixonado por estatística vivendo em São Paulo, Brasil. 📍</p>
              <div className='flex gap-4'>
                <LinkedInIcon />
                <GitHubIcon />
              </div>
            </div>
            <Image src='/../public/MinhaFoto.png' width={400} height={400} />
          </div>
        </div>
        
      </section>
      


    </main>
  )
}
