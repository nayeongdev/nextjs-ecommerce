export default function priceFormat(price) {
  if (typeof price !== "number") {
    return price;
  }
  return price.toLocaleString("ko-KR");
}
