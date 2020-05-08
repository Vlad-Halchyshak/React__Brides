import React from 'react'


export const MaxLengthCr = (maxLength) => (value) => {
  if (value.length > maxLength) return `max lenght is ${maxLength} symbols`
  return undefined

}

export const maxLength50 = value => {
  if (value.length > 50) return "max length - 50 symbols"
  return undefined
}

export const required = value => {
  if (value) return undefined
  return "Oops dude, type or rest"
}
