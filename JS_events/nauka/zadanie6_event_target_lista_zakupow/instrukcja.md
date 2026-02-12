# Zadanie 6: Lista Zakupów - EVENT TARGET

## Cel

Nauczysz się wykorzystywać `e.target` do obsługi zdarzeń na wielu elementach, nawet tych dodanych dynamicznie (delegacja zdarzeń) lub po prostu zbiorczo na liście.

## Krok po kroku

1.  W HTML masz listę `ul` z klasą `shopping-list` i kilka elementów `li`.
2.  Zamiast dodawać `addEventListener` do każdego `li` osobno (jak w zadaniu 3), dodaj **jedno** nasłuchiwanie `click` na rodzica (czyli na `ul`).
3.  Wewnątrz funkcji sprawdź, co dokładnie kliknięto:
    ```javascript
    lista.addEventListener("click", (e) => {
      // Sprawdź czy to LI
      if (e.target.tagName === "LI") {
        // ...
      }
    });
    ```
4.  Jeśli kliknięto w `LI`, przełącz mu klasę `.done` (w CSS ta klasa powinna przekreślać tekst i zmieniać kolor na szary).
    - Użyj `e.target.classList.toggle('done')`.

## Zaleta

Dzięki temu, jeśli w przyszłości dodasz nowe elementy do listy za pomocą JS, one również będą działać bez dodawania nowych nasłuchiwaczy! To jest potęga `e.target` i delegacji.
