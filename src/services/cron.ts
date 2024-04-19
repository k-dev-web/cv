import axios from 'axios';

const startCron = () => {

  setInterval(async () => {
      try {
        console.log(await axios('https://cv-2023.onrender.com'));
      } catch (e) {
        console.log('tick');
      }

    },
    600);
};

export default startCron;