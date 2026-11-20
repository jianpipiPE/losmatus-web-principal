import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { ServiceGrid } from "@/components/servicios/ServiceGrid";
import type { Service } from "@/types/service";

export function FeaturedServices({ services }: { services?: Service[] }) {
  return (
    <section className="bg-white py-24 sm:py-32 border-b border-zinc-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 border border-zinc-200/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-zinc-800">
            <Sparkles className="h-3.5 w-3.5 text-zinc-600" />
            Catálogo Especializado
          </div>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-5xl">
            Soluciones TI de alta disponibilidad
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-zinc-500 max-w-xl mx-auto">
            Combinamos ingeniería, materiales certificados y atención proactiva para mantener tu infraestructura segura.
          </p>
        </div>

        {/* Services Grid with Filter */}
        <div className="mt-16">
          <ServiceGrid services={services} showFilter={true} limit={6} />
        </div>

        {/* View All CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-900 bg-zinc-950 px-8 py-4 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:bg-zinc-800 hover:scale-[1.02]"
          >
            <span>Explorar catálogo completo de servicios</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
