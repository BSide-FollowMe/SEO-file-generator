const express = require('express');
const schedule = require('node-schedule');
const { generateSitemap } = require('./sitemapGenerator');
const { generatePlantDetailHTML, generateQuestionDetailHTML } = require('./staticHtmlGenerator');

const app = express();

const port = app.listen(5050);

const job2 = schedule.scheduleJob('*/1 * * * *', function () {
  generateSitemap();
  generatePlantDetailHTML();
  generateQuestionDetailHTML();
  console.log('requested');
});

app.listen(port, function () {
  console.log('start! express server');
});