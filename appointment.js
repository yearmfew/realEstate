class Appointment {
    constructor(date, house, renter) {
        this.date = date
        this.house = house
        this.renter = renter
        this.accepted = false
    }

    acceptAppointment() {
        this.accepted = true
    }

    cancelAppointment() {
        // How ?
        // I suppose I need to delete all the object 
        // or some property like this.cancelled = true
    }





}
module.exports = Appointment