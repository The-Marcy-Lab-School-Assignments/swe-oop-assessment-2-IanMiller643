class Building {
    constructor(floors, people, capacity) {
        this.floors = floors;
        this.people = people;
        this.capacity = capacity * floors;
    }
    get amountOfFloors() {
        return `This building has ${this.floors} floors.`;
    }
    get buildingCapacity() {
        return `This building can hold ${this.capacity} people.`;
    }
    addPerson() {
        if (this.people < this.capacity) {
            this.people++;
            return `Added a person to the building.`;
        }
    }
    removePerson() {
        if (this.people > 0) {
            this.people--;
            return `Removed person from building.`;
        }
    }
}

class Office extends Building {
    constructor(floors, people, capacity) {
        super(floors, people, capacity);
    }
    addPerson() {
        if (this.people < this.capacity) {
            this.people++;
            return `You have been hired!`;
        }
    }
    removePerson() {
        if (this.people > 0) {
            this.people--;
            return `You have been fired!`;
        }
    }
}