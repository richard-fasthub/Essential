

/**
 *
 * @author Richie
 */
import java.util.ArrayList;
import java.util.List;


public class ArrayLists {
    
    public static void main (String[] args){
        
        List<String> list = new ArrayList <>();
        
        list.add("Tanzania");
            list.add("Uganda");
                list.add("Kenya");
                
            System.out.println(list);
           
            list.add("Egypt");
            System.out.println(list);
            
           list.remove(0);
           System.out.println(list);
           
           String state = list.get(1);
           System.out.println("The second state is " + state);
           
           int pos = list.indexOf("Egypt");
           System.out.println("Egypt is at Africa" + pos);
    }
}
