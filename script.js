document.getElementById("connectWallet").addEventListener("click", async () => {
    if (window.ethereum) {
        try {
            await window.ethereum.request({ method: "eth_requestAccounts" });
            alert("Wallet Connected!");
        } catch (error) {
            console.error(error);
            alert("Gagal menghubungkan wallet!");
        }
    } else {
        alert("Metamask belum terpasang!");
    }
});