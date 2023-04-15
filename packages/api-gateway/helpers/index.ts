export const getPaginationData = (
  data: any[],
  pageSize: number,
  pageNumber: number
) => {
  const startIndex = (pageNumber - 1) * pageSize;
  if (data.length < startIndex) return [];
  if (pageSize > data.length) return data;

  return data.slice(startIndex, pageNumber * pageSize);
};
