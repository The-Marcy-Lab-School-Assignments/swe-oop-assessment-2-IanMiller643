# Section 2 — Short Response

Write your responses directly in this file. Follow markdown formatting guidelines. Check the rubric.md file to see how your short responses will be graded. 

As a quick guide, check the following before submitting:
- [] Answered all parts of every question
- [] No typos or grammar mistakes (use grammarly!)
- [] Accurately uses relevant technical terminology
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Responses are concise and easy to comprehend

---

## Question 1

In your own words, explain what does _encapsulation_ refer to? Why is this concept beneficial when programming? 

Provide a code snippet to illustrate _encapsulation_.

## Response 1
**Encapsulation** refers to the bundling of **data** and the **methods** that access that data into one **object**. This concept is beneficial when programming because it allows our code to be consistent and predictable.

Here's an example of encapsulation:

```js
class Party {
    #people = [];
    constructor(venue, time, endTime) {
        this.venue = venue;
        this.time = time;
        this.endTime = endTime;
    }
    addPerson(person) {
        this.#people.push(person);
        return `${person} has been invited to the party.`;
    }
    getPeople() {
        return [...this.#people];
    }
    details() {
        return `Place: ${this.venue}. Starts at ${this.time}. Ends at ${this.endTime}.`;
    }
}
```
The example above illustrates encapsulation within  the `Party` **class**. The **private** `#people` array is created along with the `addPerson()` and `getPeople()` methods which both access the array in some way. 

---

## Question 2

Explain what the `this` keyword is. Why is the `this` keyword useful?

In the code snippet below, what does `this` refer to?

```js
class Counter {
	constructor() {
		this.count = 0;
	}
  increment() {
    this.count++;
  }
}

const counterA = new Counter();
const counterB = new Counter();

counterA.increment();
counterA.increment();
counterA.increment();

counterB.increment();

console.log(counterA.count);
console.log(counterB.count);
```

## Response 2

The `this` keyword refers to the context in which it is being used in. When used inside of a **method**, it refers to the **object** that is invoking that method. The `this` keyword is useful when we want to create similar objects using **class definitions** or **factory functions**. Instead of having to recreate similar objects multiple times, `this` prevents us from rewriting code for objects.

In the code snippet, `this` refers to each instance of the `Counter` class that is made. When `counterA` invokes the `increment()` method, `this` is referring to `counterA`. When `counterB` invokes the `increment()` method however, `this` refers to `counterB`.

---

## Question 3

In your own words, explain what **polymorphism** means in OOP. Provide an example in code that demonstrates polymorphism.

## Response 3
In **OOP**, **polymorphism** is when two or more **classes** have the same **method** name, but the *functionality* of that method is different between each of the classes.

```js
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
            return 'Added a person to the building.';
        }
    }
    removePerson() {
        if (this.people > 0) {
            this.people--;
            return 'Removed person from building.';
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
            return 'You have been hired!';
        }
    }
    removePerson() {
        if (this.people > 0) {
            this.people--;
            return 'You have been fired!';
        }
    }
}
```
This code demonstrates polymorphism because even though the `Building` class and the `Office` class have the same `addPerson()` and `removePerson()` methods, the **string** that they **return** are different between the two classes.

---

## Question 4

You're building a game where players can raise different digital pets: Cats, Dogs, and Birds. All pets have have a `name`, `energy` level, and `happiness` level and can all `sleep`. Cats have the ability to `hunt`, dogs have the ability to `chase`, and birds have the ability to `fly`.

**Part A:** Describe in words how you would use inheritance to organize these classes.

**Part B:** Explain one advantage of using inheritance here instead of creating three completely separate classes.

## Response 4 

**Part A:** In order to organize these classes with **inheritance**, I would create a `Pet` **parent class** with `name`, `energy`, and `happiness` as its **properties** and `sleep()` as a **method**. I would then create the `Cat`, `Dog`, and `Bird` **subclasses** that **inherit** the properties and methods of the `Pet` class using the `extends` keyword. Finally, the `hunt()` method would be added to the `Cat` class, the `chase()` method would be added to the `Dog` class, and the `fly()` method would be added to the `Bird` class.

**Part B:** Using **inheritance** here rather than creating three separate **classes** prevents us from rewriting code *unnecessarily*. Although the three different types of `Pet` each have their own ability, they all have a `name`, `energy` and `happiness` level along with being able to `sleep`. Inheritance allows us to make **parent class** that has all of these **properties** and **methods** which can be inherited into the `Cat`, `Dog`, and `Bird` **subclasses**. 