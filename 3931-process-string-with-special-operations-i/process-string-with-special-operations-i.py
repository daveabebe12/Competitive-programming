class Solution:
    def processStr(self, s: str) -> str:
        result = ""

        for ch in s:
            if 'a' <= ch <= 'z':
                result += ch
            elif ch == '*':
                result = result[:-1] if result else ""
            elif ch == '#':
                result = result + result
            elif ch == '%':
                result = result[::-1]

        return result