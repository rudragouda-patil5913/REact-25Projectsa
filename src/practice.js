const randomNumber = (len) => {
  return Math.floor(Math.random() * len);
};
const hexacolorGenerator = () => {
  const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  let hex = "#";
  for (let i = 0; i < 6; i++) {
      hex += values[randomNumber(values.length)];
      console.log(hex)
  }
};


hexacolorGenerator()