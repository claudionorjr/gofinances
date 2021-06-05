export const formatMoney = (n: string) => {
  return `${n.toLocaleString().split('.')[0]}.${
    Number(n).toFixed(2).split('.')[1]
  }`;
};
