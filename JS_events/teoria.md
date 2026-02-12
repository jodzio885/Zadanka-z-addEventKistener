# Wprowadzenie do Zdarzeń (Events) w JavaScript

## Czym są zdarzenia?

Zdarzenia (Events) to sygnały wysyłane przez przeglądarkę, gdy coś "ciekawego" wydarzy się na stronie. Mogą być one wywołane przez:

- **Użytkownika**: kliknięcie myszką, wciśnięcie klawisza, przewinięcie strony, najechanie kursorem.
- **Przeglądarkę**: załadowanie strony, zmiana rozmiaru okna.
- **Inne źródła**: np. błąd ładowania obrazka.

Dzięki zdarzeniom strony internetowe stają się **interaktywne**.

## Jak nasłuchiwać zdarzeń?

Najlepszym i nowoczesnym sposobem jest metoda `.addEventListener()`.

```javascript
element.addEventListener("typ_zdarzenia", funkcjaDoWykonania);
```

### Przykład

```javascript
const przycisk = document.querySelector("#mojPrzycisk");

function powitanie() {
  alert("Cześć! Kliknąłeś mnie.");
}

// Dodajemy nasłuchiwanie na kliknięcie
przycisk.addEventListener("click", powitanie);
```

Możemy też użyć funkcji anonimowej (strzałkowej) bezpośrednio:

```javascript
przycisk.addEventListener("click", () => {
  console.log("Kliknięto przycisk!");
});
```

---

## Najpopularniejsze typy zdarzeń

### 1. Zdarzenia Myszy (Mouse Events)

- `click` - pojedyncze kliknięcie lewym przyciskiem.
- `dblclick` - podwójne kliknięcie.
- `mouseenter` - kursor wjeżdża na element.
- `mouseleave` - kursor zjeżdża z elementu.
- `mousemove` - kursor porusza się nad elementem (uwaga: generuje dużo zdarzeń!).

### 2. Zdarzenia Klawiatury (Keyboard Events)

- `keydown` - wciśnięcie klawisza.
- `keyup` - puszczenie klawisza.

### 3. Zdarzenia Formularzy (Form Events)

- `submit` - próba wysłania formularza (kliknięcie przycisku submit lub Enter w inpucie).
- `input` - zmiana wartości w polu (uruchamia się przy każdym znaku).
- `change` - zmiana wartości zatwierdzona (np. po wyjściu z pola lub wybraniu opcji w select).
- `focus` - wejście do pola (kliknięcie w input).
- `blur` - wyjście z pola (kliknięcie poza input).

### 4. Zdarzenia Dokumentu/Okna

- `DOMContentLoaded` - cała struktura HTML została załadowana (bezpieczny moment na uruchamianie skryptów).
- `scroll` - przewijanie strony.

---

## Obiekt Zdarzenia (`event`)

Gdy zdarzenie zachodzi, przeglądarka automatycznie tworzy obiekt z informacjami o tym zdarzeniu. Możemy go przechwycić, podając argument w naszej funkcji (zazwyczaj nazywany `event`, `evt` lub `e`).

```javascript
przycisk.addEventListener("click", (e) => {
  console.log(e); // Wyświetli w konsoli wszystkie informacje o zdarzeniu
});
```

### Przydatne właściwości obiektu `event`:

1.  **`e.target`**:
    Wskazuje na **konkretny element**, na którym zdarzenie zaszło (np. konkretny przycisk, który kliknęliśmy). Jest to bardzo przydatne, gdy mamy jedną funkcję obsługującą wiele elementów.

    ```javascript
    lista.addEventListener("click", (e) => {
      e.target.style.color = "red"; // Zmienia kolor tylko klikniętego elementu listy
    });
    ```

2.  **`e.preventDefault()`**:
    Zatrzymuje **domyślną akcję** przeglądarki.
    - Najczęściej używane przy formularzach, aby zablokować przeładowanie strony po kliknięciu "Wyślij".
    - Używane też w linkach (`<a>`), aby zablokować przejście pod inny adres.

    ```javascript
    formularz.addEventListener("submit", (e) => {
      e.preventDefault(); // ZABLOKUJ WYSYŁANIE!
      console.log("Formularz nie został wysłany, sprawdzamy dane...");
    });
    ```

3.  **`e.key`** (przy zdarzeniach klawiatury):
    Mówi nam, **jaki klawisz** został wciśnięty (np. "Enter", "ArrowUp", "a").

    ```javascript
    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        console.log("Wciśnięto Enter!");
      }
    });
    ```

## Dlaczego nie `onclick` w HTML?

Kiedyś pisało się `<button onclick="funkcja()">`. Dzisiaj tego **unikamy**, ponieważ:

- Miesza warstwę logiki (JS) z widokiem (HTML).
- Pozwala przypisać tylko jedną funkcję do jednego zdarzenia (nadpisuje poprzednie). `addEventListener` pozwala dodać wiele niezależnych funkcji do tego samego zdarzenia.
