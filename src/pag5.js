//import React from 'react';
//const e = require("express")

const dummy_employees = [
    {
        name: "Cinrasela",
        days_worked: 0,
        last_day_worked: -1
    },
    {
        name: "Ionm",
        days_worked: 0,
        last_day_worked: -1
    },
    {
        name: "Andrian",
        days_worked: 0,
        last_day_worked: -1
    },
    {
        name: "Canta",
        days_worked: 0,
        last_day_worked: -1
    },
    {
        name: "Tinmu",
        days_worked: 0,
        last_day_worked: -1
    },
    {
        name: "Bongdan",
        days_worked: 0,
        last_day_worked: -1
    },
    {
        name: "Leinbiuc",
        days_worked: 0,
        last_day_worked: -1
    },
    {
        name: "Menzonfi",
        days_worked: 0,
        last_day_worked: -1
    },
    {
        name: "Manrian",
        days_worked: 0,
        last_day_worked: -1
    },
    {
        name: "Manrina",
        days_worked: 0,
        last_day_worked: -1
    },

]

let current_working_day = 1

function shuffle (array){
    array.sort(() => Math.random() - 0.5)
}


const pick_employees = () => {

   shuffle(dummy_employees)
    if(current_working_day === 11){
        current_working_day = 1
    return }
    let pick1 = Math.floor(Math.random() * 10)
    let pick2 = Math.floor(Math.random() * 10)
   // console.log(pick1, pick2)
    while(pick1 === pick2){
        pick1 = Math.floor(Math.random() * 10)
        pick2 = Math.floor(Math.random() * 10)
        }

        if (dummy_employees[pick1].days_worked < 2 && dummy_employees[pick2].days_worked < 2){
            if (Math.abs(dummy_employees[pick1].last_day_worked - current_working_day) > 1 && Math.abs(dummy_employees[pick2].last_day_worked - current_working_day) > 1 )
            {
                dummy_employees[pick1].days_worked++
                dummy_employees[pick2].days_worked++
                dummy_employees[pick1].last_day_worked = current_working_day
                dummy_employees[pick2].last_day_worked = current_working_day
                current_working_day++
                //console.log('Selected employees:')
                //console.log(dummy_employees[pick1],dummy_employees[pick2])
            }else return pick_employees()
        }else return pick_employees()
    //return dummy_employees[pick1]
    }



export default pick_employees

//console.log(dummy_employees)

