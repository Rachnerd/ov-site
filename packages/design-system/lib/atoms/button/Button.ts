import { css, LitElement, unsafeCSS } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { property } from "lit/decorators/property.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
// import buttonStyles from "@ov-site/style/typography/heading-classes.css?inline";

export type HeadingSize = 1 | 2 | 3 | 4 | 5;

/**
 * Button component
 */
@customElement("ov-button")
export class Button extends LitElement {
  static styles = [
    css`
      button {
        cursor: pointer;
        display: inline-block;
        font-weight: 700;
        line-height: 12px;
        position: relative;
        text-align: center;
        transition: all 0.15s linear;
        background-color: #ff7a59;
        border-color: #ff7a59;
        color: var(--ov-background-color);
        border-radius: 3px;
        border-style: solid;
        border-width: 1px;
        font-size: 14px;
        padding: 12px 24px;

        /* background: #2b343c;
        border-color: #2b343c; */
        background-color: var(--ov-font-color);
        border-color: var(--ov-font-color);
        font-size: 19px;
        line-height: 19px;
        font-family: Open Sans;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        margin: 0;
      }
    `,
  ];

  render() {
    /**
     * Both values are parsed by Lit's Number property transformer, so it's "safe" to use unsafeHTML.
     */
    return unsafeHTML(`<button><slot></button>`);
  }
}
