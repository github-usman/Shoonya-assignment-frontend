

export const secondToDate = (date)=>{
     // into date conversion from given second in API response
  const newDate = new Date(date * 1000); // in micrso second
  const options = { month: "long", day: "numeric", year: "numeric" }; 
  const formattedDate = newDate.toLocaleDateString("en-US", options); // in month,day,and year formate
  const [monthName, dayWithComma, year] = formattedDate.split(" ");
  const day = dayWithComma.replace(",", ""); // remove comma

  return [monthName,day,year];
}