# Driloefeningen

Zie opgave in het script bestand

# Oefening 1: Blad – steen – schaar

## Algemeen stappenplan.

1. Vraag de gebruiker om zijn keuze via een prompt : blad, steen, schaar.
2. Laat de computer een random getal genereren tussen 0 en 1. Als dit getal < 1/3 dan is de keuze van de computer blad, als getal < 2/3 dan is de keuze van de computer steen, anders is de keuze van de computer schaar.
3. Maak een functie die het resultaat berekent. De functie heeft 2 argumenten: de keuze van de gebruiker en de keuze van de computer. De functie vergelijkt de twee keuzes en retourneert een string:
   - Het resultaat is een gelijkspel
   - Steen wint
   - Blad wint
   - Schaar wint
4. Roep de functie aan en toon het resultaat in de console.

## Gedetailleerd stappenplan

1. Declareer een variabele met de naam keuzeGebruiker.
2. Stel de variabele gelijk aan het antwoord dat we krijgen van de gebruiker op de vraag "Kies je blad, steen of schaar?"
3. Declareer een variabele met de naam keuzeComputer.
4. Genereer een random getal tussen 0 en 1. Dit random getal moet vertaald worden naar een random keuze tussen blad, steen of schaar. Hoe moet dit gebeuren?
   1. Als het random getal ligt in het interval [0, 1/3[ dan krijgt keuzeComputer de waarde "blad".
   2. Als het random getal ligt in het interval [1/3, 2/3[ dan krijgt keuzeComputer de waarde "steen".
   3. Als het random getal ligt in het interval [2/3, 1[ dan krijgt keuzeComputer de waarde "schaar".
5. Declareer een functie geefResultaat(). De functie heeft 2 parameters: keuze1 en keuze2.
6. Maak gebruik van een if binnen deze functie, zodat de functie "Het is een gelijkspel" retourneert als beide parameters gelijk zijn aan elkaar.
7. Wat als **keuze1 gelijk is aan "steen"**? In dat geval:
   1. als keuze2 gelijk is aan "schaar", dan wint "steen".
   2. als keuze2 gelijk is aan "blad", dan wint "blad".
8. Wat als **keuze1 gelijk is aan "blad"**? In dat geval:
   1. als keuze2 gelijk is aan "steen", dan wint "blad".
   2. als keuze2 gelijk is aan "schaar", dan wint "schaar".
9. Wat als **keuze1 gelijk is aan "schaar"**? In dat geval:
   1. als keuze2 gelijk is aan "steen", dan wint "steen".
   2. als keuze2 gelijk is aan "blad", dan wint "schaar".
10. Roep de functie aan. Maak gebruik van de variabelen keuzeGebruiker en keuzeComputer als argumenten.
11. Speel het spel.

# Oefening 2: Dragon slayer

In dit spel probeer je een draak te verslaan. Elke beurt sla je de draak en heb je daarbij een kans van 1 op 2 dat je de draak effectief raakt.

- Als je de draak raakt dan breng je de draak schade toe. De schade is een gehele random waarde tussen 1 en 5. Indien de totale schade toegebracht aan de draak groter dan of gelijk is aan 4 ben je gewonnen, anders krijg je een volgende beurt.
- Als je de draak niet raakt, ben je zelf verslagen door de draak.

De beurten volgen elkaar automatisch op.

1. Declareer een **variabele eindeSpel** en initialiseer deze op false.
2. Declareer een **variabele totaleSchade** en initialiseer deze op 0.
3. Schrijf een **parameterloze functie slaDeDraak**. Bepaal in deze functie of de draak geraakt wordt (kans 1 op 2). Maak hiervoor gebruik van **Math.random en een if-structuur**.
   - indien de draak geraakt wordt retourneert de funtie een willekeurig geheel getal tussen 1 en 5.
   - indien de draak niet geraakt wordt retourneert deze functie 0.
4. Maak gebruik van een **while-lus** om de opeenvolgende beurten van het spel te implementeren. De lus wordt uitgevoerd **_zolang het einde van het spel niet is bereikt._** In de lus:
   - roep de functie slaDeDraak aan
   - verwerk het resultaat van de functie aanroep, maak gebruik van een **if-structuur**
     - indien het resultaat gelijk is aan 0 dan is het spel ten einde en verschijnt er op de console dat je werd verslaan door de draak
     - indien het resultaat groter is dan 0 dan moet de totaleSchade die je de draak reeds toebracht verhoogd worden met dit resultaat
       - als de totale schade groter of gelijk aan 4 is het spel ten einde en dan verschijnt er op de console dat je de draak versloeg

# Oefening 3: Eendjes

Eendjes vissen is een gekend spel van op de kermis. De eendjes komen één per één voorbij en de speler kan er een aantal uit vissen. Elk eendje heeft als waarde een geheel getal tussen 1 en 5.

In deze opgave wordt een variant op het klassieke eendjes vissen beschouwd. De speler ziet op voorhand de waarden van alle eendjes die voorbij komen en moet vier opeenvolgende eendjes selecteren om een zo hoog mogelijke score te behalen.  
Bvb, uit de reeks bestaande uit 10 eendjes met waarden 5, 2, 4, 1, 1, 5, 4, 4, 3, 2 moet de speler de vier eendjes vanaf positie 6 vissen om de hoogste score te behalen (5 + 4 + 4 + 3 = 16).

Maak een array met 10 eendjes met de waarden 5, 2, 4, 1, 1, 5, 4, 4, 3, 2 en retourneer de positie van de eerste van 4 opeenvolgende eendjes die samen de hoogste score geven.

Gebruik een functie om deze positie te berekenen en plaats deze in een module. Zorg ervoor dat je de functie exporteert/importeert op de juiste plaats.

**Tip** Om gebruik te maken van een module zal je _index.html_ ook moeten aanpassen.

## Extra:

Vraag de gebruiker om de waarden van 10 opeenvolgende eendjes. Plaats deze in een array en bereken ook kvoor deze array op analoge wijze de startpositie.

**Tip**: geef ook eens een alfanumerische waarde in.

# Oefening 4: Depe pepe taapaal

Op de planeet P spreken de mensen een raar taaltje, namelijk de p-taal.  
Deze is voor ons niet zo moeilijk te leren.  
De taal lijkt sterk op het Nederlands, maar elke klinkercombinatie wordt telkens gevolgd door een ‘p’ en gevolgd door een herhaling van diezelfde klinkercombinatie.  
Zo wordt “koekoek” in de p-taal omgezet in “koepoekoepoek”.  
Klinkercombinaties die omgezet worden bestaan uit 1 of meerdere klinkers (‘a’,‘e’,‘i’,‘o’,‘u’).

Een voorbeeldje:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Als de kat van huis is, dansen de muizen.  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Apals depe kapat vapan huipuis ipis, dapansepen depe muipuizepen.

Maak een **functie vertaal in een module** die een zin als parameter heeft en de zin omgezet in de P-taal retourneert. Vraag de gebruiker naar een zin, voer de functie uit en alert het resultaat.

Probeer deze opgave eens op te lossen enkel gebruik makend van strings. Probeer ze ook eens op te lossen gebruik makend van een array van karakters. (Plaats je tweede oplossing in een aparte module)

Extra: ook de combinatie ij mag je als klinker beschouwen.
