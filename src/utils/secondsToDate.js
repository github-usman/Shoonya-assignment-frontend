/**
 * Convert a timestamp in seconds to an array with month name, day, and year.
 * @param {number} date - The timestamp in seconds.
 * @returns {Array<string>} An array containing the month name, day, and year.
 */
export const secondsToDate = (date) => {
  const newDate = new Date(date * 1000); // Convert seconds to milliseconds
  const options = { month: "long", day: "numeric", year: "numeric" }; 
  const formattedDate = newDate.toLocaleDateString("en-US", options); // Format the date
  const [monthName, dayWithComma, year] = formattedDate.split(" ");
  const day = dayWithComma.replace(",", ""); // Remove comma from day

  return [monthName, day, year];
};
