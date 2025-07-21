import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ArrowLeft, ArrowRight, MessageSquare } from "lucide-react"

export default function SeltopLanding() {
  return (
    <div className="min-h-screen bg-[#05071A] text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6">
        <Link href="/" className="text-white font-bold text-xl tracking-tight">Seltop</Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-white/80 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="#" className="text-white/80 hover:text-white transition-colors">
            Work
          </Link>
          <Link href="#" className="text-white/80 hover:text-white transition-colors">
            Reviews
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-16 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          Hello, <span className="text-[#3A6EF2]">@Seltop</span> here
        </h1>
        <p className="text-[#8E93AB] text-xl mb-12">Minecraft Graphic Designer</p>
        <ChevronDown className="w-8 h-8 text-white/60 mx-auto animate-bounce" />
      </section>

      {/* Portfolio Grid */}
      <section className="px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Action Scene - First row, left */}
            <div>
              <div className="relative overflow-hidden group cursor-pointer">
                <Image
                  src="/images/action-scene.png"
                  alt="Minecraft action scene with dragon"
                  width={600}
                  height={300}
                  className="w-full h-auto object-cover"
                />
           
              </div>
            </div>

            {/* Landscape Scene - First row, right */}
            <div>
              <div className="relative overflow-hidden group cursor-pointer">
                <Image
                  src="/images/landscape-scene.png"
                  alt="Minecraft landscape with industrial structures"
                  width={600}
                  height={300}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-4 right-4 text-white text-sm z-10">
                  Let's work together
                </div>
              </div>
            </div>

            {/* Desert Scene - Second row, left */}
            <div className="mt-5">
              <div className="relative overflow-hidden group cursor-pointer">
                <Image
                  src="/images/desert-scene.png"
                  alt="Minecraft desert landscape"
                  width={600}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Hero Icons - Second row, right */}
            <div className="mt-5">
              <div className="relative overflow-hidden group cursor-pointer">
                <Image
                  src="/images/hero-icons.png"
                  alt="Minecraft character with gaming icons"
                  width={600}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            
             {/* Desert Scene - Second row, left */}
            <div className="mt-5">
              <div className="relative overflow-hidden group cursor-pointer">
                <Image
                  src="/images/desert-scene.png"
                  alt="Minecraft desert landscape"
                  width={600}
                  height={300}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* Hero Icons - Second row, right */}
            <div className="mt-5">
              <div className="relative overflow-hidden group cursor-pointer">
                <Image
                  src="/images/hero-icons.png"
                  alt="Minecraft character with gaming icons"
                  width={600}
                  height={300}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <button className="bg-[#191E43] text-white px-8 py-3 rounded-sm hover:bg-[#252B5A] transition-colors duration-300">
              Load more
            </button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-8 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            What my <span className="text-[#3A6EF2]">process</span> looks like
          </h2>

          <div className="relative rounded-xl overflow-hidden mb-16">
            <Image 
              src="/images/process-scene.png" 
              alt="Design process visualization" 
              width={1200} 
              height={600}
              className="w-full h-auto object-cover" 
            />
          </div>

          {/* Process Steps */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="w-14 h-14 bg-transparent text-[#3A6EF2] rounded-sm flex items-center justify-center border border-[#3A6EF2]/30">
                <span className="font-bold text-xl">Ps</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Side Projects */}
      <section className="px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            My <span className="text-[#3A6EF2]">side</span> projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-5">
              <div className="relative rounded-xl overflow-hidden">
                <Image 
                  src="/images/action-scene.png" 
                  alt="Side project 1" 
                  width={600}
                  height={300}
                  className="w-full h-auto object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
              </div>
              <div className="relative rounded-xl overflow-hidden">
                <Image 
                  src="/images/desert-scene.png" 
                  alt="Side project 2" 
                  width={600}
                  height={300}
                  className="w-full h-auto object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5">
              <div className="bg-[#0F1129] rounded-xl p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-[#3A6EF2] mb-4">Project Name</h3>
                <p className="text-[#8E93AB] mb-6">
                  Project description Project description Project description Project description
                </p>
              </div>
              <div className="relative rounded-xl overflow-hidden">
                <Image 
                  src="/images/hero-icons.png" 
                  alt="Project preview" 
                  width={600}
                  height={300}
                  className="w-full h-auto object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-8 py-20" style={{ backgroundImage: "linear-gradient(to bottom, #05071A, #090B24)" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            My <span className="text-[#3A6EF2]">clients'</span> voice
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {Array.from({ length: 3 }, (_, i) => (
              <div key={i} className="bg-[#0F1129] border border-[#3A6EF2]/10 rounded-md p-8 relative shadow-lg">
                <p className="text-[#8E93AB] mb-10 leading-relaxed">
                  The attention to detail and innovative features have completely transformed our workflow. This is 
                  exactly what we've been looking for.
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#3A6EF2]/30">
                    <Image
                      src="/placeholder-user.jpg"
                      alt="Client avatar"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[#3A6EF2] font-semibold text-sm">xSenny_</p>
                    <p className="text-[#8E93AB] text-xs">Content Creator - 50M</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-6">
            <button className="w-12 h-12 bg-transparent border border-[#3A6EF2]/20 rounded-full flex items-center justify-center hover:bg-[#3A6EF2]/10 transition-colors">
              <ArrowLeft className="w-5 h-5 text-[#3A6EF2]" />
            </button>
            <button className="w-12 h-12 bg-transparent border border-[#3A6EF2]/20 rounded-full flex items-center justify-center hover:bg-[#3A6EF2]/10 transition-colors">
              <ArrowRight className="w-5 h-5 text-[#3A6EF2]" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-none overflow-hidden">
              <Image
                src="/images/final.png"
                alt="Seltop Minecraft Character"
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
            </div>

            <div>
              <p className="text-[#3A6EF2] text-sm font-semibold mb-4 tracking-wide">Who am I?</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                I am Seltop, a Minecraft Graphic Designer
              </h2>
              <p className="text-[#8E93AB] mb-10 text-lg leading-relaxed">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Ultricies morbi fames nullam class elit mattis 
                taciti sed. Parturient leo vivamus neque quam ante litora natoque. Non aptent maecenas lobortis ex 
                pulvinar consequat. Ornare volutpat et sollicitudin lobortis eu rhoncus consectetur.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-white font-semibold">Discord:</span>
                  <span className="text-[#8E93AB]">@seltop</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-white font-semibold">Twitter:</span>
                  <span className="text-[#8E93AB]">@seltop7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-12 border-t border-[#131633]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-[#3A6EF2] font-bold text-2xl mb-2">Seltop</div>
              <p className="text-[#8E93AB] text-sm">
                Copyright 2025 Seltop.
                <br />
                All Rights Reserved
              </p>
            </div>

            <div className="flex items-center space-x-8 my-6 md:my-0">
              <Link href="#" className="text-[#8E93AB] hover:text-white transition-colors">
                Home
              </Link>
              <Link href="#" className="text-[#8E93AB] hover:text-white transition-colors">
                Work
              </Link>
              <Link href="#" className="text-[#8E93AB] hover:text-white transition-colors">
                Reviews
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="#" className="w-10 h-10 bg-transparent flex items-center justify-center hover:bg-[#131633] transition-colors cursor-pointer rounded-sm">
                <MessageSquare className="w-5 h-5 text-white" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-transparent flex items-center justify-center hover:bg-[#131633] transition-colors cursor-pointer rounded-sm">
                <span className="text-white font-bold">𝕏</span>
              </Link>
              <Link href="#" className="w-10 h-10 bg-transparent flex items-center justify-center hover:bg-[#131633] transition-colors cursor-pointer rounded-sm">
                <span className="text-white text-xl">▶</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
