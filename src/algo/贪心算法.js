/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if (height && height.length < 2) return 0;
    let i = 0, j = height.length - 1;
    let area = 0;
    while (i < j) {
        let x = j - i;
        let y = Math.min(height[i], height[j])
        area = Math.max(area, x * y);
        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }
    return area;
}

// console.log(maxArea([1,8,6,2,5,4,8,3,7]));
// console.log(maxArea([1,1]));
// console.log(maxArea([1,2,1]))
// console.log(maxArea([1,3,2,1,1]))

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // if (nums && nums.length === 1) return true;
    let i = 0;
    let size = nums.length
    while (i < nums.length) {
        let j = nums[i];
        let maxJ = -nums[i];
        let lastJ = 0;
        if (nums[i] === 0 && i !== size - 1) {
            return false;
        }
        while (j > 0) {
            let sumCount = nums[i + j] + j
            if (sumCount > maxJ) {
                maxJ = sumCount;
                lastJ = j;
            }
            j--;
        }
        // 接下来的跳跃次数必须大于剩余的格子数
        let jumpNextCount = nums[i + lastJ];
        let syze = size - 1 - (i + lastJ);
        if (jumpNextCount > syze || (jumpNextCount === 0 && syze === 0)) {
            return true;
        }
        i = lastJ + i;
    }
    return false
};

console.log(canJump([2,3,1,1,4]))
console.log(canJump([3,2,1,0,4]))
console.log(canJump([0]))
console.log(canJump([2, 0]))
console.log(canJump([1,0,1,0]))
console.log(canJump([0,1]))
console.log(canJump([2, 0, 0]))








