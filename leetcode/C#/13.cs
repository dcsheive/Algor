public class Solution {
    public int RomanToInt(string s) {
        Dictionary<char, int> numerals = new Dictionary<char, int>();
        numerals.Add('I', 1);
        numerals.Add('V', 5);
        numerals.Add('X', 10);
        numerals.Add('L', 50);
        numerals.Add('C', 100);
        numerals.Add('D', 500);
        numerals.Add('M', 1000);
        int count = 0;
        for (int i = 0; i < s.Length; i++){
            if (i+1 <s.Length && numerals[s[i]] < numerals[s[i+1]]){
                count += (numerals[s[i+1]] - numerals[s[i]]);
                i ++;
                continue;
            }
            count += numerals[s[i]];
        }
        return count;
    }
}