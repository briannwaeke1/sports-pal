/**
 *
 * @returns {string} - today's date in the format of YYYY/MM/DD
 */

export const formatDate = (): string => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  return `${year}-${month}-${day}`;
};
