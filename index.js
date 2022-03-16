const Renter = require('./renter')
const House = require('./house')
const Landlord = require('./landlord')

const colors = require('colors')


const birol = new Renter("Birol", "Yilmaz", "Birol@yilmaz.com")
const ahmetAmca = new Landlord("Ahmet", "Arican", "ahmet@kralevsahibi.com");
const asti = new House("Cati kat",
    {
        street: "asti sokak",
        apartmentNumber: "10",
        houseNumber: "15",
        postCode: "30789"
    },
    ahmetAmca,
    80
);
const emek = new House("Cati kat",
    {
        street: "Emek sokak",
        apartmentNumber: "88",
        houseNumber: "7",
        postCode: "12332"
    },
    ahmetAmca,
    100
);


ahmetAmca.addHouse(asti)
ahmetAmca.addHouse(emek)


birol.askForAppointment("25.03.2022", asti);
birol.askForAppointment("07.05.2022", asti);
birol.askForAppointment("20.06.2022", emek);


function showAppointments(renter) {
    renter.appointments.forEach(printAppointments)
}

function printAppointments(appointment) {
    console.log(`${colors.blue(appointment.renter.name)} ${colors.blue(appointment.renter.surname)} have an appointment on ${colors.yellow(appointment.date)} at ${colors.yellow(appointment.house.adress.street)}, apartment number: ${colors.yellow(appointment.house.adress.apartmentNumber)}, house number: ${colors.yellow(appointment.house.adress.houseNumber)} with ${colors.bgRed(appointment.house.landlord.name)} ${colors.bgRed(appointment.house.landlord.surname)}
        `)
}


showAppointments(birol)
