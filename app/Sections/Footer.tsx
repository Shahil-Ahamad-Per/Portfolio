export default function Footer() {
  return (
    <footer className="border-t border-sage-200 px-6 py-8 dark:border-slate-600">
      <div className="container mx-auto text-center">
        <a
          href="https://www.dmca.com/r/g70zll2"
          title="DMCA.com Protection Status"
          target="_blank"
          rel="noopener noreferrer"
          className="block cursor-pointer text-charcoal-600 transition-colors duration-300 hover:text-sage-600 dark:text-slate-400 dark:hover:text-gold-400"
        >
          Copyright © {new Date().getFullYear()} Shahil Ahamad. Crafted with
          passion and attention to detail.
        </a>
      </div>
    </footer>
  );
}
