"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  MapPin,
  Truck,
  Package,
  BarChart3,
  Warehouse,
  ArrowRight,
  MessageSquare,
  Mail,
  Clock,
  Map,
  UserCheck,
  ShieldCheck,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Head from "next/head"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const truckRef = useRef(null)
  const [showWhatsappWidget, setShowWhatsappWidget] = useState(false)
  const [showWhatsappChat, setShowWhatsappChat] = useState(false)

  useEffect(() => {
    const truck = truckRef.current
    if (truck) {
      // Animación del camión
      const animation = truck.animate(
        [{ transform: "translateX(-5px)" }, { transform: "translateX(5px)" }, { transform: "translateX(-5px)" }],
        {
          duration: 3000,
          iterations: Number.POSITIVE_INFINITY,
          easing: "ease-in-out",
        },
      )

      return () => {
        if (animation) animation.cancel()
      }
    }
  }, [])

  useEffect(() => {
    const widgetTimer = setTimeout(() => {
      setShowWhatsappWidget(true)
    }, 3000) // Mostrar después de 3 segundos

    return () => {
      clearTimeout(widgetTimer)
    }
  }, [])

  const toggleWhatsappChat = () => {
    setShowWhatsappChat(!showWhatsappChat)
  }

  return (
    <>
      <Head>
        <title>Distribuciones Urbanas | Logística y Distribución Profesional</title>
        <meta
          name="description"
          content="Soluciones integrales de logística, distribución, preparado de pedidos y almacenamiento para optimizar tu cadena de suministro."
        />
        <meta
          name="keywords"
          content="logística, distribución, almacenamiento, cadena de suministro, transporte, pedidos"
        />
        <meta name="author" content="Distribuciones Urbanas" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Distribuciones Urbanas | Logística y Distribución" />
        <meta property="og:description" content="Soluciones integrales de logística y distribución para empresas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://distribucionesurbanas.com" />
        <meta property="og:image" content="/og-image.jpg" />
        <link rel="canonical" href="https://distribucionesurbanas.com" />
      </Head>

      <div className="flex min-h-screen flex-col">
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b bg-[#002b45]">
          <div className="container flex h-16 items-center justify-between bg-[#002b45]">
            <div className="flex items-center gap-2">
              <div ref={truckRef}>
                <Image
                  src="/favicon-32x32.png"
                  alt="Distribuciones Urbanas Logo"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
              </div>
              <span className="text-xl font-bold text-white">Distribuciones Urbanas</span>
            </div>
            <div className="flex items-center gap-4">
              <nav className="hidden md:flex gap-6">
                <Link href="#inicio" className="text-sm font-medium text-white hover:text-[#ABE13C] transition-colors">
                  Inicio
                </Link>
                <Link
                  href="#servicios"
                  className="text-sm font-medium text-white hover:text-[#ABE13C] transition-colors"
                >
                  Servicios
                </Link>
                <Link
                  href="#nosotros"
                  className="text-sm font-medium text-white hover:text-[#ABE13C] transition-colors"
                >
                  Nosotros
                </Link>
              </nav>
              <div className="flex items-center gap-4">
                <Button
                  className="bg-[#ABE13C] text-[#00303D] hover:bg-[#8fb82f]"
                  onClick={() => (window.location.href = "#contacto")}
                >
                  Contacto
                </Button>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1">
          {/* Hero Section */}
          <section id="inicio" className="relative overflow-hidden bg-[#00303D] py-20 md:py-32">
            <div className="absolute inset-0 opacity-20">
              <Image
                src="/images/warehouse.jpeg"
                alt="Centro de distribución y logística de Distribuciones Urbanas"
                fill
                className="object-cover object-center"
                priority
                quality={90}
              />
            </div>
            <div className="container relative z-10">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-6">
                  <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
                    Soluciones de logística y distribución a tu medida
                  </h1>
                  <p className="text-xl text-gray-200 md:text-2xl">
                    Optimizamos tu cadena de suministro con servicios integrales de logística, distribución, preparación
                    de pedidos y almacenamiento.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="bg-[#ABE13C] text-[#00303D] hover:bg-[#8fb82f]"
                      onClick={() => (window.location.href = "#contacto")}
                    >
                      Solicitar cotización <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-[#00303D] bg-white border-white hover:bg-white/90"
                      onClick={() => (window.location.href = "#servicios")}
                    >
                      Conoce nuestros servicios
                    </Button>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <Image
                    src="/images/warehouse.jpeg"
                    alt="Centro de distribución y logística de Distribuciones Urbanas"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl object-cover"
                    quality={90}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="servicios" className="py-16 pb-8 md:py-24 md:pb-12 bg-gray-50">
            <div className="container">
              <header className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-[#00303D] mb-4">Nuestros Servicios</h2>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                  Ofrecemos soluciones integrales para optimizar tu cadena de suministro, desde el almacenamiento hasta
                  la entrega final.
                </p>
              </header>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <article className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#ABE13C] hover:shadow-lg transition-shadow">
                  <Truck className="h-12 w-12 text-[#ABE13C] mb-4" aria-hidden="true" />
                  <h3 className="text-xl font-bold text-[#00303D] mb-2">Logística</h3>
                  <p className="text-gray-600">
                    Diseñamos y gestionamos soluciones logísticas eficientes para optimizar tu cadena de suministro.
                  </p>
                </article>
                <article className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#ABE13C] hover:shadow-lg transition-shadow">
                  <BarChart3 className="h-12 w-12 text-[#ABE13C] mb-4" aria-hidden="true" />
                  <h3 className="text-xl font-bold text-[#00303D] mb-2">Distribución</h3>
                  <p className="text-gray-600">
                    Contamos con una flota moderna para garantizar entregas puntuales y seguras en toda la región.
                  </p>
                </article>
                <article className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#ABE13C] hover:shadow-lg transition-shadow">
                  <Package className="h-12 w-12 text-[#ABE13C] mb-4" aria-hidden="true" />
                  <h3 className="text-xl font-bold text-[#00303D] mb-2">Preparación de Pedidos</h3>
                  <p className="text-gray-600">
                    Preparamos tus pedidos con precisión y eficiencia, asegurando que lleguen en perfectas condiciones.
                  </p>
                </article>
                <article className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#ABE13C] hover:shadow-lg transition-shadow">
                  <Warehouse className="h-12 w-12 text-[#ABE13C] mb-4" aria-hidden="true" />
                  <h3 className="text-xl font-bold text-[#00303D] mb-2">Almacenamiento</h3>
                  <p className="text-gray-600">
                    Depósito en el Parque Industrial Canning ofrece máxima seguridad con vigilancia perimetral las 24
                    horas del día y sistemas avanzados para el control eficiente de su inventario.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section id="nosotros" className="py-16 pt-8 md:py-24 md:pt-12 bg-white" aria-label="¿Por qué elegirnos?">
            <div className="container">
              <header className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-[#00303D] mb-4">¿Por qué elegirnos?</h2>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                  Ofrecemos soluciones logísticas completas con la experiencia y recursos que tu negocio necesita.
                </p>
              </header>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <article className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-2 border-[#ABE13C]">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-[#ABE13C]/10 p-4 rounded-full mb-4">
                      <Warehouse className="h-8 w-8 text-[#00303D]" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-[#00303D] mb-2">+1.500 m²</h3>
                    <p className="text-gray-600">
                      Depósito en el Parque Industrial Canning 2 ofrecemos máxima seguridad con vigilancia perimetral
                      las 24 horas del día y control de tu stock
                    </p>
                  </div>
                </article>
                <article className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-2 border-[#ABE13C]">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-[#ABE13C]/10 p-4 rounded-full mb-4">
                      <Clock className="h-8 w-8 text-[#00303D]" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-[#00303D] mb-2">+30 años</h3>
                    <p className="text-gray-600">De trayectoria en el rubro de logística y distribución</p>
                  </div>
                </article>
                <article className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-2 border-[#ABE13C]">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-[#ABE13C]/10 p-4 rounded-full mb-4">
                      <Map className="h-8 w-8 text-[#00303D]" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-[#00303D] mb-2">Cobertura CABA y AMBA</h3>
                    <p className="text-gray-600">
                      Llegamos a toda CABA y AMBA, incluyendo La Plata, San Vicente, Cañuelas, Luján y Zárate
                    </p>
                  </div>
                </article>
                <article className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-2 border-[#ABE13C]">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-[#ABE13C]/10 p-4 rounded-full mb-4">
                      <Truck className="h-8 w-8 text-[#00303D]" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-[#00303D] mb-2">4 camiones propios</h3>
                    <p className="text-gray-600">Flota activa para repartos seguros y puntuales</p>
                  </div>
                </article>
                <article className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-2 border-[#ABE13C]">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-[#ABE13C]/10 p-4 rounded-full mb-4">
                      <UserCheck className="h-8 w-8 text-[#00303D]" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-[#00303D] mb-2">Atención personalizada</h3>
                    <p className="text-gray-600">Coordinamos entregas de manera directa y clara</p>
                  </div>
                </article>
                <article className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-2 border-[#ABE13C]">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-[#ABE13C]/10 p-4 rounded-full mb-4">
                      <ShieldCheck className="h-8 w-8 text-[#00303D]" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-[#00303D] mb-2">Servicio seguro</h3>
                    <p className="text-gray-600">Tu mercadería en buenas manos, siempre</p>
                  </div>
                </article>
              </div>
              <div className="text-center mt-12">
                <p className="text-xl md:text-2xl font-medium text-[#00303D] italic">
                  "Seguimos creciendo junto a quienes nos eligen cada día."
                </p>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-16 md:py-24 bg-[#002b45]" aria-label="Testimonios de clientes">
            <div className="container">
              <header className="text-center mb-12">
                <p className="text-xl md:text-2xl font-bold text-white max-w-2xl mx-auto">
                  Las siguientes empresas que confían en nuestros servicios de logística y distribución.
                </p>
              </header>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mt-8 max-w-6xl mx-auto">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center p-3">
                    <Image
                      src="https://molinosanmiguel.com.ar/wp-content/uploads/2025/03/AMSA_Logo.png"
                      alt="Molino San Miguel"
                      width={70}
                      height={70}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-white text-xs mt-2 font-medium text-center">Molino San Miguel</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full shadow-lg flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/arbanit-circle-logo.png"
                      alt="Arbanit"
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <span className="text-white text-xs mt-2 font-medium text-center">Arbanit</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center p-3">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Galletitas%20Gym%20Marineras%20Cl%C3%A1sicas%20200g.jpg-JiXjwcfNdDCqWY2cbuIOtQWu99FRwT.jpeg"
                      alt="GyM Galletas Marineras"
                      width={70}
                      height={70}
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <span className="text-white text-xs mt-2 font-medium text-center">GyM Galletas</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center p-3">
                    <Image
                      src="/images/punta-ballena-logo.png"
                      alt="Punta Ballena"
                      width={70}
                      height={70}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-white text-xs mt-2 font-medium text-center">Punta Ballena</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center p-3">
                    <Image
                      src="/images/aceites-logo.png"
                      alt="Compañía Argentina de Aceites"
                      width={70}
                      height={70}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-white text-xs mt-2 font-medium text-center">Aceites S.A.</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center p-3">
                    <Image
                      src="/images/3arroyos-logo.png"
                      alt="3 Arroyos"
                      width={70}
                      height={70}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-white text-xs mt-2 font-medium text-center">3 Arroyos</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center p-3">
                    <Image
                      src="/images/neosol-logo.png"
                      alt="Neosol"
                      width={70}
                      height={70}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-white text-xs mt-2 font-medium text-center">Neosol</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center p-3">
                    <Image
                      src="/images/proinsal-logo.png"
                      alt="Proinsal"
                      width={70}
                      height={70}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-white text-xs mt-2 font-medium text-center">Proinsal</span>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 md:py-24 bg-[#ABE13C]" aria-label="Llamado a la acción">
            <div className="container">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-[#00303D]">Contanos cómo manejás tu logística hoy...</h2>
                  <p className="text-[#00303D]/80 text-lg">
                    Juntos, encontraremos soluciones personalizadas para optimizar tu cadena de suministro.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="bg-[#00303D] text-white hover:bg-[#00303D]/90"
                      onClick={() => (window.location.href = "#contacto")}
                    >
                      Más información
                    </Button>
                    <Link
                      href="https://wa.me/5491155990242"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-[#00303D] shadow transition-colors hover:bg-white/90"
                    >
                      <MessageSquare className="mr-2 h-4 w-4" aria-hidden="true" /> WhatsApp: 11-5599-0242
                    </Link>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="/images/depo.jpg"
                    alt="Depósito de Distribuciones Urbanas en Parque Industrial Canning"
                    width={400}
                    height={400}
                    className="rounded-lg shadow-xl object-cover w-80 h-80 mx-auto"
                    quality={90}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contacto" className="py-16 md:py-24">
            <div className="container">
              <header className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#00303D] mb-4">Contacto</h2>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                  Estamos listos para atender tus necesidades logísticas. Ponete en contacto con nosotros.
                </p>
              </header>
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-8">
                    <article className="flex items-start gap-4">
                      <div className="bg-[#ABE13C]/20 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-[#00303D]" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-[#00303D] mb-1">WhatsApp</h3>
                        <Link
                          href="https://wa.me/5491155990242"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#ABE13C] hover:underline text-lime-600 underline"
                        >
                          11-5599-0242 (Ismael Castro)
                        </Link>
                      </div>
                    </article>
                    <article className="flex items-start gap-4">
                      <div className="bg-[#ABE13C]/20 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-[#00303D]" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-[#00303D] mb-1">Email</h3>
                        <a
                          href="https://mail.google.com/mail/?view=cm&fs=1&to=distribucionesurbanas.ismael@gmail.com&su=Consulta%20sobre%20servicios%20logísticos"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lime-600 underline hover:text-lime-700 transition-colors"
                        >
                          distribucionesurbanas.ismael@gmail.com
                        </a>
                      </div>
                    </article>
                    <article className="flex items-start gap-4">
                      <div className="bg-[#ABE13C]/20 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-[#00303D]" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-[#00303D] mb-1">Dirección</h3>
                        <address className="text-gray-600 not-italic mb-2">
                          Perito Moreno 551, Parque Industrial Canning 2, Depósito N° 14, Partido de Ezeiza, Prov. BsAs.
                        </address>
                      </div>
                    </article>
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
                    <Link
                      href="https://maps.app.goo.gl/rayCWWtynrybZoWu6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative"
                    >
                      <div className="aspect-video w-full relative">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.9968246847!2d-58.51553492425826!3d-34.85533997185193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd7a9c0c1d5c3%3A0x8a4d6c5b4a8f8c8d!2sParque%20Industrial%20Canning%202!5e0!3m2!1ses!2sar!4v1712493518123!5m2!1ses!2sar"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          title="Ubicación de Distribuciones Urbanas"
                          aria-label="Mapa de ubicación de Distribuciones Urbanas"
                          referrerPolicy="no-referrer-when-downgrade"
                          className="absolute inset-0"
                        ></iframe>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-[#00303D] text-white py-2 px-4 rounded-md flex items-center gap-2 shadow-md hover:bg-[#00303D]/90 transition-colors">
                        <span>Ver en Google Maps</span>
                        <ExternalLink className="h-4 w-4" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-[#002b45] text-white py-12">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Truck className="h-8 w-8 text-[#ABE13C]" aria-hidden="true" />
                  <span className="text-xl font-bold">Distribuciones Urbanas</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Soluciones logísticas integrales para optimizar tu cadena de suministro.
                </p>
                <div className="flex items-center gap-4">
                  <Link
                    href="https://wa.me/5491155990242"
                    className="text-gray-300 hover:text-[#ABE13C]"
                    aria-label="WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                  </Link>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=distribucionesurbanas.ismael@gmail.com&su=Consulta%20sobre%20servicios%20logísticos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#ABE13C] transition-colors"
                    aria-label="Email"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </a>
                  <Link
                    href="https://maps.app.goo.gl/rayCWWtynrybZoWu6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#ABE13C]"
                    aria-label="Ubicación"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4">Servicios</h3>
                <nav>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#servicios" className="text-gray-300 hover:text-[#ABE13C] text-sm">
                        Logística
                      </Link>
                    </li>
                    <li>
                      <Link href="#servicios" className="text-gray-300 hover:text-[#ABE13C] text-sm">
                        Distribución
                      </Link>
                    </li>
                    <li>
                      <Link href="#servicios" className="text-gray-300 hover:text-[#ABE13C] text-sm">
                        Preparación de Pedidos
                      </Link>
                    </li>
                    <li>
                      <Link href="#servicios" className="text-gray-300 hover:text-[#ABE13C] text-sm">
                        Almacenamiento
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4">Contacto</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <MessageSquare className="h-5 w-5 text-[#ABE13C] mt-0.5" aria-hidden="true" />
                    <span className="text-gray-300 text-sm">WhatsApp: 11-5599-0242 (Ismael Castro)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-[#ABE13C] mt-0.5" aria-hidden="true" />
                    <span className="text-gray-300 text-sm">distribucionesurbanas.ismael@gmail.com</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#ABE13C] mt-0.5" aria-hidden="true" />
                    <span className="text-gray-300 text-sm">
                      Perito Moreno 551, Parque Industrial Canning 2, Depósito N° 14, Ezeiza
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>© {new Date().getFullYear()} Distribuciones Urbanas. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>

        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="https://wa.me/5491155990242"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20BD5C] w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Chat en WhatsApp con Ismael Castro"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="white"
              stroke="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.5 3.5C18.25 1.25 15.2 0 12 0C5.5 0 0.2 5.3 0.2 11.8C0.1 13.9 0.7 16 1.8 17.8L0 24L6.4 22.2C8.1 23.2 10 23.7 12 23.7C18.5 23.7 23.8 18.4 23.8 11.9C23.8 8.7 22.5 5.7 20.5 3.5ZM12 21.7C10.2 21.7 8.4 21.2 6.9 20.3L6.5 20.1L2.8 21.2L3.9 17.6L3.7 17.2C2.7 15.6 2.2 13.7 2.2 11.8C2.2 6.4 6.6 2 12 2C14.6 2 17.1 3 19 4.9C20.9 6.8 21.9 9.3 21.9 11.9C21.8 17.3 17.4 21.7 12 21.7ZM17.4 14.3C17.1 14.2 15.7 13.5 15.4 13.4C15.1 13.3 14.9 13.3 14.7 13.6C14.5 13.9 13.9 14.5 13.7 14.7C13.5 14.9 13.4 15 13.1 14.8C12.8 14.7 11.9 14.4 10.8 13.4C10 12.7 9.4 11.8 9.2 11.5C9 11.2 9.2 11 9.3 10.8C9.4 10.7 9.6 10.5 9.7 10.3C9.8 10.1 9.9 10 9.9 9.8C10 9.6 9.9 9.4 9.8 9.3C9.7 9.2 9.1 7.8 8.9 7.2C8.7 6.6 8.4 6.7 8.2 6.7C8 6.7 7.8 6.7 7.6 6.7C7.4 6.7 7.1 6.8 6.8 7.1C6.5 7.4 5.8 8.1 5.8 9.5C5.8 10.9 6.8 12.2 6.9 12.4C7 12.6 9.1 15.8 12.2 17C12.9 17.3 13.5 17.5 13.9 17.6C14.6 17.8 15.3 17.8 15.8 17.7C16.4 17.6 17.5 17 17.8 16.3C18 15.6 18 15 17.9 14.9C17.8 14.7 17.6 14.4 17.4 14.3Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  )
}
