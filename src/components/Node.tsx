import React from 'react'

class Node extends HTMLElement {
    get open() {
        return this.hasAttribute('open');
    }
    set open(val) {
        this.setAttribute('open', '');
        this.toggleCollapse();
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
            this.toggleCollapse();
        });
    }

    toggleCollapse() {
        // ...
    }
}

window.customElements.define('tree-node', Node);