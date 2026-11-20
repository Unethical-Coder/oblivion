const NODES = [
  { x: 65, y: 215, label: 'LPU', sub: '2021–2025', desc: 'The foundation.' },
  { x: 205, y: 85, label: 'Sciforma', sub: 'Internship', desc: 'The beginning.' },
  { x: 350, y: 215, label: 'Planview', sub: 'Software Engineer I', desc: 'The growth.' },
  { x: 500, y: 85, label: 'QuickLend', sub: 'SDE', desc: 'The next chapter.' },
  { x: 645, y: 215, label: 'Interstellar', sub: 'The unknown', desc: 'Wherever the stars take me.' },
]

const EDGES = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
]

const STARS = [
  [30, 45], [120, 275], [310, 30], [510, 265],
  [595, 30], [180, 15], [440, 275], [15, 140], [275, 215],
  [565, 275], [680, 55], [715, 230], [380, 45], [710, 160],
]

export default function NodeMap() {
  return (
    <svg
      viewBox="0 0 740 300"
      className="node-map"
      role="img"
      aria-label="Career trajectory: LPU (2021–2025: The foundation), Sciforma (Internship: The beginning), Planview (Software Engineer I: The growth), QuickLend (SDE: The next chapter), to Interstellar (The unknown: Wherever the stars take me.)"
    >
      {STARS.map(([x, y], i) => (
        <circle key={`star-${i}`} cx={x} cy={y} r="1.5" className="node-map__star" />
      ))}

      {EDGES.map(([a, b], i) => (
        <line
          key={`edge-${i}`}
          x1={NODES[a].x}
          y1={NODES[a].y}
          x2={NODES[b].x}
          y2={NODES[b].y}
          className="node-map__edge"
        />
      ))}

      {/* Subtle open-ended trajectory leading from Interstellar into deep space */}
      <line
        x1={NODES[4].x}
        y1={NODES[4].y}
        x2={710}
        y2={160}
        className="node-map__edge node-map__edge--open"
      />

      {NODES.map((n, i) => {
        const isFuture = i === NODES.length - 1
        return (
          <g
            key={`node-${i}`}
            className={`node-map__node ${isFuture ? 'node-map__node--future' : ''}`}
            style={{ animationDelay: `${i * 0.35}s` }}
          >
            <circle
              cx={n.x}
              cy={n.y}
              r="14"
              className="node-map__ping"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
            <circle cx={n.x} cy={n.y} r="6" className="node-map__dot" />
            <text x={n.x} y={n.y - 20} className="node-map__label">
              {n.label}
            </text>
            <text x={n.x} y={n.y + 24} className="node-map__sub">
              {n.sub}
            </text>
            <text x={n.x} y={n.y + 40} className="node-map__desc">
              {n.desc}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
