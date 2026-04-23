/**
 * Minimal line splitter: wraps each visual line of an element in its own span,
 * so GSAP can translate them independently for a "curtain lift" reveal.
 *
 * It works by inserting temporary <span> words, measuring their offsetTop,
 * grouping words that share a top into a line <span>, and then replacing the
 * element's content.
 */
export class SplitText {
  lines: HTMLElement[] = [];
  private original: string;

  constructor(
    private el: HTMLElement,
    _opts: { type: 'lines' } = { type: 'lines' },
  ) {
    this.original = el.innerHTML;
    this.split();
  }

  private split() {
    const text = this.el.textContent ?? '';
    const words = text.split(/(\s+)/);

    this.el.textContent = '';

    const wordSpans: HTMLSpanElement[] = [];
    words.forEach((w) => {
      if (w.trim() === '') {
        this.el.appendChild(document.createTextNode(w));
        return;
      }
      const span = document.createElement('span');
      span.textContent = w;
      span.style.display = 'inline-block';
      this.el.appendChild(span);
      wordSpans.push(span);
    });

    // Group by offsetTop
    const linesMap = new Map<number, HTMLSpanElement[]>();
    wordSpans.forEach((span) => {
      const top = Math.round(span.offsetTop);
      if (!linesMap.has(top)) linesMap.set(top, []);
      linesMap.get(top)!.push(span);
    });

    const sortedTops = Array.from(linesMap.keys()).sort((a, b) => a - b);

    this.el.textContent = '';

    sortedTops.forEach((top) => {
      const line = document.createElement('span');
      line.className = 'split-line';
      line.style.display = 'block';
      const items = linesMap.get(top)!;
      items.forEach((span, i) => {
        line.appendChild(span);
        if (i < items.length - 1) line.appendChild(document.createTextNode(' '));
      });
      this.el.appendChild(line);
      this.lines.push(line);
    });
  }

  revert() {
    this.el.innerHTML = this.original;
  }
}
