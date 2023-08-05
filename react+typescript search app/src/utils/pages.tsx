export const getPageCount = (limit: number) => {
  return Math.ceil(100 / limit);
};

export const getPagesArray = (totalPages: number) => {
  const result = [];

  for (let i = 0; i < totalPages; i++) {
    result.push(i + 1);
  }

  return result;
};
