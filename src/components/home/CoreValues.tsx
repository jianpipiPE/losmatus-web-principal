import { Award, Zap, HeartHandshake } from "lucide-react";

export function CoreValues() {
  const values = [
    {
      title: "Dedicación",
      subtitle: "Compromiso total con cada cliente",
      description:
        "Nos involucramos a fondo en los requerimientos particulares de tu empresa, garantizando atención cercana y soluciones a la medida sin plantillas genéricas.",
      icon: HeartHandshake,
      badge: "Atención 1 a 1",
    },
    {
      title: "Calidad",
      subtitle: "Estándares y marcas líderes",
      description:
        "Trabajamos exclusivamente con equipamiento de nivel corporativo certificado (TIA/EIA, Fluke, Cisco, Panduit, Hikvision) para resultados duraderos y sin fallas.",
      icon: Award,
      badge: "Garantía Oficial",
    },
    {
      title: "Esfuerzo",
      subtitle: "Resolución ágil y eficaz",
      description:
        "Desplegamos nuestra capacidad técnica con disciplina y rapidez para resolver contingencias en tiempo récord y optimizar tus inversiones tecnológicas.",
      icon: Zap,
      badge: "Respuesta Rápida",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32 border-b border-zinc-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-zinc-100 border border-zinc-200/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-zinc-800">
            Nuestra Filosofía
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-5xl">
            Los pilares que guían cada proyecto
          </h2>
          <p className="mt-5 text-base sm:text-lg text-zinc-500 leading-relaxed max-w-2xl mx-auto">
            Aportamos valor real y medible al negocio mediante una ejecución técnica rigurosa y un trato humano y transparente.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="group relative rounded-3xl border border-zinc-200/80 bg-zinc-50/40 p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-200/50"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-900 text-white transition-all duration-300 group-hover:scale-105 group-hover:bg-[var(--brand-yellow)] group-hover:text-black">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-white border border-zinc-200 px-3 py-1 text-[11px] font-semibold text-zinc-600 shadow-sm">
                    {v.badge}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-bold tracking-tight text-zinc-950">{v.title}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-zinc-400">{v.subtitle}</p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600">{v.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
