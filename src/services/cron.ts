import axios from 'axios';
import { CronJob } from 'cron';

const startCron = () => {
  // const job = CronJob.from({
  //   cronTime: '*/10 * * * *',
  //   onTick: async ()=>{
//      try {
//        console.log(await axios('https://cv-2023.onrender.com'));
//      } catch (e) {
//        console.log('tick');
//      }
//    }
//    ,
//    start: true,
//    timeZone: 'America/Los_Angeles',
//  });

//  job.start();*/
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