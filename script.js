const counter = document.getElementById('counter');
const counterContainer = document.getElementById('counter-container');
const [image] = document.getElementsByTagName("img");

let now = new Date();
const dateTravel = new Date(2022, 2, 18, 18, 0, 0, 0);

const oneDayMillisecond = 86400000;
const oneHourMillisecond = 3600000;
const oneMinuteMillisecond = 60000;
const oneSecondMillisecond = 1000;

const func = () => {
  const isAfterTravel = now > dateTravel;
  let timeDiffMilliseconds = isAfterTravel ? 0:now - dateTravel;
  
  const days = Math.floor(timeDiffMilliseconds / oneDayMillisecond);
  timeDiffMilliseconds -= (days * oneDayMillisecond);

  const hours = Math.floor(timeDiffMilliseconds / oneHourMillisecond);
  timeDiffMilliseconds -= (hours * oneHourMillisecond);

  const minutes = Math.floor(timeDiffMilliseconds / oneMinuteMillisecond);
  timeDiffMilliseconds -= (minutes * oneMinuteMillisecond);

  const seconds = Math.floor(timeDiffMilliseconds / oneSecondMillisecond);
  timeDiffMilliseconds -= (seconds * oneSecondMillisecond);

  const milliseconds = timeDiffMilliseconds;

  counter.innerText = `${days} DIAS | ${hours} : ${minutes} : ${seconds} : ${milliseconds}`;
  
  now.setMilliseconds(now.getMilliseconds() + 1);

  if(isAfterTravel) {
    counterContainer.style.backgroundColor = "green";
    image.src = "tina.jpeg";
    image.alt = "Tina de cabeça pra baixo";
  } else setTimeout(func,1);
};

func();
