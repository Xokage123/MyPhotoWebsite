export default function Transform(date) {
  const transformDate = new Date(date).toDateString();
  return transformDate;
}
