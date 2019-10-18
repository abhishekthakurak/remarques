export function getCreatedAt () {
  const dateObj = new Date()
  const month = dateObj.getUTCMonth() + 1 // months from 1-12
  const day = dateObj.getUTCDate()

  return month + '/' + day
}
