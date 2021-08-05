const CapitalizeFirstLetter = (strngs) => {
  console.log(strngs);
  let strngsArr = strngs.split(" ");
  for (let i = 0; i < strngsArr.length; i++) {
    strngsArr[i] =
      strngsArr[i].charAt(0).toUpperCase() + strngsArr[i].substring(1);
  }
  return strngsArr.join(" ");
};
export { CapitalizeFirstLetter };
