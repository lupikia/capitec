class Calculator extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
            <form id="buy-form">
                <h1>Capitec purchase of shares</h1>
                <div class="form-field">
                    <label>Enter your amount</label>
                    <input type="number" name="customer_amount" id="customer_amount" min="0" required>
                </div>
                <button  id="invoke-calculation" type="submit">Calculate</button>
            </form>
        
        `;
    }
}
customElements.define('html-calculator', Calculator);

document.addEventListener("DOMContentLoaded", function(event)
{
    const button = document.getElementById('invoke-calculation');
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const amount = document.getElementById('customer_amount').value;

        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {

                let data =xmlHttp.responseText;
                console.log("got the data", data);
                let lib_calc = new CalculatorShare(amount);
                lib_calc.Calculate_share(data);
            }
        }
            xmlHttp.open("GET", "http://localhost:8080/shares", true); // true for asynchronous
            xmlHttp.send(null);
        });
});