const factorial = (n) => {
  if(n==0)
    return 1;
  else
    return n * factorial(n-1);
}

const main = () => {
  const number = 5;
  console.log(`${number} factorial is = `+ factorial(number));
}

main();