import React from 'react'

export default function Duration ({ className, seconds }) {
  return (
    <time dateTime={`P${Math.round(seconds)}S`} className={className} style={timeStyle}>
      {format(seconds)}
    </time>
  )
}

const timeStyle = {
  fontFamily: '"Gotham SSm" !important',
}

function format (seconds) {
  const date = new Date(seconds * 1000)
  const hh = date.getUTCHours()
  const mm = date.getUTCMinutes()
  const ss = pad(date.getUTCSeconds())
  if (hh) {
    return `${hh}:${pad(mm)}:${ss}`
  }
  return `${mm}:${ss}`
}

function pad (string) {
  return ('0' + string).slice(-2)
}
