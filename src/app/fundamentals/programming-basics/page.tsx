import ContentLayout from '@/components/content/ContentLayout';
import ContentSection from '@/components/content/ContentSection';
import CodeExample from '@/components/content/CodeExample';

export default function ProgrammingBasicsPage() {
  return (
    <ContentLayout
      title="Programming Basics"
      description="Learn fundamental programming concepts including variables, control structures, functions, and object-oriented programming."
    >
      <ContentSection title="Introduction to Programming">
        <p>
          Programming is the process of creating a set of instructions that tell a computer how to perform a task. Understanding basic programming concepts is essential for becoming a proficient developer.
        </p>
      </ContentSection>

      <ContentSection title="Variables and Data Types">
        <h3 className="text-lg font-medium text-white mb-2">Basic Data Types</h3>
        <p>
          Variables are containers for storing data values. Different programming languages support various data types.
        </p>
        <CodeExample
          title="JavaScript Data Types"
          code={`// Numbers
let age = 25;
let price = 19.99;

// Strings
let name = "John";
let message = 'Hello, World!';

// Booleans
let isActive = true;
let isLoggedIn = false;

// Arrays
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange"];

// Objects
let person = {
  name: "John",
  age: 30,
  isStudent: false
};

// Null and Undefined
let empty = null;
let notDefined = undefined;`}
          description="Example of different data types in JavaScript"
        />
      </ContentSection>

      <ContentSection title="Control Structures">
        <h3 className="text-lg font-medium text-white mb-2">Conditional Statements</h3>
        <p>
          Control structures allow you to make decisions and repeat actions in your code.
        </p>
        <CodeExample
          title="Conditional Statements"
          code={`// if-else statement
let age = 18;
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

// switch statement
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("End of the week");
    break;
  default:
    console.log("Middle of the week");
}

// ternary operator
let isLoggedIn = true;
let status = isLoggedIn ? "Online" : "Offline";`}
          description="Examples of conditional statements"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">Loops</h3>
        <CodeExample
          title="Loop Structures"
          code={`// for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while loop
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

// do-while loop
let num = 0;
do {
  console.log(num);
  num++;
} while (num < 5);

// forEach loop (arrays)
const fruits = ["apple", "banana", "orange"];
fruits.forEach((fruit) => {
  console.log(fruit);
});`}
          description="Examples of different types of loops"
        />
      </ContentSection>

      <ContentSection title="Functions">
        <h3 className="text-lg font-medium text-white mb-2">Function Declaration and Usage</h3>
        <p>
          Functions are reusable blocks of code that perform specific tasks.
        </p>
        <CodeExample
          title="Function Examples"
          code={`// Basic function
function greet(name) {
  return "Hello, " + name + "!";
}

// Arrow function
const add = (a, b) => a + b;

// Function with default parameters
function createUser(name, age = 18) {
  return {
    name,
    age,
    isAdult: age >= 18
  };
}

// Function with rest parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

// Function with callback
function processData(data, callback) {
  // Process data
  const result = data.map(item => item * 2);
  callback(result);
}`}
          description="Examples of different types of functions"
        />
      </ContentSection>

      <ContentSection title="Object-Oriented Programming">
        <h3 className="text-lg font-medium text-white mb-2">Classes and Objects</h3>
        <p>
          Object-oriented programming (OOP) is a programming paradigm based on the concept of objects.
        </p>
        <CodeExample
          title="Class and Object Examples"
          code={`// Class definition
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return "Hello, my name is " + this.name;
  }

  isAdult() {
    return this.age >= 18;
  }
}

// Inheritance
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    return this.name + " is studying";
  }
}

// Creating objects
const person = new Person("John", 30);
const student = new Student("Jane", 20, "A");

// Using methods
console.log(person.greet());
console.log(student.study());`}
          description="Examples of classes and inheritance"
        />
      </ContentSection>

      <ContentSection title="Error Handling">
        <h3 className="text-lg font-medium text-white mb-2">Try-Catch Blocks</h3>
        <p>
          Error handling is important for creating robust applications.
        </p>
        <CodeExample
          title="Error Handling Example"
          code={`function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  } catch (error) {
    console.error("Error:", error.message);
    return null;
  } finally {
    console.log("Division operation completed");
  }
}

// Using the function
console.log(divide(10, 2));  // Output: 5
console.log(divide(10, 0));  // Output: null (with error message)`}
          description="Example of error handling with try-catch"
        />
      </ContentSection>

      <ContentSection title="Best Practices">
        <ul className="list-disc list-inside space-y-2">
          <li>Use meaningful variable and function names</li>
          <li>Write clear and concise code</li>
          <li>Comment your code appropriately</li>
          <li>Follow consistent coding style</li>
          <li>Break down complex problems into smaller parts</li>
          <li>Test your code thoroughly</li>
          <li>Keep your code DRY (Don't Repeat Yourself)</li>
          <li>Use appropriate data structures</li>
          <li>Handle errors gracefully</li>
          <li>Document your code</li>
        </ul>
      </ContentSection>
    </ContentLayout>
  );
} 