let modal = document.getElementById("modal");
modal.innerHTML = ` <!-- Pay Salary Modal  -->
<div class="paySalaryModal" id="paySalaryModal">
    <div class="mainPaySalaryModal">
        <div class="p_s_modal_head">
            <h3>Pay Salary</h3>
            <ion-icon name="close-circle-outline" id="paySalaryModalClose"></ion-icon>
        </div>
        <hr>
        <div class="modalBody">
            <div class="paySalaryDate">
                <label for="date">Date:</label>
                <input type="datetime-local" name="date" id="" value="mm/dd/YYYY-MM-DD">
            </div>
            <div class="riderSelect">
                <label for="dropdown">Rider:</label>
                <select>
                    <option value="Faruk">Faruk</option>
                    <option value="Nazim">Nazim</option>
                    <option value="Bacchu">Bacchu</option>
                </select>
            </div>
            <div class="amountInput">
                <label for="amount">Salary Amout:</label>
                <input type="text" name="amout" id="" placeholder="Enter Your Salary Amount">
            </div>
            <div class="noteArea">
                <label for="note">Note:</label>
                <textarea type="text" name="amout" id="" placeholder="Leave your note here..."></textarea>
            </div>
            <div class="payBy">
                <label for="note">Pay by:</label>
                <select>
                    <option value="Cash">Cash</option>
                    <option value="bKash">bKash</option>
                    <option value="Nagad">Nagad</option>
                    <option value="Rocket">Rocket</option>
                </select>
            </div>
        </div>

        <button type="submit" id="payNow">Pay Now</button>
    </div>
</div>`;
