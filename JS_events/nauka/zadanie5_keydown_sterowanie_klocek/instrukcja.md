# Zadanie 5: Sterowanie Klawiaturą - KEYDOWN

## Cel

Nauczysz się obsługiwać zdarzenia klawiatury (`keydown`) i wykorzystywać `e.key` do rozpoznawania wciśniętego klawisza.

## Krok po kroku

1.  W HTML mamy "planszę" (`#gameArea`) i czerwoną kropkę (`#player`).
2.  Styl kropki musi mieć `position: relative` (lub absolute) i ustawione `left`/`top`, abyśmy mogli nią ruszać.
3.  Dodaj nasłuchiwanie zdarzenia `keydown` na całym dokumencie:
    ```javascript
    document.addEventListener("keydown", (e) => {
      // ...
    });
    ```
4.  Stwórz zmienne `x` i `y` przechowujące pozycję (np. `let x = 0; let y = 0;`).
5.  Wewnątrz funkcji sprawdzaj `e.key`:
    - Jeśli `ArrowRight` -> zwiększ x o 10.
    - Jeśli `ArrowLeft` -> zmniejsz x o 10.
    - Jeśli `ArrowUp` -> zmniejsz y o 10.
    - Jeśli `ArrowDown` -> zwiększ y o 10.
6.  Zaktualizuj style elementu `#player` (użyj `transform: translate(...)` dla płynności lub `style.left`/`style.top`).
    - Np. `player.style.transform = "translate(" + x + "px, " + y + "px)";`

## Testowanie

Kliknij w obszar strony (żeby "złapała fokus") i steruj strzałkami. Kropka powinna się przesuwać.
