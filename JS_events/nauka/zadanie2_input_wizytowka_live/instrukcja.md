# Zadanie 2: Wizytówka na żywo - INPUT

## Cel

Nauczysz się obsługiwać zdarzenie `input`, które pozwala reagować na każdą zmianę w polu tekstowym (natychmiast, w trakcie pisania).

## Krok po kroku

1.  Mamy formularz z polem `Imie` (`#nameInput`) oraz podgląd wizytówki (`#namePreview`).
2.  Pobierz elementy do zmiennych.
3.  Dodaj nasłuchiwanie zdarzenia `input` na polu tekstowym:
    ```javascript
    poleImie.addEventListener("input", (e) => {
      // ...
    });
    ```
4.  Wewnątrz funkcji:
    - Pobierz aktualną wartość z pola. Możesz to zrobić na dwa sposoby:
      - `poleImie.value`
      - `e.target.value` (bardziej proste, `e.target` to element, który wywołał zdarzenie).
    - Przypisz tę wartość do treści elementu `#namePreview`.
    - Jeśli pole jest puste, wstaw tam jakiś tekst domyślny (np. "Jan Nowak").

## Testowanie

Zacznij pisać w polu. Tekst na wizytówce powinien zmieniać się litera po literze w tym samym czasie.
