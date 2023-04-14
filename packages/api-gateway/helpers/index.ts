export const getPaginationData = (
  data: any[],
  pageSize: number,
  pageNumber: number
) => {
  return data.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
};
