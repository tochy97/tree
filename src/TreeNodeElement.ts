
export class TreeNodeElement extends HTMLElement {
    static observedAttributes = ["childrenId", "hiddenChildren", "disabled"];
    private displayHolder = "none";

    constructor() {
        // Always call super first in constructor
        super();
        this.addEventListener('click', e => {
            if (this.disabled || !this.childrenId) {
                return;
            }

            if (this.hiddenChildren) {
                document.getElementById(this.childrenId).style.display = this.displayHolder;
                this.removeAttribute('hiddenChildren');
            }
            else {
                this.displayHolder = document.getElementById(this.childrenId).style.display;
                document.getElementById(this.childrenId).style.display = "none";
                this.setAttribute('hiddenChildren', '');
            }
        });
    }

    set hiddenChildren(val) {
        if (val) {
            this.setAttribute('hiddenChildren', '');
        } else {
            this.removeAttribute('hiddenChildren');
        }
    }

    get hiddenChildren() {
        return this.hasAttribute("hiddenChildren");
    }

    get disabled() {
        return this.hasAttribute('disabled');
    }

    set disabled(val) {
        if (val) {
            this.setAttribute('disabled', '');
        } else {
            this.removeAttribute('disabled');
        }
    }

    get childrenId() {
        return this.getAttribute("childrenId");
    }

}

window.customElements.define("tree-node", TreeNodeElement)