const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const rec = new SpeechRecognition();
rec.interimResults = true;
const colors = [
  'aqua',
  'azure',
  'beige',
  'bisque',
  'black',
  'blue',
  'brown',
  'chocolate',
  'coral',
  'crimson',
  'cyan',
  'fuchsia',
  'ghostwhite',
  'gold',
  'goldenrod',
  'gray',
  'green',
  'indigo',
  'ivory',
  'khaki',
  'lavender',
  'lime',
  'linen',
  'magenta',
  'maroon',
  'moccasin',
  'navy',
  'olive',
  'orange',
  'orchid',
  'peru',
  'pink',
  'plum',
  'purple',
  'red',
  'salmon',
  'sienna',
  'silver',
  'snow',
  'tan',
  'teal',
  'thistle',
  'tomato',
  'turquoise',
  'violet',
  'white',
  'yellow',
];
let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

rec.addEventListener('result', (e) => {
  const transcript = [...e.results]
    .map((res) => res[0])
    .map((res) => res.transcript)
    .join('');
  p.textContent = transcript;
  console.log('transcript:', transcript);
  if (e.results[0].isFinal) {
    if (colors.includes(transcript)) {
      document.body.style.background = colors[colors.indexOf(transcript)];
    }
    p = document.createElement('p');
    words.appendChild(p);
  }
});

rec.start();

rec.addEventListener('end', rec.start);
