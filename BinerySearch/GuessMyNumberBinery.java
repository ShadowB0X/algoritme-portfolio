package BinerySearch;

import java.util.Random;
import java.util.Scanner;


public class GuessMyNumberBinery {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Velkommen til 'Guess MY Number'");
        System.out.print("Vælg et tal mellem 1 og 100: ");

        int secret = scanner.nextInt();
        if (secret < 1 || secret > 100) {
            System.out.println("Tallet skal være mellem 1 og 100.");
            scanner.close();
            return;
        }

        System.out.println("\nComputeren gætter med binær cap på 1-100 søgning...");

        int min = 1;
        int max = 100;
        int tries = 0;

        while (min <= max) {
            int guess = (min + max) / 2;   // midten af intervallet
            tries++;
            System.out.println("Gæt #" + tries + ": " + guess);

            if (guess < secret) {
                System.out.println("For lavt.");
                min = guess + 1;           // søg i øverste halvdel
            } else if (guess > secret) {
                System.out.println("For højt.");
                max = guess - 1;           // søg i nederste halvdel
            } else {
                System.out.println("\nKorrekt! Tallet var " + secret + ".");
                System.out.println("Antal forsøg: " + tries);
                break;
            }
        }

        if (min > max) {
            System.out.println("\nNoget gik galt – intervallet blev tomt.");
        }

        scanner.close();
    }
}