export const formatPrice = (price: any, currency = "NGN") => {
  const formatter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency,
  });

  return formatter.format(price);
};
