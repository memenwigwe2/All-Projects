const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".key-checkbox input");

let allKeys = [], 
audio = new Audio("tunes/a.wav");

const playTune = (Key) => {
    audio.src = `tunes/${Key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${Key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
}

pianoKeys.forEach(Key => {
    allKeys.push(Key.dataset.key);
    Key.addEventListener("click", () => playTune(Key.dataset.key));
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

const showHideKeys = () => {
    pianoKeys.forEach(Key => Key.classList.toggle("hide"));
}

const pressedKey = (e) => {
    if(allKeys.includes(e.key)) playTune(e.key);
}

keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);