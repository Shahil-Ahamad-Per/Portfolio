"use client";

import { useState, useEffect } from "react";

export interface TocItem {
  id: string;
  text: string;
  level: number;
  children?: TocItem[];
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function buildTocHierarchy(flatToc: TocItem[]): TocItem[] {
  const result: TocItem[] = [];
  const stack: TocItem[] = [];

  flatToc.forEach((item) => {
    const newItem = { ...item, children: [] };
    while (stack.length > 0 && stack[stack.length - 1].level >= newItem.level) {
      stack.pop();
    }
    if (stack.length === 0) {
      result.push(newItem);
    } else {
      const parent = stack[stack.length - 1];
      if (!parent.children) parent.children = [];
      parent.children.push(newItem);
    }
    stack.push(newItem);
  });

  return result;
}

export function useTableOfContents(
  containerSelector: string,
  enabled: boolean = true
) {
  const [toc, setToc] = useState<TocItem[]>([]);

  useEffect(() => {
    if (!enabled) return;

    const timer = setTimeout(() => {
      const headings = Array.from(
        document.querySelectorAll(
          `${containerSelector} h2, ${containerSelector} h3`
        )
      ) as HTMLElement[];
      const flatToc = headings.map((heading) => ({
        id: heading.id || slugify(heading.innerText),
        text: heading.innerText,
        level: Number(heading.tagName.replace("H", "")),
      }));
      setToc(buildTocHierarchy(flatToc));
    }, 100);

    return () => clearTimeout(timer);
  }, [containerSelector, enabled]);

  return toc;
}
