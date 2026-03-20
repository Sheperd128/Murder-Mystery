function checkPIN() {
    const input = document.getElementById("pinInput").value.toUpperCase().trim();
    const errorMsg = document.getElementById("errorMessage");
    const screen = document.getElementById("terminal-screen");

    // Phase 1: Team 2 enters the CTO's time to get their clue
    if (input === "2345") {
        screen.innerHTML = `
            <p style="color: white; font-weight: bold;">> CTO OVERRIDE ACCEPTED.</p>
            <p>> DECRYPTING PHYSICAL BACKUP LOCATION...</p>
            <br>
            <h2 style="color: cyan;">> SECTOR: 03-01-02-12-05 08-15-12-05</h2>
            <br>
            <p>WARNING: Translate the sector code (A=1, B=2...) to locate the physical drive in your room. Secure the password fragment inside it.</p>
            <br>
            <button onclick="location.reload()" style="font-size: 0.8rem;">REFRESH TERMINAL</button>
        `;
    } 
    // Phase 2: All teams combine their thermal prints to spell this
    else if (input === "MIDNIGHTPROTOCOL") {
        screen.innerHTML = `
            <p style="color: white; font-weight: bold;">> MASTER PROTOCOL ACCEPTED.</p>
            <p>> DEAD-MAN SWITCH ACTIVATED.</p>
            <br>
            <p style="color: yellow;">SECURITY OVERRIDE: To view Silas Vance's final confession, you must enter the 4-digit Employee ID of the true mastermind.</p>
            <br>
            <input type="text" id="pinInput" placeholder="####" maxlength="4" autocomplete="off">
            <button onclick="checkPIN()">SUBMIT</button>
            <p id="errorMessage" class="error"></p>
        `;
    } 
    // Phase 3: They realize Dr. Reed is the killer and enter her ID
    else if (input === "8008") {
        screen.innerHTML = `
            <h2 style="color: #0f0;">> ACCESS GRANTED. FINAL CONFESSION UNLOCKED.</h2>
            <div style="background: #111; padding: 15px; border-left: 5px solid #0f0; margin-top: 15px;">
                <p style="color: white; font-family: sans-serif; line-height: 1.6;">
                "If you are reading this, I am dead. Marcus is a paranoid fool, and Eleanor is greedy, but they don't have the nerve to kill me. My heart medication was altered. It takes exactly 30 minutes to kill. It’s Dr. Evelyn Reed. She knows I found out about her embezzlement. Arrest her."
                </p>
            </div>
            <br>
            <h1 style="color: red; text-align:center; animation: blink 1s infinite;">GAME OVER - YOU CAUGHT THE KILLER!</h1>
        `;
    } 
    // Wrong Passcode
    else {
        errorMsg.innerText = "> ERROR: INVALID ENTRY. ACCESS DENIED.";
        document.getElementById("pinInput").value = ""; 
    }
}