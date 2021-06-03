class CurrentShares extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div id="current-affairs">
        <h2>Capitec current available shares</h2>

        <div class="form-field">
            <h4>Total shares:</h4>
            <p id="share_num">0</p>
        </div>
        <div class="form-field">
            <h4>Last selling price:</h4>
            <p id="price">0</p>
        </div>
        <div class="form-field">
            <h4>Commission</h4>
            <p id="num_commission">0</p>
        </div>
    </div>
        `;
    }
}

customElements.define('html-current-affairs', CurrentShares);