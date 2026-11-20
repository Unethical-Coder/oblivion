const NODES = [
  { x: 55, y: 215, label: 'LPU', sub: "B.Tech CS, '25" },
  { x: 190, y: 95, label: 'Sciforma', sub: 'Intern' },
  { x: 335, y: 205, label: 'Planview', sub: 'Backend Engineer' },
  { x: 475, y: 95, label: 'QuickLend', sub: 'SDE' },
  { x: 595, y: 205, label: 'Interstellar', sub: 'Wherever the stars take' },
]

const EDGES = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
]

const STARS = [
  [30, 45], [115, 270], [300, 30], [470, 255],
  [565, 30], [180, 15], [420, 270], [15, 140], [260, 215],
  [535, 265], [625, 55], [655, 230],
]

export default function NodeMap() {
  return (
    <svg
      viewBox="0 0 680 300"
      className="node-map"
      role="img"
      aria-label="Career path: Lovely Professional University (Class of 2025), to Sciforma, to Planview, to QuickLend, to Interstellar — wherever the stars take"
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
            <text x={n.x} y={n.y + 32} className="node-map__sub">
              {n.sub}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
