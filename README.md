# 1. Práce s DOMem
Tvým úkolem je napsat kód, který pomocí čistého JavaScriptu a operací s elementy v DOMu
(bez knihoven jako je Bootstrap, Vue.js, připravených (cizích) skriptů, atd.) vykreslí funkční
komponentu accordion. Jak komponenta funguje se můžeš inspirovat třeba zde, napiš ji však
sám/a (bez použití jakékoliv knihovny) pomocí čistého JavaScriptu. Data v komponentě zobraz
z předpřipraveného pole níže.

- Vytvoř si čistou .html stránku, do které přilož (tebou napsaný) .js skript, který
komponentu accordion ve webové stránce vykreslí.

- Veškerý kód v <body>, který kreslí komponentu, by měl být vytvořen pomocí čistého
JavaScriptu a operací s DOMem (např. document.createElement()).

- Texty do komponenty vykresli pomocí JavaScriptu z následující datové struktury (pole).
Komponenta bude mít 3 řádky, když se na daný řádek klikne, rozbalí se popis, který patří
k danému řádku. Do jednotlivých řádků komponenty accordion vypiš title, po
rozkliknutí řádku se rozbalí vždy daný description:
>const data = [
>{ title: "Nadpis 1", description: "Toto je odstavec prvního řádku komponenty accordion" },
>{ title: "Nadpis 2", description: "Toto je odstavec druhého řádku komponenty accordion" },
>{ title: "Nadpis 3", description: "Toto je odstavec třetího řádku komponenty accordion" }
>];

- Takže např. Na prvním řádku bude napsáno “Nadpis 1” a když se na něj klikne, rozbalí
se “Toto je odstavec prvního řádku komponenty accordion”.

- Po kliknutí na řádek komponenty se rozbalí její popis. V tu chvíli se zároveň skryjí
(uzavřou) jiné řádky. Vždy je tedy rozbalen maximálně jeden řádek.

- Po otevření stránky není rozbalen žádný - všechny řádky (jejich popisy) jsou zavřené a
jsou tedy vidět jen jednotlivé titulky.

- Komponentu podle svého uvážení nastyluj.