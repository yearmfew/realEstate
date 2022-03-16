class landlord {
    constructor(name, surname, mail) {
        this.name = name
        this.surname = surname
        this.mail = mail
        this.houses = []
    }

    addHouse(house) {
        this.houses.push(house)
    }

}

module.exports = landlord