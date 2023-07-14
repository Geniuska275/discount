function useDiscount(price, percent) {
  const discountprice = (percent / 100) * price;
  const result = price - discountprice;
  return result;
}

module.exports = {useDiscount};
