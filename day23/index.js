const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector('[name="text"]').value;

const popVoices = (e) => {
  voices = e.getVoices();
  voicesDropdown.innerHTML = voices
    .map(
      (voice) => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`,
    )
    .join('');
};

const toggle = (startOver = true) => {
  speechSynthesis.cancel();
  if (startOver) speechSynthesis.speak(msg);
};

const setVoice = (e) => {
  msg.voice = voices.find((voice) => voice.name === e.value);
  toggle();
};

const setOption = (e) => {
  console.log(e.name, e.value);
  msg[e.name] = e.value;
  toggle();
};

speechSynthesis.addEventListener('voiceschanged', (e) => popVoices(e.currentTarget));
voicesDropdown.addEventListener('change', (e) => setVoice(e.currentTarget));
options.forEach((option) => option.addEventListener('change', (e) => setOption(e.currentTarget)));
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));
