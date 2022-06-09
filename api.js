const axios = require('axios');

exports.getAllPlantIds = async () => {
  try {
    const res = await axios.get(`https://api.plantslang.com/v1/plants?page=0&size=100000`);
    return res.data.data.map((item) => item.id);
  } catch (e) {
    console.log(e);
  }
};

exports.getAllQuestionIds = async () => {
  try {
    const res = await axios.get(`https://api.plantslang.com/v1/questions?page=0&size=100000`);
    return res.data.data.map((item) => item.id);
  } catch (e) {
    console.log(e);
  }
};

exports.getPlantDetailHTML = async (plantId) => {
  try {
    const res = await axios.get(`https://api.plantslang.com/v1/seo/plants/${plantId}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

exports.getQuestionDetailHTML = async (questionId) => {
  try {
    const res = await axios.get(`https://api.plantslang.com/v1/seo/questions/${questionId}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
