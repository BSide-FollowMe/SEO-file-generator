const { getAllPlantIds, getAllQuestionIds, getPlantDetailHTML, getQuestionDetailHTML } = require('./api');
const fs = require('fs');

exports.generatePlantDetailHTML = async () => {
  const plants = await getAllPlantIds();
  console.log('asdf');
  fs.rmdir('public/plant', { recursive: true }, (err) => {
    if (err) console.log(err);
  });
  fs.mkdir('public/plant', { recursive: true }, (err) => {
    if (err) console.log(err);
  });
  plants.forEach(async (plantId) => {
    const res = await getPlantDetailHTML(plantId);
    fs.appendFile(`public/plant/${plantId}.html`, res, function (err) {});
  });
};

exports.generateQuestionDetailHTML = async () => {
  const questions = await getAllQuestionIds();
  fs.rmdir('public/qna/detail', { recursive: true }, (err) => {
    if (err) console.log(err);
  });
  fs.mkdir('public/qna/detail', { recursive: true }, (err) => {
    if (err) console.log(err);
  });
  questions.forEach(async (questionId) => {
    const res = await getQuestionDetailHTML(questionId);
    fs.appendFile(`public/qna/detail/${questionId}.html`, res, function (err) {});
  });
};
