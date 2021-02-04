let show = function showMessage(params) {
    document.getElementById("message").textContent = params;
}

function changePercent(percentage) {
    document.getElementById("percentage").textContent = `${percentage}% OFF`;
}