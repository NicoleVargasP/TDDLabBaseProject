function getDecimalPlaces(number) {
  const [coefficient, exponent = "0"] = number.toString().split("e");
  const fractionalDigits = coefficient.split(".")[1]?.length || 0;

  return Math.max(0, fractionalDigits - Number(exponent));
}

function sumar(a, b) {
  const decimalPlaces = Math.max(getDecimalPlaces(a), getDecimalPlaces(b));

  return Number((a + b).toFixed(decimalPlaces));
}

export default sumar;
