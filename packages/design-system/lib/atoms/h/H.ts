import { LitElement, unsafeCSS } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { property } from "lit/decorators/property.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import headingStyles from "../../../css/typography/classes/headings.css?inline";

export type HeadingSize = 1 | 2 | 3 | 4 | 5;

/**
 * Heading component intended for shadow DOM.
 * @attr h 1 | 2 | 3 | 4 | 5
 * @attr as 1 | 2 | 3 | 4 | 5 | undefined
 */
@customElement("ov-h")
export class H extends LitElement {
  static styles = [unsafeCSS(headingStyles)];

  @property({ type: Number })
  size!: HeadingSize;

  @property({ type: Number })
  as?: HeadingSize;

  render() {
    /**
     * Both values are parsed by Lit's Number property transformer, so it's "safe" to use unsafeHTML.
     */
    return unsafeHTML(
      `<h${this.size} class="h${this.as ?? this.size}"><slot></h${this.size}>`
    );
  }
}
