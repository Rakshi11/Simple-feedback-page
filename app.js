document.addEventListener('DOMContentLoaded', () => {
    const feedbackInput = document.getElementById('feedbackInput');
    const addFeedbackButton = document.getElementById('addFeedbackButton');
    const feedbackList = document.getElementById('feedbackList');

    addFeedbackButton.addEventListener('click', () => {
        const feedbackText = feedbackInput.value.trim();
        if (feedbackText !== '') {
            const tableRow = document.createElement('tr');
            const tableData = document.createElement('td');
            tableData.textContent = feedbackText;
            tableRow.appendChild(tableData);
            feedbackList.appendChild(tableRow);
            feedbackInput.value = '';
        } else {
            alert('Please enter a feedback before adding.');
        }
    });
});