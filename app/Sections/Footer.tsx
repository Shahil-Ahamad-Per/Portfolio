export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-sage-200 dark:border-slate-600">
      <div className="container mx-auto text-center">
        <a
          href="https://www.dmca.com/r/g70zll2"
          title="DMCA.com Protection Status"
          target="_blank"
          rel="noopener noreferrer"
          className="text-charcoal-600 dark:text-slate-400 hover:text-sage-600 dark:hover:text-gold-400 transition-colors duration-300 cursor-pointer block"
        >
          Copyright © {new Date().getFullYear()} Shahil Ahamad. Crafted with
          passion and attention to detail.
        </a>
      </div>
    </footer>
  );
}
