"use client"

import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react"

const testimonials = [
  {
    id: 1,
    author: "Maria Silva",
    content: "Excelente atendimento! A equipe é muito atenciosa e profissional. Recomendo!",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    role: "Dona da Luna (Golden Retriever)",
  },
  {
    id: 2,
    author: "James Santos",
    content: "Ótimo serviço! Foi uma experiência incrível. Recomendo a todos!",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    role: "Dono da Luz (Pinscher)",
  },
  {
    id: 3,
    author: "Ana Oliveira",
    content: "O serviço de hotel para pets me surpreendeu, muito bem organizado e limpo. Recomendo!",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    role: "Dona do Mike (Yorkshire Terrier)",
  },
  {
    id: 4,
    author: "Rafael Ferreira",
    content: "Ótimo atendimento! A equipe é muito atenciosa e profissional. Recomendo!",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    role: "Dono do Ciclope (Poodle)",
  }
]


export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
  })

  function scrollPrev() {
    if (emblaApi) emblaApi.scrollPrev()
  }

  function scrollNext() {
    if (emblaApi) emblaApi.scrollNext()
  }

  return (
    <section className="bg-[#FFD449] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Depoimentos dos clientes</h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div className="flex-[0_0_100%] min-w-0 px-3" key={index}>
                  <article className="bg-[#1E293B] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="relative w-24 h-24">
                        <img src={testimonial.image} alt="Foto do cliente" className="rounded-full" />
                      </div>
                      <p className="text-gray-200">{testimonial.content}</p>
                      <div>
                        <p className="font-bold">{testimonial.author}</p>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>

                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -left-2 top-1/2 -translate-y-1/2 z-10">
            <ChevronLeft
              className="w-6 h-6 text-gray-600 "
              onClick={scrollPrev}
            />
          </button>

          <button className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-2 top-1/2 -translate-y-1/2 z-10">
            <ChevronRight
              className="w-6 h-6 text-gray-600 "
              onClick={scrollNext}
            />
          </button>
        </div>
      </div>
    </section>
  )
}
