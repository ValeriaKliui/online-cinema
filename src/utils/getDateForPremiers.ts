export const getDateForPremiers = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.toLocaleString("en-EN", { month: "long" });
  return { year, month };
};
