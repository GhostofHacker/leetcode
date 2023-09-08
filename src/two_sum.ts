//Leetcode Problem No:1 
//This is a brute force implemation. You can use hashmaps/tables for faster speeds.

console.log(twoSum([2, 7, 11, 15], 9));

function twoSum(nums: number[], target: number): number[] {
    const arr_length = nums.length;
    let l_value : number[] = [];
    for (let n1_step = 0; n1_step < arr_length; n1_step++) {
        for (let n2_step = 0; n2_step < arr_length; n2_step++) {
            if(n1_step !== n2_step) {
                if(target === nums[n1_step] + nums[n2_step]) {
                    return l_value = [n1_step, n2_step];
                }
                else { continue }
            }
        } 
    }
};