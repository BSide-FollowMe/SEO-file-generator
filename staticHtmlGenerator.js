const { getAllPlantIds, getAllQuestionIds, getPlantDetailHTML, getQuestionDetailHTML } = require('./api');
const fs = require('fs');

exports.generatePlantDetailHTML = async () => {
  const plants = await getAllPlantIds();
  fs.rmdir('public/plants', () => {});
  fs.mkdir('public/plants', { recursive: true }, (err) => {
    if (err) throw err;
  });
  plants.forEach(async (plantId) => {
    const res = await getPlantDetailHTML(plantId);
    fs.appendFile(`public/plants/${plantId}.html`, res, function (err) {});
  });
};

exports.generateQuestionDetailHTML = async () => {
  const questions = await getAllQuestionIds();
  fs.rmdir('public/questions', () => {});
  fs.mkdir('public/questions', { recursive: true }, (err) => {
    if (err) throw err;
  });
  questions.forEach(async (questionId) => {
    const res = await getQuestionDetailHTML(questionId);
    fs.appendFile(`public/questions/${questionId}.html`, res, function (err) {});
  });
};
