import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, range } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonteCarloService {

  constructor() { }


  /**
   * Generate a random walk with a growth element
   * @param numValues The number of values to generate on a stream
   * @param min The miniumum value that this random number can be
   * @param max The maxiumum value that this random number can be
   */
  random(numValues: number, min: number, max: number) {
    return range(0, numValues).pipe(map(_ => random(min, max)));
  }

  /**
   * Generate a random walk with a growth element on a stream
   * @param numValues The number of values to generate
   * @param initialValue The starting value of the generator
   * @param growth The growth per generation - for monthly take annual growth and divide by 12
   * @param stdev The variability of the period to period change
   */
  grow(numValues: number, initialValue: number, growthPerIteration: number, stdevPerIteration: number) {
    let value = initialValue;
    let oldValue: number;

    return range(0, numValues).pipe(map(_ => {
      const oldValue = value;

      const growthPart = 1 + growthPerIteration;
      const randomPart = 1 + random(-2 * stdevPerIteration, 2 * stdevPerIteration);
      value = value * growthPart * randomPart;

      return oldValue;
    }));
  }
}


function random(min: number, max: number) {
  const diff = max - min;

  const ret = Math.random() * diff + min;
  return ret;
}

