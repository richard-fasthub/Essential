
/**
 *
 * @author Richie
 */
public class LoopingCodes extends Object{

        String[] months ={"January","February","March","April","May","June","July","August","September","October","November","December"};
        public static void main(String[] args){
         loopIt("Months of the year"); 
         loopIt("Second run");
         loopIt("Third run");           
        }
        static void loopIt(String label){

        System.out.print(label);
        for (int i = 0; 1>label.length(); i++){
            System.out.println("*");

        }
        System.out.println("");
        }
         for (int i=0; i<months.length; i++){
              System.out.println(months[1]);   
        }
   }
