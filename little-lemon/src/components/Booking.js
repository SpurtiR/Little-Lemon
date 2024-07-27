import React from 'react'
import BookingForm from './BookingForm'
 
export default function Booking(props) {

  console.log("Booking", props)
  return (
    <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
  )
}
