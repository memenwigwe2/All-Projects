document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('start-button');
    const stopButton = document.getElementById('stop-button');
    const clearButton = document.getElementById('clear-button');
    const transcriptTextarea = document.getElementById('transcript');
    const platformSelect = document.getElementById('platform');
    const formattedTextTextarea = document.getElementById('formatted-text');
    const copyButton = document.getElementById('copy-button');

    let recognition;

    startButton.addEventListener('click', startListening);
    stopButton.addEventListener('click', stopListening);
    clearButton.addEventListener('click', clearText);
    copyButton.addEventListener('click', formatAndCopy);

    function startListening() {
        recognition = new webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onresult = function (event) {
            let interimTranscript = "";
            for (let i = event.resultIndex; i < event.results.length; i++) {
                let transcript = event.results[i][0].transcript;
                if (event.results[i].isFinal) {
                    transcriptTextarea.value += transcript + ' ';
                } else {
                    interimTranscript += transcript;
                }
            }
        };

        recognition.onend = function () {
            stopButton.disabled = true;
            startButton.disabled = false;
        };

        recognition.start();

        startButton.disabled = true;
        stopButton.disabled = false;
        clearButton.disabled = false;
    }

    function stopListening() {
        recognition.stop();
        stopButton.disabled = true;
        startButton.disabled = false;
        clearButton.disabled = false;
    }

    function clearText() {
        transcriptTextarea.value = "";
        formattedTextTextarea.value = "";
        clearButton.disabled = true;
    }

    function formatAndCopy() {
        const selectedPlatform = platformSelect.value;
        // Implement your formatting logic based on the selected platform
        // For simplicity, let's just copy the text as is
        formattedTextTextarea.value = transcriptTextarea.value;

        // Copy the text to the clipboard
        formattedTextTextarea.select();
        document.execCommand('copy');

        // Notify the user
        alert("Text copied to clipboard!");
    }
});