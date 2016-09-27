import java.text.DateFormat;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.GregorianCalendar;

public class MainDate {
    public static void main(String[] args){
        Date d = new Date();
        System.out.println(d);
        
        GregorianCalendar gc = new GregorianCalendar(2009,1,28);
        gc.add(GregorianCalendar.DATE,1);
        Date d2 = gc.getTime();
        System.out.println(d2);
        
        DateFormat df = DateFormat.getDateInstance(DateFormat.FULL);
        System.out.println(df.format(d2));
        
        LocalDateTime ldt = LocalDateTime.now();
        
    }
}
