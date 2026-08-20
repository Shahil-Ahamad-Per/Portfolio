import { FLOATING_SOCIAL_LINKS } from "@/lib/nav-config";

export function SocialDock() {
  return (
    <aside
      aria-label="Social profiles quick dock"
      className="hidden xl:flex fixed right-6 bottom-8 z-30 flex-col items-end gap-2.5 pointer-events-none"
    >
      {FLOATING_SOCIAL_LINKS.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={`dock-${social.name}`}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className={`pointer-events-auto group flex items-center h-10 bg-cream-50/90 dark:bg-slate-900/90 backdrop-blur-md border border-sage-300/80 dark:border-slate-700/80 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-out overflow-hidden px-2.5 hover:pr-4 hover:border-sage-500 dark:hover:border-gold-400 ${social.bgColor}`}
          >
            <div className="flex items-center justify-center text-charcoal-700 dark:text-slate-200 group-hover:scale-110 transition-transform duration-300">
              <Icon
                className={`h-4 w-4 ${social.hoverColor} transition-colors duration-300`}
              />
            </div>
            <span className="max-w-0 opacity-0 group-hover:max-w-[120px] group-hover:opacity-100 group-hover:ml-2 text-xs font-medium text-charcoal-800 dark:text-slate-100 transition-all duration-300 ease-out whitespace-nowrap overflow-hidden">
              {social.name}
            </span>
          </a>
        );
      })}
    </aside>
  );
}
