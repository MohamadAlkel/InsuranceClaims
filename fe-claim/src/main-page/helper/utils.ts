export const getTotalAmount = (item) =>
  parseFloat(item.processingFee) + parseFloat(item.amount);
