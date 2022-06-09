const express = require('express');
const schedule = require('node-schedule');
const { generateSitemap } = require('./sitemapGenerator');
const { generatePlantDetailHTML, generateQuestionDetailHTML } = require('./staticHtmlGenerator');

const app = express();

const port = app.listen(5050);

generateSitemap();
generatePlantDetailHTML();
setTimeout(() => {
  generateQuestionDetailHTML();
}, 5000);
//
const job2 = schedule.scheduleJob('50 11,23 * * *', function () {
  generateSitemap();
  generatePlantDetailHTML();
  setTimeout(() => {
    generateQuestionDetailHTML();
  }, 5000);
  console.log('requested');
});

app.listen(port, function () {
  console.log('start! express server');
});
