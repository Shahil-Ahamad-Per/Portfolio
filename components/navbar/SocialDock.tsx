import { FLOATING_SOCIAL_LINKS } from "@/lib/nav-config";

export function SocialDock() {
  return (
    <aside
      aria-label="Social profiles quick dock"
      className="pointer-events-none fixed bottom-8 right-6 z-30 hidden flex-col items-end gap-2.5 xl:flex"
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
            className={`group pointer-events-auto flex h-10 items-center overflow-hidden rounded-full border border-sage-300/80 bg-cream-50/90 px-2.5 shadow-lg backdrop-blur-md transition-all duration-300 ease-out hover:border-sage-500 hover:pr-4 hover:shadow-xl dark:border-slate-700/80 dark:bg-slate-900/90 dark:hover:border-gold-400 ${social.bgColor}`}
          >
            <div className="flex items-center justify-center text-charcoal-700 transition-transform duration-300 group-hover:scale-110 dark:text-slate-200">
              <Icon
                className={`h-4 w-4 ${social.hoverColor} transition-colors duration-300`}
              />
            </div>
            <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-medium text-charcoal-800 opacity-0 transition-all duration-300 ease-out group-hover:ml-2 group-hover:max-w-[120px] group-hover:opacity-100 dark:text-slate-100">
              {social.name}
            </span>
          </a>
        );
      })}
    </aside>
  );
}
