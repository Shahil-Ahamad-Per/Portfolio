
export default function Footer() {


  return (
    <footer className="py-8 px-6 border-t border-sage-200 dark:border-slate-600">
      <div className="container mx-auto text-center">
        <p className="text-charcoal-600 dark:text-slate-400 hover:text-charcoal-700 dark:hover:text-slate-300 transition-colors duration-300">
        <a
          href="//www.dmca.com/Protection/Status.aspx?ID=98df3e2f-2b7d-432f-a41c-2d3991b77783"
          title="DMCA.com Protection Status"
        >
          Copyright 
          </a>  © {new Date().getFullYear()} Shahil Ahamad. Crafted with passion and attention to detail.
        </p>

      </div>
    </footer>
  );
}
