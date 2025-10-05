// Dynamic title updater for more personality
const titles = [
  "Him | AI Engineer & Researcher 🧠",
  "Him | Building AI That Matters ⚡",
  "Him | From Research to Reality 🚀",
  "Him | Neural Networks Specialist 🎯",
  "Him | AI Solutions Engineer 💡"
];

let currentTitleIndex = 0;

function updateTitle() {
  document.title = titles[currentTitleIndex];
  currentTitleIndex = (currentTitleIndex + 1) % titles.length;
}

// Change title every 3 seconds when tab is not visible
let titleInterval;

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Tab is hidden - start cycling titles
    titleInterval = setInterval(updateTitle, 3000);
  } else {
    // Tab is visible - stop cycling and reset to main title
    clearInterval(titleInterval);
    document.title = "Him | AI Engineer & Researcher - Neural Spark Portfolio";
  }
});

// Add a subtle notification-style update when returning to tab
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    // Flash a welcome back message briefly
    const originalTitle = document.title;
    document.title = "👋 Welcome back!";
    setTimeout(() => {
      document.title = originalTitle;
    }, 2000);
  }
});