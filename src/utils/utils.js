const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const calculateCelciusToFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

module.exports = {
  generateRandomNumber,
  calculateCelciusToFahrenheit,
};
