const Appointment = require('./appointment')

class Renter {
    constructor(name, surname, mail) {
        this.name = name
        this.surname = surname
        this.mail = mail
        this.phoneNumber = ""
        this.searchedHouseType = {}
        this.appointments = []
    }
    searchHouse() {
        console.log("show the houses that I can rent")
    }
    applyToRentHouse() {

    }

    askForAppointment(date, house) {
        const appointment = new Appointment(date, house, this)
        this.appointments.push(appointment)
    }



}
module.exports = Renter
