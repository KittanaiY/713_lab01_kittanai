const n = [1,2,3,4,5];
const even = n.filter((num) => num % 2 === 0);
console.log(even);

const tripple = (nums) => {
    const trip = nums.filter((i) => i % 3 === 0);
    return trip**3;
}
// use n and it will return 3**3 = 27
console.log(tripple(n));