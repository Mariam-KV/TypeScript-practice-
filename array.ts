
const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking']
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];


for (const hobby of person.hobbies) {
    // when we access person.hobbies, TypeScript's inference detects that 
    // hobbies will be an array of strings.that's why this methods are available.
  console.log(hobby.toUpperCase());

}
