
/**
 *
 * @author Richie
 */
public class ConditionalLogic {
    
    public static void main(String[] args){
        
        int monthNumber = 13;
        
        if (monthNumber >=1 && monthNumber <= 3){
         System.out.println("You ' re in Stage One");
        }
        else if (monthNumber >=1 && monthNumber <= 6){
         System.out.println("You ' re in Stage two"); 
        }
          else if (monthNumber >=1 && monthNumber <= 9){
         System.out.println("You ' re in Stage three"); 
        }
        else if (monthNumber >=1 && monthNumber <= 12){
         System.out.println("You ' re in Stage Four"); 
        }
        else{
            System.out.println("That's an unknown month!");
        }
    }