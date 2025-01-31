function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const timeString = `${hours}:${minutes}:${seconds}`;
    const dateString = now.toDateString();
  
    document.getElementById("time").textContent = timeString;
    document.getElementById("date").textContent = dateString;
  }
  
  setInterval(updateClock, 1000);
  updateClock(); // Initialize clock immediately
  