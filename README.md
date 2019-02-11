# Oefening 1: Blad –steen –schaar
## Algemeen stappenplan. 
1. Vraag de gebruiker om zijn keuze via een prompt : blad, steen, schaar. 
2. Laat de computer een random getal genereren tussen 0 en 1. Als dit getal <=0.33  dan is de keuze van de computer blad, 0.34<= getal <=0.66 dan steen, anders schaar.
3. Maak een functie die het resultaat berekent. De functie heeft 2 argumenten : de keuze van de gebruiker en de keuze van de computer. De functie retourneert:
    - het resultaat is een gelijkspel (als beide hetzelfde zijn)
    - Steen wint
    - Blad wint
    - Schaar wint
4. Roep de functie aan en toon het resultaat in de console.

## Gedetailleerd stappenplan
1. Declareer een variabele met de naam keuzeGebruiker.
2. Stel de variabele gelijk aan het antwoord dat we krijgen van de gebruiker op de vraag "Kies je blad, steen of schaar?"
3. Declareer een variabele met de naam keuzeComputer.
4. Genereer een random getal tussen 0 en 1. Dit random getal moet vertaald worden naar een random keuze tussen blad, steen of schaar. Hoe moet dit gebeuren? 
    1. Als het random getal ligt tussen 0 en 0.33, dan krijgt keuzeComputer de waarde "blad".
    2. Als het random getal ligt tussen 0.34 en 0.66, dan krijgt keuzeComputer de waarde "steen".
    3. Als het random getal ligt tussen 0.67 en 1, dan krijgt keuzeComputer de waarde "schaar".
5. Declareer een functie vergelijk(). De functie heeft 2 parameters: keuze1 en keuze2. 
6. Maak gebruik van een if binnen deze functie, zodat de functie "Het is een gelijkspel" retourneert als beide parameters gelijk zijn aan elkaar.
7. Wat als **keuze1 gelijk is aan "steen"**? In dat geval: 
    1. als keuze2 gelijk is aan "schaar", dan wint "steen".
    2. als keuze2 gelijk is aan "blad", dan wint "blad".
8. Wat als *keuze1 gelijk is aan "blad"*? In dat geval:
    1. als keuze2 gelijk is aan "steen", dan wint "blad".
    2. als keuze2 gelijk is aan "schaar", dan wint "schaar".
9. Wat als *keuze1 gelijk is aan "schaar"*? In dat geval:
    1. als keuze2 gelijk is aan "steen", dan wint "steen".
    2. als keuze2 gelijk is aan "blad", dan wint "schaar".
10. Roep de functie op. Maak gebruik van de variabelen keuzeGebruiker en keuzeComputer als argumenten.
11. Speel het spel.
