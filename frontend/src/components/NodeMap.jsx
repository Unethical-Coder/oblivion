const NODES = [
  { x: 50, y: 210, label: 'LPU', sub: "B.Tech CS, '21" },
  { x: 210, y: 110, label: 'Sciforma', sub: 'Intern' },
  { x: 380, y: 165, label: 'Planview', sub: 'Backend Engineer' },
  { x: 545, y: 85, label: 'Next', sub: 'In progress' },
]

const EDGES = [
  [0, 1],
  [1, 2],
  [2, 3],
]

const STARS = [
  [30, 40], [110, 265], [300, 35], [470, 245],
  [565, 35], [180, 15], [420, 260], [10, 150], [260, 200],
]

export default function NodeMap() {
  return (
    <svg
      viewBox="0 0 600 300"
      className="node-map"
      role="img"
      aria-label="Career path: Lovely Professional University, to Sciforma, to Planview, to what's next"
    >
      {STARS.map(([x, y], i) => (
        <circle key={`star-${i}`} cx={x} cy={y} r="1.4" className="node-map__star" />
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

      {NODES.map((n, i) => (
        <g key={`node-${i}`} className="node-map__node" style={{ animationDelay: `${i * 0.4}s` }}>
          <circle cx={n.x} cy={n.y} r="12" className="node-map__ping" style={{ animationDelay: `${i * 0.6}s` }} />
          <circle cx={n.x} cy={n.y} r="5" className="node-map__dot" />
          <text x={n.x} y={n.y - 20} className="node-map__label">
            {n.label}
          </text>
          <text x={n.x} y={n.y + 30} className="node-map__sub">
            {n.sub}
          </text>
        </g>
      ))}
    </svg>
  )
}
