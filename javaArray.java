public class javaArray {
    public static void main(String[] args) {
//
//
//        int[] myArray = new int[30];
//
//        for (int i = 0; i < 30; i++)
//            myArray[i] = i;
//        for (int i : myArray)
//            System.out.println(i);
//        for (int i = 0; i < 30; i++)
//            myArray[i] = 2 * (i + 1);
//        for (int i : myArray)
//            System.out.println(i);
//        for (int i = 29; i >= 0; i--)
//            System.out.println(myArray[i]);
//    }
    }

    public class MainFile {
        public static void main(String args[]) {
            //method(30);
            signature(20);
        }

        //    public static void method(int x) {
//        int myArray[] = new int[30];
//        for (int i = 0; i < 30; i++) {
//            myArray[i] = i;
//            if (i % 2 == 0) {
//                System.out.println(i);
//            }
//            if (i % 2 == 1) {
//                continue;
//            }
//
//            if (i == x) {
//                break;
//            }
//
//        }
//    }
        public static int signature(int b) {
            int[] signatureArray = new int[30];
            int total = 0;
            for (int i = 0; i < 30; i++) {
                signatureArray[i] = i;
                if (i % 2 == 1) {
                    System.out.println(i);
                }
                if (i % 2 == 0) {
                    total += i;
                }
                if (i == b) {
                    System.out.println(total);
                }
            }
            return total;
        }
    }
}













