let accountBalance = 10000;

document.getElementById('donation-btn').addEventListener('click', function() {
    toggleSection('donation');
});
document.getElementById('history-btn').addEventListener('click', function() {
    toggleSection('history');
});

function donate(cardNumber, donationName) {
    const donationInput = document.getElementById(`donation-amount-${cardNumber}`);
    const donationAmount = parseInt(donationInput.value);
    const currentDonation = document.getElementById(`donation${cardNumber}`);
    let currentAmount = parseInt(currentDonation.innerText.split(" ")[0]);

    if (isNaN(donationAmount) || donationAmount <= 0 || donationAmount > accountBalance) {
        alert("Invalid Donation Amount.");
        return;
    }

    accountBalance -= donationAmount;
    currentAmount += donationAmount;
    
    // Update account balance and current donation amount
    document.getElementById('account-balance').innerText = `${accountBalance} BDT`;
    currentDonation.innerText = `${currentAmount} BDT`;

    // Update History
    addHistory(donationAmount, donationName);

    // Show success modal
    showModal();
}

function addHistory(amount, name) {
    const historyList = document.getElementById('history-list');
    const listItem = document.createElement('li');
    const date = new Date().toLocaleString();
    listItem.textContent = `${date}: Donated ${amount} BDT to ${name}`;
    historyList.appendChild(listItem);
}

function toggleSection(section) {
    if (section === 'donation') {
        document.getElementById('donation-section').classList.remove('hidden');
        document.getElementById('history-section').classList.add('hidden');
        document.getElementById('donation-btn').classList.add('btn-active');
        document.getElementById('history-btn').classList.remove('btn-active');
    } else {
        document.getElementById('donation-section').classList.add('hidden');
        document.getElementById('history-section').classList.remove('hidden');
        document.getElementById('history-btn').classList.add('btn-active');
        document.getElementById('donation-btn').classList.remove('btn-active');
    }
}

