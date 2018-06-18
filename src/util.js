/**
 * Helper function to delay some time to excution other jobs
 * See: https://medium.com/@bluepnume/even-with-async-await-you-probably-still-need-promises-9b259854c161
 * @param {number} time
 */
export const delay = time => {
  return new Promise(resolve => setTimeout(resolve, time));
};
