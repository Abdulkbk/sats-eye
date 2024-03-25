export const formatNetworkDifficulty = (number: number): string => {
  // Convert the number to exponential notation with 2 decimal places
  const formattedNumber = number.toExponential(2);

  // Return the formatted number
  return formattedNumber;
};
