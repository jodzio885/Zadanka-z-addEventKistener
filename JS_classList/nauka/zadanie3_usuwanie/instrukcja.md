# Zadanie 3: Usuwanie klas

## Cel zadania

Nauczysz się usuwać klasy CSS z elementów za pomocą metody `classList.remove()`. Jest to przydatne np. przy zamykaniu okienek, resetowaniu stanu elementu czy naprawianiu błędów wizualnych.

## Kroki do wykonania

1. Zapoznaj się z plikiem `index.html`. Widoczny jest komunikat o błędzie (div o id `alert`), który posiada klasę `error`.
2. Zapoznaj się z plikiem `style.css`. Klasa `.error` nadaje czerwone tło.
3. W pliku `skrypt.js` pobierz:
   - Przycisk "Napraw błąd" (id `btnFix`).
   - Element komunikatu (id `alert`).
4. Dodaj obsługę kliknięcia przycisku.
5. W funkcji obsługującej kliknięcie użyj metody `classList.remove('error')`, aby usunąć czerwoną stylizację.
6. Dodatkowo możesz dodać klasę `success` (zieloną) po usunięciu błędu, używając `add()`, aby zasygnalizować naprawę.

## Sprawdzenie

Po kliknięciu "Napraw błąd", czerwone tło powinno zniknąć (lub zmienić się na zielone, jeśli dodałeś klasę `success`).
