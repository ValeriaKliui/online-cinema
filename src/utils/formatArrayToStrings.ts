export const formatArrayToStrings = (
  array: Record<string, string>[] | undefined,
) => {
  if (array && array.length) {
    const key = Object.keys(array[0])[0];
    return array.map((obj) => obj[key]).join(", ");
  }
  return "";
};
