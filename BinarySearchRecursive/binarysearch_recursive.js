
/**
 
 * @param {*} search       - værdien der søges efter
 * @param {Array} values   - sorteret array der søges i
 * @param {number} start   - venstre grænse (inkl.)
 * @param {number} end     - højre grænse (inkl.)
 * @param {number} iterations - antallet af iterationer hidtil
 * @param {function} comparator - optional sammenligningsfunktion
 * }
 */

export function binarySearchRecursive(
    search,
    values,
    start,
    end,
    iterations = 0,
    comparator = (a, b) => (a < b ? -1 : a > b ? 1 : 0)
  ) {
    const currentIteration = iterations + 1;
  
    console.group(`Iteration ${currentIteration} | start=${start}, end=${end}`);
  
    if (start > end) {
      console.log("Ingen værdier tilbage. Stopper.");
      console.groupEnd();
  
      return {
        found: false,
        index: -1,
        iterations: currentIteration
      };
    }
  
    const mid = Math.floor((start + end) / 2);
    const midValue = values[mid];
  
    console.log(`Mid index: ${mid}, value: ${midValue}`);
  
    const cmp = comparator(search, midValue);
  
    if (cmp === 0) {
      console.log("Fundet!");
      console.groupEnd();
  
      return {
        found: true,
        index: mid,
        iterations: currentIteration
      };
    }
  
    if (cmp < 0) {
      console.log(`Søger lavere end index ${mid}`);
      console.groupEnd();
  
      return binarySearchRecursive(
        search,
        values,
        start,
        mid - 1,
        currentIteration,
        comparator
      );
    } else {
      console.log(`Søger højere end index ${mid}`);
      console.groupEnd();
  
      return binarySearchRecursive(
        search,
        values,
        mid + 1,
        end,
        currentIteration,
        comparator
      );
    }
  }
  