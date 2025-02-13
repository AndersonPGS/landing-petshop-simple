import royal from "../../../public/royal.png"
import golden from "../../../public/golden.png"
import primier from "../../../public/primier.png"
import natural from "../../../public/natural.png"
import whiskas from "../../../public/whiskas.png"
import Image from "next/image"
import { FacebookLogo, InstagramLogo, YoutubeLogo } from "@phosphor-icons/react/dist/ssr"

const brands = [
  { name: "Royal Canin", logo: royal },
  { name: "Golden", logo: golden },
  { name: "Primier", logo: primier },
  { name: "Formula Natural", logo: natural },
  { name: "Whiskas", logo: whiskas },

]

export function Footer() {
  return (
    <section className="bg-[#E84C3D] py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="border-b border-white/20 pb-8">
          <h4 className="text-3xl font-semibold mb-8 text-center">Marcas parceiras</h4>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {brands.map((brand) => (
              <div key={brand.name} className="bg-white p-4 rounded-lg flex items-center justify-center">
                <Image src={brand.logo} alt={brand.name} width={100} height={50} quality={100} style={{ width: "auto", height: "auto" }} className="object-contain" />
              </div>
            ))}
          </div>

        </div>

        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Pet Shop Landing</h3>
            <p className="mb-4">Cuidando do seu melhor amigo com amor e dedicação.</p>
            <a
              href="#"
              className="bg-green-500 px-4 py-2 rounded-md"
            >
              Contato via WhatsApp
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Contatos</h3>
            <p>Email: teste@teste.com</p>
            <p>Telefone: (XX) 1234-5678</p>
            <p>Endereço: Rua Principal, 123</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Redes Sociais</h3>
            <div className="flex gap-4">
              <a href="#" target="_blank"><FacebookLogo className="h-8 w-8" /></a>
              <a href="#" target="_blank"><InstagramLogo className="h-8 w-8" /></a>
              <a href="#" target="_blank"><YoutubeLogo className="h-8 w-8" /></a>
            </div>
          </div>

        </footer>
      </div>
    </section>
  )
}