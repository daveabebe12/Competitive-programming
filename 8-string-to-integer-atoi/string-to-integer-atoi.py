class Solution:
    def myAtoi(self, s: str) -> int:
        i = 0
        n = len(s)
        
        # 1. Ignore leading whitespace
        while i < n and s[i] == ' ':
            i += 1
        
        # 2. Determine sign
        sign = 1
        if i < n and (s[i] == '+' or s[i] == '-'):
            if s[i] == '-':
                sign = -1
            i += 1
        
        # 3. Read digits and build number
        result = 0
        while i < n and s[i].isdigit():
            digit = int(s[i])
            result = result * 10 + digit
            
            # 4. Handle overflow
            if sign * result < -2**31:
                return -2**31
            if sign * result > 2**31 - 1:
                return 2**31 - 1
            
            i += 1
        
        return sign * result