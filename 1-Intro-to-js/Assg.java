import java.util.*;

public class Assg {

	public static void main(String args[]) {
	
		Scanner sc = new Scanner(System.in);
        float bill =0;
        System.out.print("Enter your bill: ");
        float unit = sc.nextFloat();
 
        if(unit >0 && unit <100) {
            bill = unit * 5;
        } else if(unit >=100 && unit <200) {
            float dummy = unit-100;
            bill = (100*5) + (dummy *7);
        } else if(unit >=200 && unit <300) {
            float dummy1 = unit - 200;
            bill = (100*5) + (100*7) + (dummy1*10);
        } else if(unit >=300) {
            float dummy2 = unit -300;
            bill = (100*5) + (100*7) + (100*10) + (dummy2*12);
        }

        System.out.println("Your bill is : " + bill + "rupees");

	
	}

}