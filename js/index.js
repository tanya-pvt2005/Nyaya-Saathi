document.addEventListener('DOMContentLoaded', function() {
    const openModalBtn = document.getElementById('donate');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modal = document.getElementById('paymentModal');
    const overlay = document.getElementById('overlay');
    const paymentMethodSelect = document.getElementById('paymentMethod');
    const creditDebitInfo = document.getElementById('creditDebitInfo');
    const upiInfo = document.getElementById('upiInfo');
    
    // Show the modal
    openModalBtn.addEventListener('click', function() {
        modal.style.display = 'block';
        overlay.style.display = 'block';
    });

    // Hide the modal on clicking the close button
    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    });

    // Hide modal on overlay click
    overlay.addEventListener('click', function() {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    });

    // Toggle between payment options
    paymentMethodSelect.addEventListener('change', function() {
        if (this.value === 'creditCard' || this.value === 'debitCard') {
            creditDebitInfo.style.display = 'block';
            upiInfo.style.display = 'none';
        } else if (this.value === 'upi') {
            upiInfo.style.display = 'block';
            creditDebitInfo.style.display = 'none';
        }
    });

    // Form validation on submit
    document.querySelector('.submit-btn').addEventListener('click', function(e) {
        e.preventDefault();
        const donationAmount = document.getElementById('donation').value;
        const paymentMethod = paymentMethodSelect.value;
        
        if (!donationAmount || donationAmount < 1 || !paymentMethod) {
            alert('Please fill all the required fields.');
            return;
        }
        
        alert('Payment Successful!');
        modal.style.display = 'none';
        overlay.style.display = 'none';
    });
});
