import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';
import { CronJob } from 'cron';
import axios from 'axios';

test('renders learn react link', () => {
  render(<App />);
});
const job = new CronJob(
  '*/10 * * * *',
  async ()=> {
    try {
      console.log( await axios('https://cv-2023.onrender.com'));
    }catch(e){
      console.log('tick')
    }
  },
  null,
  true,
  'America/Los_Angeles'
);
job.start();