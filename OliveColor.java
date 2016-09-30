/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package olive;

/**
 *
 * @author Richie
 */
public enum OliveColor {
    

    PURPLE("Purple", 0x2E0854), BLACK("Black", 0x000000), GREEN("Green", 0x00FF00);

    String name;
    long color;

    OliveColor(String name, long color) {
        this.name = name;
        this.color = color;
    }

    @Override
    public String toString() {
        return name;
    }
}

    
}
