const NODES = [
  { x: 70, y: 215, label: 'LPU', sub: '2021–2025', desc: 'The foundation' },
  { x: 220, y: 85, label: 'Sciforma', sub: 'Internship', desc: 'The beginning' },
  { x: 370, y: 215, label: 'Planview', sub: 'Software Engineer I', desc: 'The growth' },
  { x: 520, y: 85, label: 'QuickLend', sub: 'SDE', desc: 'The next chapter' },
  { x: 670, y: 215, label: 'Interstellar', sub: 'The unknown', desc: 'Wherever the stars take me' },
]

const EDGES = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
]

const STARS = [
  [30, 45], [120, 275], [320, 30], [530, 265],
  [620, 30], [180, 15], [450, 275], [15, 140], [285, 215],
  [585, 275], [710, 55], [755, 230], [390, 45], [745, 155],
]

export default function NodeMap() {
  return (
    <svg
      viewBox="0 0 780 310"
      className="node-map"
      role="img"
      aria-label="Career trajectory: LPU (2021–2025: The foundation), Sciforma (Internship: The beginning), Planview (Software Engineer I: The growth), QuickLend (SDE: The next chapter), to Interstellar (The unknown: Wherever the stars take me)"
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
        x2={745}
        y2={155}
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
            <text x={n.x} y={n.y - 22} className="node-map__label">
              {n.label}
            </text>
            <text x={n.x} y={n.y + 26} className="node-map__sub">
              {n.sub}
            </text>
            <text x={n.x} y={n.y + 45} className="node-map__desc">
              {n.desc}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
