export default function (initDate) {
  const date = new Date(initDate);
  return `${date.toLocaleString('ru', { day: 'numeric', month: 'long' })}, ${date.getFullYear()}`;
}
