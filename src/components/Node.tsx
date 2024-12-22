import React from 'react'

class Node extends HTMLElement {
    static observedAttributes = ["color", "size", "open", "disabled", "visible"]

    get open() {
        return this.getAttribute('open');
    }
    set open(val: string) {
        this.setAttribute('open', val);
        this.toggleOpen();
    }

    get disabled() {
        return this.hasAttribute('disabled');
    }

    set disabled(val) {
        this.setAttribute('disabled', '');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (this.disabled) {
            this.setAttribute('tabindex', '-1');
            this.setAttribute('aria-disabled', 'true');
        } else {
            this.setAttribute('tabindex', '0');
            this.setAttribute('aria-disabled', 'false');
        }
    }
    
    constructor() {
        super();

        this.addEventListener('click', e => {
            if (this.disabled) {
                return;
            }
            this.toggleOpen();
        });
    }

    toggleOpen() {
        // ...
    }
}

customElements.define('tree-node', Node);