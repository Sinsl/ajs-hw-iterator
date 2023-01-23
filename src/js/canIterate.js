export default function canIterate(obj) {
  return !!obj && !!obj[Symbol.iterator];
}
