// Create a BankAccount constructor function that takes a user's name and balance. Add a method called deposit(amount) that increases the balance and logs the new balance, 
// and another method withdraw(amount) that decreases the balance only if there are enough funds. Create 3 user accounts and simulate deposits and withdrawals.

//Pseudocode: create the function constructor, in the deposit method increase the amount by adding 1 to the current balance and log the new balance, in the withdraw method
// decrease the amount by subtracting 1 from the current amount and log the the new balance, the call the methoed and the constructor outside the constructor to log. 

function BankAccount(name,balance){
    this.name = name;
    this.balance = balance;
    this.deposit = function(amount){
        this.balance += amount;
        console.log(`The new balance is ${this.balance}`);
    }
    this.withdraw = function(amount){
        if(this.balance >= amount){
            this.balance -= amount;
            console.log(`Withdrawal amout is ${this.balance}`);
        }
        else{
            console.log(`Not enough funds`);
        }
    }
}

const userAccount1 = new BankAccount("Rie Riam",5000);
const userAccount2 = new BankAccount("Nene Nean",200);
const userAccount3 = new BankAccount("Alfie Jordyn",3800);
console.log({BankAccount});
// Create an object taskList with a property tasks (an array of task names). Add methods: addTask(task) to add a task, completeTask(task) to remove it, and listTasks() 
// to print all remaining tasks. Test the object with 4–5 tasks and demonstrate the functionality of each method.

//Pseudocode: create an object,create a method of addTask and use .push to add a new task, create another method completedTask and use if statement to find the task that 
// is completed and create a method listTasks and traverse thruogh it to log each task then log the object and call the methods outside the object. 

let taskList = ()=>{
    tasks:[];
    addTask = function(task){
        this.task.push(task);
        console.log(`Add ${task}`);
    }
    completedTask = function(task){
        let index = taskList.tasks.indexOf(task);
        if(index !== -1){
            this.tasks.splice(index, 1);
            console.log(`${task}`);
        }
        else{
            console.log(`No task found`);
        }
    }
    listTasks = function(){
        this.task.forEach(task=>
            console.log(`${task}`) );
    }
};
console.log({taskList});
taskList.addTask("Wake up");
taskList.addTask("Shower");
taskList.addTask("Study");
taskList.addTask("Pray");
taskList.listTasks();
taskList.completedTask("Shower");
taskList.listTasks();

// Create a Student object with name, scores (an array), and a method getAverage() that returns the average score. Add another method hasPassed() that returns true if the 
// average is 50 or more, otherwise false. Create and test this for at least two students.

//Pseudocode: create an object that takes in name and scores, then create a method the returns the average score by 
// 

function Student(name,scores){
    this.name = name;
    this.scores = scores;
    this.getAverage = function(){
        let sum 
    }
}

// Create a ShoppingCart object with a property items (an array of item objects with name and price). Add a method addItem(item) to push new items, and a method 
// getTotal() that returns the total cost of all items in the cart. Add 3 items and print the final total.

//Pseudocode: create an object, create a method addItem and add a new item to it using .push, create another method getTotal and traverse through to get all items and add 
//them then return total, then call the function and log the methods. 

let ShoppingCart = {
    items:[],
    addItem: function(item){
        this.item.push(item);
        console.log(`${item.name} with price ${item.price} addded`);
    },
    getTotal: function(){
        let total = 0;
        for(let i=0; i<item.length; i++){
            total += arr[i];
        }
        return total
    } 
};

ShoppingCart.addItem({name:"Chocolate",price: 10.00});
ShoppingCart.addItem({name:"IceCream",price: 25.50});
ShoppingCart.addItem({name:"MilkShake",price: 8.20});
ShoppingCart.getTotal();

// Create a Movie constructor that takes title, year, and rating. Add a method isClassic() that returns true if the year is before 2000, and a method recommend() that 
// returns a string like "Highly recommended!" if rating is above 8. Create at least 3 movies and call these methods on each.

//Pseudocode: create a constructor, give it the given parameters, create a isClassic method and use if statement to check if the year < 2000 to return true else returns
// false, create another method called recommend and use the if statement to check if the rating is greater than 8 to return highly recommended else retuns not highly
// recommended then create the 3 movies outside the constructor and log them.

function Movie(title,year,rating){
    this.title = title;
    this.year = year;
    this.rating = rating;
    this.isClassic = function(){
        if(this.year<2000){
            return true;
        }
        else{
            return false;
        }
    }
    this.recommend = function(){
        if(this.rating>8){
            return `Highly recommended!`;
        }
        else{
            return `Not highly recommended`;
        }
    }
}

let movie1 = new Movie("The Shadow",1998,4.4);
let movie2 = new Movie("As Good As Dead",2000,9.4);
let movie3 = new Movie("Darby and The Dead",2019,5.9);
console.log(`${movie1.title} (${movie1.year})`);
console.log(`Is classic: ${movie1.isClassic()}`);
console.log(`Recommendation: ${movie1.recommend()}`);
console.log(`\n${movie2.title} (${movie2.year})`);
console.log(`Is classic: ${movie2.isClassic()}`);
console.log(`Recommendation: ${movie2.recommend()}`);
console.log(`\n${movie3.title} (${movie3.year})`);
console.log(`Is classic: ${movie3.isClassic()}`);
console.log(`Recommendation: ${movie3.recommend()}`);
