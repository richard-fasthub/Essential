

/**
 *
 * @author Richie
 */
import java.util.HashMap;
import java.util.Map;

public class WebMap {
    public static void main(String[] args){
        Map<String, String> map = new HashMap<>();
        
        map.put("Tanzania","Zanzibar");
        map.put("Pemba","Unguja");
        map.put("Mbeya","Mwanza");
        System.out.println(map);
        
        map.put("Iringa","Arusha");
        System.out.println(map);
        
        String cap = map.get("Mwanza");
        System.out.println("The capital Mwanza is " +cap);
        
        
        
        
    }
    
}
