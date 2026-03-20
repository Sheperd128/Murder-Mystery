function checkPIN() {
    const input = document.getElementById("pinInput").value;
    const errorMsg = document.getElementById("errorMessage");
    const screen = document.getElementById("terminal-screen");

    // The PIN is the time Marcus entered the server room (23:45)
    if (input === "2345") {
        screen.innerHTML = `
            <p style="color: white; font-weight: bold;">> OVERRIDE ACCEPTED.</p>
            <p>> DECRYPTING VAULT FRAGMENT...</p>
            <br>
            <h2 style="color: cyan;">FRAGMENT 2/4: NIGHT</h2>
            <br>
            <p>WARNING: Do not share this fragment. Await the other teams to form the Master Protocol.</p>
        `;
    } else {
        errorMsg.innerText = "> ERROR: INVALID TIME SIGNATURE. ACCESS DENIED.";
        document.getElementById("pinInput").value = ""; // Clear the box
    }
}