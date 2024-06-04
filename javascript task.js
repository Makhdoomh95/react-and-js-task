
function findPairs(arr) {
    let allPairs = [];
    let uniquePairs = [];
    let uniqueCombos = new Set();

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] + arr[j] === 10) {
                const pair = [arr[i], arr[j]];
                const reversedPair = [arr[j], arr[i]];
                
                allPairs.push(pair);
                const sortedPair = pair.slice().sort().join(',');
                if (!uniquePairs.includes(sortedPair)) {
                    uniquePairs.push(sortedPair);
                }
                if (!uniqueCombos.has(JSON.stringify(pair)) && !uniqueCombos.has(JSON.stringify(reversedPair))) {
                    uniqueCombos.add(JSON.stringify(pair));
                }
            }
        }
    }

    return {
        allPairs: allPairs,
        uniquePairs: uniquePairs.map(pair => pair.split(',').map(Number)),
        uniqueCombos: Array.from(uniqueCombos).map(pair => JSON.parse(pair))
    };
}

const arr = [1, 1, 2, 4, 4, 5, 5, 5, 6, 7, 9];
const pairs = findPairs(arr);
console.log("Output all pairs:");
console.log(pairs.allPairs);
console.log("Output unique pairs only once:");
console.log(pairs.uniquePairs);
console.log("Output the same combo pair only once:");
console.log(pairs.uniqueCombos);