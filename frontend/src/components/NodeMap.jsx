const NODES = [
  { x: 45, y: 195, label: 'LPU', sub: "B.Tech CS, '21" },
  { x: 180, y: 95, label: 'Sciforma', sub: 'Intern' },
  { x: 320, y: 185, label: 'Planview', sub: 'Backend Engineer' },
  { x: 460, y: 95, label: 'QuickLend', sub: 'SDE' },
  { x: 585, y: 185, label: 'Interstellar', sub: 'Wherever the stars take' },
]

const EDGES = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
]

const STARS = [
  [30, 40], [110, 265], [300, 35], [470, 245],
  [565, 35], [180, 15], [420, 260], [10, 150], [260, 200],
  [530, 255], [620, 60], [640, 220],
]

export default function NodeMap() {
  return (
    <svg
      viewBox="0 0 660 280"
      className="node-map"
      role="img"
      aria-label="Career path: Lovely Professional University, to Sciforma, to Planview, to QuickLend, to Interstellar — wherever the stars take"
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
              r="12"
              className="node-map__ping"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
            <circle cx={n.x} cy={n.y} r="5" className="node-map__dot" />
            <text x={n.x} y={n.y - 20} className="node-map__label">
              {n.label}
            </text>
            <text x={n.x} y={n.y + 30} className="node-map__sub">
              {n.sub}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
