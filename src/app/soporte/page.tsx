import type { Metadata } from "next";
import Image from "next/image";
import { sanityClient } from "@/lib/sanity/client";
import { SUPPORT_PAGE_QUERY } from "@/lib/sanity/queries";
import { Bot, MessageSquare, Globe, ArrowRight, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";

type SupportPageData = {
  etiquetaBadge?: string;
  titulo?: string;
  subtitulo?: string;
  imagenPortadaUrl?: string;
  urlPortal?: string;
  textoBoton?: string;
};

export const metadata: Metadata = {
  title: "Portal de Soporte Cloud e Incidencias TI",
  description:
    "Acceda al portal de clientes LOSMATUS. Reporte incidencias, visualice el progreso en tiempo real y comuníquese con ingenieros de soporte TI.",
};

export default async function SoportePage() {
  let content: SupportPageData | null = null;

  if (sanityClient) {
    try {
      content = await sanityClient.fetch<SupportPageData | null>(
        SUPPORT_PAGE_QUERY,
        {},
        { next: { revalidate: 60 } }
      );
    } catch (e) {
      console.error("Error al cargar datos de Soporte de Sanity", e);
    }
  }

  const badge = content?.etiquetaBadge || "Exclusivo para Clientes";
  const title = content?.titulo || "Soporte Inteligente Sin interrupciones.";
  const subtitle =
    content?.subtitulo ||
    "Acceda a nuestra plataforma cloud. Reporte incidencias, visualice el progreso en tiempo real y chatee directamente con nuestros ingenieros.";
  const portalUrl = content?.urlPortal || "https://soporte.losmatus.com/";
  const buttonText = content?.textoBoton || "Entrar al Portal";
  const bgImage = content?.imagenPortadaUrl || "/images/fondos/fondo4.jpeg";

  return (
    <div className="relative overflow-hidden bg-zinc-950 text-white min-h-[90vh] flex flex-col justify-center py-20 lg:py-28">
      {/* Background with Dark Luminosity overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="Fondo Soporte LOSMATUS"
          fill
          priority
          className="object-cover object-center opacity-25 mix-blend-luminosity"
        />
        <div className="hero-overlay-gradient absolute inset-0 bg-gradient-to-r from-black via-zinc-950/90 to-black/80" />
        <div className="hero-overlay-radial absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Header Section */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-yellow)]/40 bg-zinc-900/80 px-4 py-1.5 text-xs font-bold text-[var(--brand-yellow)] backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-[var(--brand-yellow)] animate-pulse" />
            <span>{badge}</span>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.12]">
            {title}
          </h1>

          <p className="mt-6 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Content Grid: Features on the left + Interactive Mockup on the right */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-12">
          {/* Left Feature Column */}
          <div className="space-y-6 lg:col-span-5">
            <div className="flex items-start gap-4 rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-5 backdrop-blur-sm transition-all hover:border-[var(--brand-yellow)]/40">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-yellow)]/10 text-[var(--brand-yellow)]">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-white">IA Integrada</h2>
                <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                  Clasificación automática de tickets para respuestas más rápidas y asignación inteligente.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-5 backdrop-blur-sm transition-all hover:border-[var(--brand-yellow)]/40">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-yellow)]/10 text-[var(--brand-yellow)]">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-white">Chat en Vivo</h2>
                <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                  Comunicación directa con el técnico asignado a su caso en tiempo real sin intermediarios.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-5 backdrop-blur-sm transition-all hover:border-[var(--brand-yellow)]/40">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-yellow)]/10 text-[var(--brand-yellow)]">
                <Globe className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-white">Acceso Global</h2>
                <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                  Gestione su infraestructura tecnológica y SLAs desde cualquier navegador o dispositivo móvil.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#FFE500] px-8 py-4 text-sm font-extrabold text-black shadow-lg shadow-[#FFE500]/20 transition-all hover:scale-[1.02]"
              >
                <span>{buttonText}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Chat Incident Mockup (Como en la foto) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/90 shadow-2xl backdrop-blur-xl overflow-hidden">
              {/* Mockup Header Window */}
              <div className="flex items-center justify-between border-b border-zinc-800/80 bg-zinc-950/80 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-3 text-xs font-bold text-zinc-200 flex items-center gap-1.5">
                    <MessageSquare className="h-3.5 w-3.5 text-zinc-400" />
                    Chat de Incidencia #2045
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-semibold text-emerald-400">En línea</span>
                </div>
              </div>

              {/* Mockup Body: Two columns layout */}
              <div className="grid grid-cols-1 md:grid-cols-12 min-h-[360px]">
                {/* Chat Stream */}
                <div className="md:col-span-8 p-5 flex flex-col justify-between border-b md:border-b-0 md:border-r border-zinc-800/80 bg-zinc-950/40">
                  <div className="space-y-4">
                    {/* Support message */}
                    <div>
                      <span className="text-[10px] font-bold text-zinc-400">Soporte Técnico</span>
                      <div className="mt-1 rounded-2xl rounded-tl-sm bg-zinc-800/90 p-3.5 text-xs text-zinc-200 border border-zinc-700/50 max-w-[85%]">
                        Hola, hemos recibido su reporte sobre la caída del servidor. ¿Podría confirmarnos si las luces del rack están parpadeando en rojo?
                      </div>
                      <span className="mt-1 block text-[10px] text-zinc-500">11:42 AM</span>
                    </div>

                    {/* Client reply */}
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] font-bold text-[var(--brand-yellow)]">Tú (Cliente)</span>
                      <div className="mt-1 rounded-2xl rounded-tr-sm bg-zinc-100 p-3.5 text-xs text-zinc-950 max-w-[85%] shadow-sm">
                        <p>Sí confirmado. Adjunto foto del panel frontal.</p>
                        <div className="mt-2 rounded-lg bg-zinc-200/80 p-2 text-[10px] text-zinc-700 font-mono flex items-center gap-2">
                          <span>[IMG_2026.jpg]</span>
                        </div>
                      </div>
                      <span className="mt-1 block text-[10px] text-zinc-500">11:45 AM</span>
                    </div>
                  </div>

                  {/* Mock Input Bar */}
                  <div className="mt-6 flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/80 p-2.5">
                    <span className="text-xs text-zinc-500 flex-1 px-2">Escribe tu mensaje...</span>
                    <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--brand-yellow)] text-black">
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Ticket Sidebar Info */}
                <div className="md:col-span-4 p-5 space-y-5 bg-zinc-950/70 text-xs">
                  <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-3">
                    <div className="flex items-center gap-1.5 text-amber-400 font-bold text-[11px]">
                      <Clock className="h-3.5 w-3.5" />
                      <span>SLA RESTANTE</span>
                    </div>
                    <p className="mt-1 text-lg font-black text-amber-300">1h 45m</p>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Estado Actual</span>
                    <div className="mt-1.5 inline-flex items-center gap-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 px-2.5 py-1 text-[11px] font-bold text-amber-300">
                      <span>⚠️ En Proceso</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Técnico Asignado</span>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--brand-yellow)] text-black font-bold text-[10px]">
                        JM
                      </div>
                      <div>
                        <p className="font-bold text-zinc-200">Juan M.</p>
                        <p className="text-[10px] text-zinc-400">Prioridad: Alta (Servidor)</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-zinc-800/80">
                    <span className="text-[10px] font-bold text-zinc-400">Sugerencias IA</span>
                    <ul className="mt-2 space-y-1.5 text-[11px] text-zinc-400">
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-3 w-3 text-[var(--brand-yellow)]" />
                        <span>Reiniciar servicio Nginx</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-3 w-3 text-[var(--brand-yellow)]" />
                        <span>Verificar logs de consola</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
