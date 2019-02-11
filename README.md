# Oefening 1: Blad – steen – schaar
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
8. Wat als **keuze1 gelijk is aan "blad"**? In dat geval:
    1. als keuze2 gelijk is aan "steen", dan wint "blad".
    2. als keuze2 gelijk is aan "schaar", dan wint "schaar".
9. Wat als **keuze1 gelijk is aan "schaar"**? In dat geval:
    1. als keuze2 gelijk is aan "steen", dan wint "steen".
    2. als keuze2 gelijk is aan "blad", dan wint "schaar".
10. Roep de functie op. Maak gebruik van de variabelen keuzeGebruiker en keuzeComputer als argumenten.
11. Speel het spel.

# Oefening 2: Dragon slayer
In dit spel moet je de draak verslaan.   
Als je de draak raakt, breng je de draak schade toe.   
De grootte van de schade is een random waarde tussen 1 en 5.   
De draak is verslagen als de totale schade toegebracht aan de draak groter dan of gelijk is aan 4.   
Als je slaat en de draak niet raakt, ben je zelf verslagen door de draak.
1.	Begin met de variabelen te declareren die je zal gebruiken:
    - een variabele slaying  om te controleren of we nog bezig zijn aan het proberen de draak te verslaan. Stel de variabele in op true
    - een variabele youHit  om te controleren of we de draak al dan niet geraakt hebben. Deze variabele moet een random waarde gelijk aan 0 (voor JavaScript is dit false) of 1 (voor JavaScript is dit true) krijgen
    - een variabele damageThisRound  om bij te houden hoeveel schade we de draak tijdens deze ronde hebben toegebracht. Dit moet een random geheel getal tussen 1 en 5 (grenzen inclusief) zijn.
    - een variabele totalDamage  om de totale hoeveelheid schade bij te houden. Stel deze waarde initieel in op 0.
2.	Voeg een while – lus toe die enkel uitgevoerd wordt als de variabele slaying de waarde true heeft: het spel moet blijven doorgaan zolang als we proberen de draak te doden. Zet binnen de lus de variabele slaying voorlopig op false, anders krijg je een oneindige lus.
3.	Voeg aan de while – lus een if – else statement toe die de waarde van de variabele youHit controleert. Wanneer de waarde 1 (true) is, dan moet er een felicitatie weggeschreven worden naar de console, die zegt dat je de draak geraakt hebt. Als de variabele de waarde 0 (false) heeft, dan moet er een boodschap naar de console geschreven worden dat de draak jou verslagen heeft. 
4.	Vervolgens moet damageThisRound opgeteld worden bij totalDamage.    
    Voeg een if – statement toe aan het vorige if – statement om te controleren of de waarde van totalDamage groter is dan 4.    
    Er wordt in dat geval een gepaste boodschap naar de console geschreven (de speler versloeg de draak) en de variabele slaying krijgt de waarde false.   
    Als de variabele totalDamage niet groter dan of gelijk is aan 4, dan moet de variabele youHit opnieuw een random waarde van 0 of 1 krijgen.

## Oefening 3: Eendjes
Eendjes vissen is een gekend spel van op de kermis. De eendjes komen één per één voorbij en de speler kan er een aantal uit vissen. Elk eendje heeft als waarde een geheel getal tussen 1 en 5.  

In deze opgave wordt een variant op het klassieke eendjes vissen beschouwd. De speler ziet op voorhand de waarden van alle eendjes die voorbij komen en moet vier opeenvolgende eendjes selecteren om een zo hoog mogelijke score te behalen.   
Bvb, uit de reeks bestaande uit 10 eendjes met waarden 5, 2, 4, 1, 1, 5, 4, 4, 3, 2 moet de speler de vier eendjes vanaf positie 6 vissen om de hoogste score te behalen (5 + 4 + 4 + 3 = 16).

Maak een array met 10 eendjes met de waarden 5, 2, 4, 1, 1, 5, 4, 4, 3, 2 en retourneer de positie van de eerste van 4 opeenvolgende eendjes die samen de hoogste score geven.

Extra : vraag de gebruiker om  de waarden van 10 opeenvolgende eendje. Plaats deze in de array en bereken de startpositie.

Tip : geef ook eens een alfanumerische waarde in.

## Oefening 4: Depe pepe taapaal
Op de planeet P spreken de mensen een raar taaltje, namelijk de p-taal.    
Deze is voor ons niet zo moeilijk te leren.     
De taal lijkt sterk op het Nederlands, maar elke klinkercombinatie wordt telkens gevolgd door een ‘p’ en gevolgd door een herhaling van diezelfde klinkercombinatie.    
Zo wordt “koekoek” in de p-taal omgezet in “koepoekoepoek”.     
Klinkercombinaties die omgezet worden bestaan uit 1 of meerdere klinkers (‘a’,‘e’,‘i’,‘o’,‘u’).

Een voorbeeldje:     
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Als de kat van huis is, dansen de muizen.     
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Apals depe kapat vapan huipuis ipis, dapansepen depe muipuizepen.      

Schrijf een functie zetOmInPtaal die een nederlandse zin omzet in de P-taal.    
Vertaal eerst de string naar een array van karakters.    
Vraag de gebruiker naar een zin en voer de functie uit.   
Extra : ook de combinatie ij mag je als klinker beschouwen.

