export default function (days) {
  let previousDate = new Date();
  previousDate.setDate(previousDate.getDate() - days)
  return previousDate

}
