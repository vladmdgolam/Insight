export function zeroAppend(time) {
  if (time < 10) return "0" + time
  else return time
}

export function getTotalTimeForDay(day, tabs) {
  var total
  var summaryTimeList = tabs.map(function(a) {
    return a.days.find(s => s.date === day).summary
  })
  total = summaryTimeList.reduce(function(a, b) {
    return a + b
  })
  return total
}

export function getArrayTime(summaryTime) {
  var days = Math.floor(summaryTime / 3600 / 24)
  var totalHours = summaryTime % (3600 * 24)
  var hours = Math.floor(totalHours / 3600)
  var totalSeconds = summaryTime % 3600
  var mins = Math.floor(totalSeconds / 60)
  var seconds = totalSeconds % 60

  days = zeroAppend(days)
  hours = zeroAppend(hours)
  mins = zeroAppend(mins)
  seconds = zeroAppend(seconds)

  return { days: days, hours: hours, mins: mins, seconds: seconds }
}
