class Solution:
    def countMajoritySubarrays(self, nums: list[int], target: int) -> int:
        count = 0
        n = len(nums)
        
        # Iterate over every possible starting point of the subarray
        for i in range(n):
            balance = 0
            
            # Expand the subarray to the right
            for j in range(i, n):
                # +1 if it's the target, -1 otherwise
                balance += 1 if nums[j] == target else -1
                
                # If balance > 0, target is strictly the majority element
                if balance > 0:
                    count += 1
                    
        return count