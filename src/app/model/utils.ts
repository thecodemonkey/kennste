
  export function chunk(array, size): any[] {
    console.log('array: size: ' + size, array);

    const matrix = [];
    let i;
    let k;

    for (i = 0, k = -1; i < array.length; i++) {
      if (i % size === 0) {
        k++;
        matrix[k] = [];
      }

      matrix[k].push(array[i]);
    }

    return matrix;
  }

  export function random(min, max): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }


  export function randomize(array: any[]): any[] {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
