# Zadanie 4: Przełączanie klas (Toggle)

## Cel zadania

Nauczysz się używać metody `classList.toggle()`, która działa jak przełącznik: dodaje klasę, jeśli jej nie ma, i usuwa, jeśli jest. To idealne narzędzie do tworzenia funkcji typu włącz/wyłącz (np. tryb ciemny, rozwijane menu).

## Kroki do wykonania

1. Otwórz `index.html`. Zobaczysz prostą stronę z artykułem.
2. W `style.css` zdefiniowana jest klasa `.dark-mode`, która zmienia kolory tła i tekstu. Domyślnie nie jest ona użyta.
3. W `skrypt.js` pobierz:
   - Przycisk przełącznika (id `btnToggle`).
   - Główny kontener lub element body (id `mainContent`).
4. Dodaj obsługę kliknięcia przycisku.
5. W funkcji obsługującej kliknięcie użyj `classList.toggle('dark-mode')` na elemencie `mainContent`.
6. Sprawdź działanie. Każde kliknięcie powinno zmieniać tryb z jasnego na ciemny i odwrotnie.

---

**Wyzwanie:** Spróbuj zmienić również tekst na przycisku (np. "Włącz tryb jasny" / "Włącz tryb ciemny") w zależności od tego, czy klasa została dodana (funkcja toggle zwraca `true` jeśli dodała klasę, a `false` jeśli usunęła).
