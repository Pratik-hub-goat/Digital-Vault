const premiumUser = false;

// 1. Strict Security: Block Right-Clicks on the entire page
document.addEventListener("contextmenu", function(e){
    e.preventDefault();
});

// 2. Strict Security: Block standard keyboard shortcuts (F12, Inspect, Save Page)
document.addEventListener("keydown", function(e) {
    if (e.key === "F12" || 
        (e.ctrlKey && e.shiftKey && e.key === "I") || 
        (e.ctrlKey && e.shiftKey && e.key === "J") || 
        (e.ctrlKey && e.key === "U") ||
        (e.ctrlKey && e.key === "S")) {
        e.preventDefault();
        return false;
    }
});

// 3. Render the Payment Instructions cleanly beneath the artwork
if(!premiumUser){
    const paywall = document.getElementById("paywall");
    paywall.innerHTML = `
    <div class="paywall-section">
        <div class="card" style="border: 2px solid #007bff;">
            <h2 style="color: #10131c;">🔒 Download Master Package</h2>
            <p style="font-size: 14px;">
                You are viewing a secure preview. To download the unwatermarked 4K source file and its generation prompt blueprint string, complete the direct transaction below.
            </p>
            
            <div style="background: #f1f5f9; padding: 12px; border-radius: 10px; margin-bottom: 15px; border: 1px dashed #007bff;">
                <span style="font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: bold; display: block; margin-bottom: 4px;">Direct International Gateway</span>
                <strong style="font-size: 15px; color: #0f172a;">Send $30 via Wise / Remitly / Western Union</strong>
            </div>

            <div style="background: #e0f2fe; padding: 12px; border-radius: 10px; margin-bottom: 15px; cursor: pointer;" onclick="navigator.clipboard.writeText('mitaacharjee84@okicici'); alert('UPI ID Copied to Clipboard!');">
                <span style="font-size: 11px; text-transform: uppercase; color: #0369a1; font-weight: bold; display: block; margin-bottom: 4px;">Target UPI Node (Click to Copy)</span>
                <strong style="font-size: 16px; color: #0369a1;">mitaacharjee84@okicici</strong>
            </div>
            
            <p style="color: #64748b; font-size: 12px; line-height: 1.4;">
                Once paid, share your confirmation receipt screenshot with your outreach manager to receive your private download link instantly.
            </p>
        </div>
    </div>
    `;
}
