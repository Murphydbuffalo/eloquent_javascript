Object.prototype.deepEqual = function(data) {
  if (typeof this !== 'object' || typeof data !== 'object') {
    return this === data;
  } else {
    for (var key of Object.keys(this)) {
      if (typeof this[key] === 'object') {
        if (key in data) {
          return this[key].deepEqual(data[key]);
        } else {
          return false;
        }
      } else if (this[key] !== data[key]) {
        return false
      }
    }

    return true;
  }
}

var dan = {
  name: 'Dan',
  age: 25,
  hobbies: ['dancing', 'singing badly', 'playing guitar', 'penguins'],
  friends: {
    jon: { name: 'Jon', age: 24, hobbies: ['pooping', 'hockey'] },
    marla: { name: 'Marla', age: 22, hobbies: ['dancing', 'work'] }
  }
};

var danTheMan = {
  name: 'Dan',
  age: 25,
  hobbies: ['dancing', 'singing badly', 'playing guitar', 'penguins'],
  friends: {
    jon: { name: 'Jon', age: 24, hobbies: ['pooping', 'hockey'] },
    marla: { name: 'Marla', age: 22, hobbies: ['dancing', 'work'] }
  }
};

var dannyBoy = {
  name: 'Dan',
  age: 25,
  hobbies: ['dancing', 'singing so well!', 'playing guitar', 'penguins'],
  friends: {
    jon: { name: 'Jon', age: 24, hobbies: ['pooping', 'hockey'] },
    marla: { name: 'Marla', age: 22, hobbies: ['dancing', 'work'] }
  }
};

var different = {hi: 'Hi'};

console.log(dan.deepEqual(danTheMan));
console.log(dan.deepEqual(dannyBoy));
console.log(dan.deepEqual(different));
console.log(dan.deepEqual(dan));
