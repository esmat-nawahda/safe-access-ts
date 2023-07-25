# 🚀 Safe-Access-TS 🛸
Because handling nested properties shouldn't feel like defusing a bomb.

Ever been on the brink of tears trying to access a deeply nested property? Ever wished for a guardian angel to protect you from the dreaded Cannot read property of undefined errors? 😠

Worry no more! Welcome to the world of safe-access-ts. This TypeScript package makes accessing nested properties a walk in the park! (A very safe park, mind you.) 😌

## Features 🎉
String paths and array paths are equally welcome.
Provide a default value when the target value decides to play hide and seek (i.e., is undefined).
Establish a new value at a given path, even if the path has never been traveled before (we like to think of our module as a kind of digital Christopher Columbus).
And the cherry on the cake: it can delete a value at a given path!

## Installation 💻
```bash
npm install safe-access-ts
```

## Importing 📦
```typescript
import { safeGetProperty, safeSetProperty, safeDeleteProperty } from 'safe-access-ts';
```

## Usage 🎈
### 1. Accessing a property safely 🦺
```typescript
let galaxy = {
  earth: {
    moon: {
      astronaut: 'Neil Armstrong'
    }
  }
};

console.log(safeGetProperty(galaxy, 'earth.moon.astronaut')); // prints: 'Neil Armstrong'
console.log(safeGetProperty(galaxy, 'earth.alien', 'Not Found')); // prints: 'Not Found'
```

We were looking for aliens on Earth, but since we found none, our code continues to run without any alien interference. 👽

### 2. Setting a property 🚀
```typescript
let universe = {
  earth: {
    humans: 7800000000 // approx
  }
};

safeSetProperty(universe, 'earth.aliens', 0);
console.log(safeGetProperty(universe, 'earth.aliens')); // prints: 0
```

Just confirmed, no aliens on Earth! 🌍

### 3. Deleting a property 🗑️
```typescript
let spaceship = {
  fuel: 'Hydrogen',
  destination: 'Mars'
};

safeDeleteProperty(spaceship, 'destination');
console.log(safeGetProperty(spaceship, 'destination', 'No destination set')); // prints: 'No destination set'
```

## Contribution 🤝
We are more than happy to accept contributions to safe-access-ts. This can be in the form of feature requests, bug fixes, code optimization, documentation improvements or even new features!

For code contributions, please:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Commit your changes
4. Create a pull request and describe your changes

## Testing ⚙️
We use Jest for our testing. To run tests, please follow these steps:

1. Clone the repository
2. Install dependencies using npm install
3. Run tests using npm test

## Versioning 📦
For transparency into our release cycle and in striving to maintain backward compatibility, safe-access-ts is maintained under Semantic Versioning guidelines.

## License 📄
safe-access-ts is licensed under the MIT License - see the LICENSE file for details.


And that's it, folks! Now you can access, set, and delete those properties like the rockstar developer you are. Remember, coding isn't just about typing; it's about making the world a better (and less error-prone) place! 🚀
The spaceship is now just aimlessly floating in space, much like our existential crisis on a Monday morning! 🚀

And that's it, folks! Now you can access, set, and delete those properties like the rockstar developer you are. Remember, coding isn't just about typing; it's about making the world a better (and less error-prone) place! 🚀
