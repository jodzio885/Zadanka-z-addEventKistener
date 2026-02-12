# Zadanie 7: Zaawansowana logika (Selekcja)

## Cel zadania

Stworzysz mechanizm wyboru "tylko jeden". Jest to bardzo popularny wzorzec w aplikacjach (np. wybór planu abonamentowego, zakładki, menu). Po kliknięciu w element, staje się on "aktywny", a wszystkie pozostałe tracą ten status.

## Kroki do wykonania

1. Otwórz `index.html`. Zobaczysz trzy karty z ofertami cenowymi. Mają one klasę `.plan`.
2. W `skrypt.js` pobierz wszystkie karty (użyj `querySelectorAll('.plan')`).
3. Przeiteruj po liście kart (`forEach`).
4. Do każdej karty dodaj nasłuchiwanie kliknięcia.
5. Wewnątrz funkcji kliknięcia musisz wykonać dwie operacje:
   - **Krok A:** Usuń klasę `active` ze WSZYSTKICH kart (musisz ponownie użyć pętli `forEach` wewnątrz funkcji kliknięcia lub skorzystać z wcześniej zdefiniowanej zmiennej). To "czyści" poprzedni wybór.
   - **Krok B:** Dodaj klasę `active` TYLKO do klikniętego elementu (użyj `this` lub argumentu `event.currentTarget`).

## Efekt

W danym momencie tylko jedna karta powinna być podświetlona. Kliknięcie innej przenosi podświetlenie.
