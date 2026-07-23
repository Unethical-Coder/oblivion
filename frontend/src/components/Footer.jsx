export default function Footer({ name }) {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <p>OBLIVION — designed &amp; engineered by {name}</p>
      <p className="footer__year">© {year}</p>
    </footer>
  )
}
