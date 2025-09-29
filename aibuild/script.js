// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('AI Web App Builder initialized');

    // Elements
    const generateBtn = document.getElementById('generateBtn');
    const clearLogBtn = document.getElementById('clearLogBtn');
    const appDescription = document.getElementById('appDescription');
    const modelSelect = document.getElementById('modelSelect');
    const examplesSelect = document.getElementById('examples');
    const statusText = document.getElementById('statusText');
    const progressFill = document.getElementById('progressFill');
    const logContainer = document.getElementById('logContainer');
    const previewFrame = document.getElementById('previewFrame');

    // Event listeners
    generateBtn.addEventListener('click', generateApp);
    clearLogBtn.addEventListener('click', clearLog);
    examplesSelect.addEventListener('change', setExample);

    // Puter API initialization
    initializePuterAPI();

    function generateApp() {
        console.log('Generating app...');
        updateStatus('Generating your app...', 50);
        // Add your app generation logic here
    }

    function clearLog() {
        logContainer.innerHTML = '';
        console.log('Log cleared');
    }

    function setExample() {
        const selectedExample = examplesSelect.value;
        appDescription.value = selectedExample;
        console.log('Example set:', selectedExample);
    }

    function updateStatus(message, progress) {
        statusText.textContent = message;
        progressFill.style.width = `${progress}%`;
    }

    function initializePuterAPI() {
        console.log('Initializing Puter API...');
        try {
            if (typeof puter !== 'undefined' && puter.auth && typeof puter.auth.signIn === 'function') {
                puter.auth.signIn()
                    .then(() => {
                        console.log('Puter API authenticated successfully');
                        updateStatus('Puter API authenticated', 100);
                    })
                    .catch(error => {
                        console.error('Puter API authentication failed:', error);
                        updateStatus('Puter API authentication failed', 0);
                    });
            } else {
                throw new Error('Puter API not available or incorrectly loaded');
            }
        } catch (error) {
            console.error('Error initializing Puter API:', error);
            updateStatus('Error initializing Puter API', 0);
        }
    }

    // Log that the script has fully loaded
    console.log('script.js fully loaded and executed');
});