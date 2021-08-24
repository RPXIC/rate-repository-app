export const dateParser = (date) => {
  const _date = Date.parse(date)
  const __date = new Date(_date)

  const day = String(__date.getDate())
  const month = String(__date.getMonth())
  const year = __date.getFullYear()

  const _day = day.length === 1 ? `0${day}` : day
  const _month = month.length === 1 ? `0${month}` : month

  return `${_day}.${_month}.${year}`
}