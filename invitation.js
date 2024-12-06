function replaceContent() {
    const recipientName = document.getElementById("recipientNameInput").value;
    const hostName = document.getElementById("hostNameInput").value;

    document.getElementById("recipientNamePlaceholder").textContent = recipientName;
    document.getElementById("hostNamePlaceholder").textContent = hostName;
}
