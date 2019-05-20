public class javaLab5 {


        public static void main(String[] arg)
        {

             anotherMethod();

        }

        public static void anotherMethod() {
            Integer  p = 100;
            Integer n = Integer.valueOf("1000");
//            System.out.println(n);
            if (p.compareTo(n)  >= 0) {
                System.out.println(n + " Big Value");
                int s = n / 2;
                System.out.println(" S is half a big variable");
            } else {
                System.out.println(n + " is not a big value");
                System.out.println("S is small");
            }
        }

        }