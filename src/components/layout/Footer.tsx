export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display font-bold text-lg text-[#f1f0eb]">
          Saumitra<span className="text-[#f59e0b]">.</span>
        </p>
        <p className="text-[#8b8ba7] text-sm font-body">
          © {year} Saumitra Panchal. Built with Next.js & TypeScript.
        </p>
        <div className="flex items-center gap-4">
          {[
            { href: "https://github.com/InsertMusicHere", label: "GitHub" },
            { href: "https://www.linkedin.com/in/saumitrapanchal", label: "LinkedIn" },
            // { href: "https://www.instagram.com/chayachitra_grapher/?hl=en", label: "Instagram" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8b8ba7] hover:text-[#f59e0b] text-sm font-body transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
