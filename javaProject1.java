import java.sql.SQLOutput;

public class javaProject1 {
//    Create a new java project, and then create a new file. If using Eclipse (or another IDE) make sure the new class has the main() method in it. After making a file with main(), do the following:
//
//    declare an int variable (firstInt) and assign it the value of 6.
//    declare another int variable (secondInt) and assign it the value of 20.
//    declare another int variable (thirdInt) and don't assign it any value.
//    declare a float variable and assign it the value of 4.4f.
//    declare a boolean value for isCold and set it to false.
//    declare a double value and assign it using the "_" character for group separation.
//    print out the value of each variable using the System.out.println statement.

public  static void main (String args[]){


    int firstint = 6;
    int  secondint = 7;
    int thirdint ;
    int sum = firstint+secondint;
    float fval = 4.4f;
    double  dval = 8.6d;
    boolean isCloud = false;
    int quot = secondint/firstint ;
    int remainder = secondint%firstint ;
    int sum1 = firstint + remainder;




    System.out.println(" firstint"  +  firstint);
    System.out.println("secondint" + secondint);
    System.out.println("float" +  fval);
    System.out.println(isCloud);
    System.out.println(dval);
    System.out.println("Sum = "  + sum);
    System.out.println("quot =" + quot);
    System.out.println("remainder = " + remainder );
    System.out.println( "Sum1 = " + ++sum1);
    }
}
