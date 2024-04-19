import axios from 'axios';

const startCron = () => {

  setInterval(async () => {
      try {
        await axios('https://cv-2023.onrender.com');
      } catch (e) {

      }

    },
    600);
};

export default startCron;