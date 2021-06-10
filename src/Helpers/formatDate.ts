const formatDate = (date: Date): string => {
  const data = new Date();
  const day = data.getDate().toString();
  const month = (data.getMonth() + 1).toString();
  const year = data.getFullYear();
  return `${day}/${month}/${year}`;
};

export default formatDate;
