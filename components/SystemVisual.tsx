const nodes = [
  { label: "APIs", color: "bg-pine" },
  { label: "Webhooks", color: "bg-sky" },
  { label: "SQL", color: "bg-gold" },
  { label: "Azure", color: "bg-ink" },
];

export function SystemVisual() {
  return (
    <div className="relative overflow-hidden rounded-lg border border-line bg-white p-5 shadow-soft">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(31,122,157,0.12),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(17,97,73,0.10),transparent_26%)]" />
      <div className="relative">
        <div className="mb-5 flex items-center justify-between gap-4 border-b border-line pb-4">
          <div>
            <p className="text-sm font-semibold text-ink">Backend System Map</p>
            <p className="mt-1 text-sm text-ink/60">Reliable services, integrations, and releases</p>
          </div>
          <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-pine">
            production-minded
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {nodes.map((node) => (
            <div key={node.label} className="rounded-lg border border-line bg-white p-4">
              <div className="flex items-center gap-3">
                <span className={`h-3 w-3 rounded-full ${node.color}`} />
                <span className="font-semibold text-ink">{node.label}</span>
              </div>
              <div className="mt-4 h-2 rounded-full bg-mist">
                <div className={`h-2 w-2/3 rounded-full ${node.color}`} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs font-semibold text-ink/70">
          <div className="rounded-lg bg-mist px-3 py-3">CI/CD</div>
          <div className="rounded-lg bg-mist px-3 py-3">Monitoring</div>
          <div className="rounded-lg bg-mist px-3 py-3">Integrations</div>
        </div>
      </div>
    </div>
  );
}
