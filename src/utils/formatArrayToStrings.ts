export const formatArrayToStrings = (array: Record<string, string>[]) => {
  const key = Object.keys(array[0])[0];
  return array.map((obj) => obj[key]).join(", ");
};
