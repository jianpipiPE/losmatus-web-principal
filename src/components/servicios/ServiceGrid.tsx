"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import type { Service, ServiceCategory } from "@/types/service";
import { defaultServices } from "@/lib/services";

export function ServiceGrid({ services = defaultServices, showFilter = true, limit }: { services?: Service[]; showFilter?: boolean; limit?: number }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const categories = ["Todos", "Infraestructura", "Seguridad", "Soporte TI"];
  const filtered = (services || []).filter(s => selectedCategory === "Todos" || s.category === selectedCategory).slice(0, limit || (services || []).length);

  return (
    <div>
      {showFilter && (
        <div className="flex flex-wrap justify-center gap-2 pb-8">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition-all duration-200 ${
                selectedCategory === c
                  ? "bg-zinc-950 text-white shadow-sm"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200/80 hover:text-zinc-950"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      )}
      <div className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((service) => (
          <article
            key={service.slug || service.title}
            className="group relative flex flex-col justify-between rounded-3xl border border-zinc-200/90 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-200/50"
          >
            {service.esDestacado && (
              <div className="absolute -top-3 right-6 inline-flex items-center gap-1.5 rounded-full bg-zinc-950 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                <Sparkles className="h-3 w-3 text-[var(--brand-yellow)]" />
                Destacado
              </div>
            )}
            <div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-900 font-bold transition-all duration-300 group-hover:bg-zinc-950 group-hover:text-white">
                  {service.iconName ? service.iconName.substring(0, 2) : "TI"}
                </div>
                {(service.category || service.categoria) && (
                  <span className="rounded-full bg-zinc-50 border border-zinc-200/80 px-3 py-1 text-[11px] font-semibold text-zinc-500">
                    {service.category || service.categoria}
                  </span>
                )}
              </div>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-zinc-950 group-hover:text-black">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                {service.description}
              </p>
              {service.beneficios && service.beneficios.length > 0 && (
                <ul className="mt-5 space-y-2 border-t border-zinc-100 pt-5">
                  {service.beneficios.map((h: string, i: number) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-600 font-medium">
                      <CheckCircle2 className="h-3.5 w-3.5 text-zinc-900 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-8 pt-5 border-t border-zinc-100">
                {service.slug ? (
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-900 transition-all group-hover:gap-3"
                  >
                    <span>Conocer detalles</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                ) : (
                  <Link
                    href="/contacto"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-900 transition-all hover:gap-3"
                  >
                    <span>Consultar</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
