
export class TreeNodeElement extends HTMLElement {
    static observedAttributes = ["childrenId", "hiddenChildren", "disabled"];

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

    set childrenId(id: string) {
        this.setAttribute("childrenId", id);
        this.addEventListener('click', e => {
            if (this.disabled || !this.childrenId) {
              return;
            }
            
            if (this.hiddenChildren) {
                document.getElementById(this.childrenId).style.display = "flex";
                this.removeAttribute('hiddenChildren');
            }
            else {
                document.getElementById(this.childrenId).style.display = "none";
                this.setAttribute('hiddenChildren', '');
            }
          });
    }

    get childrenId() {
        return this.getAttribute("childrenId");
    }

}

window.customElements.define("tree-node", TreeNodeElement)