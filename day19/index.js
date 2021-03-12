const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

const getVideo = () => {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((MediaStream) => {
      console.log(MediaStream);
      video.srcObject = MediaStream;
      video.play();
    })
    .catch((err) => {
      console.error(err);
    });
};

getVideo();

const redEffect = (pixel) => {
  const p = { ...pixel };
  for (let i = 0; i < p.data.length; i += 4) {
    p.data[i + 0] = p.data[i + 0] + 100;
    p.data[i + 1] = p.data[i + 1] - 50;
    p.data[i + 2] = p.data[i + 2] * 0.5;
  }
  return p;
};

const rgbSplit = (pixel) => {
  const p = { ...pixel };
  for (let i = 0; i < p.data.length; i += 4) {
    p.data[i - 150] = p.data[i + 0];
    p.data[i + 500] = p.data[i + 1];
    p.data[i - 550] = p.data[i + 2];
  }
  return p;
};

const greenScreen = (pixel) => {
  const p = { ...pixel };
  const levels = {};
  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  for (let i = 0; i < p.data.length; i += 4) {
    const red = p.data[i + 0];
    const green = p.data[i + 1];
    const blue = p.data[i + 2];
    if (
      red >= levels.rmin &&
      green >= levels.gmin &&
      blue >= levels.bmin &&
      red <= levels.rmax &&
      green <= levels.gmax &&
      blue <= levels.bmax
    ) {
      p.data[i + 3] = 0;
    }
  }
  return p;
};

const applyEffect = (pixels) => {
  const filters = {
    none: () => undefined,
    redEffect: (p) => redEffect(p),
    rgbSplit: (p) => rgbSplit(p),
    greenScreen: (p) => greenScreen(p),
  };
  const currentEffect = document.querySelector('.effects input:checked').id;
  const alphaCheck = document.querySelector('.effects .alphacheck').checked;
  const alphaValue = document.querySelector('.effects .alphavalue').value;
  filters[currentEffect](pixels);
  if (alphaCheck === true && currentEffect !== 'none') {
    ctx.globalAlpha = parseFloat(alphaValue);
  } else ctx.globalAlpha = 1;
  ctx.putImageData(pixels, 0, 0);
};

const paintToCanvas = () => {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    const pixels = ctx.getImageData(0, 0, width, height);
    applyEffect(pixels);
  }, 16);
};

const takePhoto = () => {
  snap.currentTime = 0;
  snap.play();
  const data = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', '');
  link.textContent = 'Download Image';
  link.innerHTML = `<img src="${data}" alt="Picture"/>`;
  strip.insertBefore(link, strip.firstChild);
};

video.addEventListener('canplay', paintToCanvas);
