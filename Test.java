// import java.util.*;
// class Test{
//     public static void main(String[] args){
//         Scanner sc = new Scanner(System.in);
//         String s = sc.next();
//         findPalindromeCount(s);
//     }
//     public static void findPalindromeCount(String s){
//         int ans=0;
//         for(int i=0;i<s.length();i++){
//             for(int j=i+1;j<s.length();j++){
//                 if(isPal(s.substring(i,j+1))) {
//                     ans+=1;
//                     System.out.println(s.substring(i,j));
//                 }
//             }
//         }
//         System.out.println(ans);
//     }
//     public static boolean isPal(String s){
//         int i=0;
//         int j=s.length()-1;
//         while(i<j){
//             if(s.charAt(i)!=s.charAt(j)) return false;
//             i++;
//             j--;
            
//         }
//         return true;
//     }
// }

