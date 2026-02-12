# Zarządzanie klasami CSS w JavaScript - `classList`

Właściwość `classList` elementu DOM zwraca kolekcję aktywnych atrybutów klasy tego elementu. Jest to obiekt `DOMTokenList`, który zachowuje się podobnie do tablicy (jest "tablicopodobny"), co ułatwia zarządzanie stylami elementu bez konieczności manipulowania ciągiem tekstowym w `className`.

## Podstawowe metody

Obiekt `classList` udostępnia wygodne metody do manipulacji klasami:

### 1. `add(klasa1, klasa2, ...)`

Dodaje jedną lub więcej klas do elementu. Jeśli klasa już istnieje, jest ignorowana.

```javascript
const element = document.querySelector("#mojElement");
element.classList.add("aktywny");
element.classList.add("btn", "btn-primary"); // dodanie wielu klas naraz
```

### 2. `remove(klasa1, klasa2, ...)`

Usuwa jedną lub więcej klas z elementu. Jeśli klasa nie istnieje, nic się nie dzieje.

```javascript
element.classList.remove("aktywny");
```

### 3. `toggle(klasa, [force])`

Przełącza klasę. Jeśli klasa istnieje - usuwa ją. Jeśli nie istnieje - dodaje ją.
Opcjonalny parametr `force` (true/false) wymusza dodanie lub usunięcie.

```javascript
// Działa jak włącznik światła
element.classList.toggle("tryb-ciemny");
```

### 4. `contains(klasa)`

Sprawdza, czy element posiada daną klasę. Zwraca `true` lub `false`. Bardzo przydatne w instrukcjach warunkowych.

```javascript
if (element.classList.contains("blad")) {
  console.log("Element zawiera błąd!");
}
```

## Praca z `classList` jak z tablicą

Mimo że `classList` nie jest zwykłą tablicą (Array), posiada pewne jej cechy:

### Długość (`length`)

Zwraca liczbę klas przypisanych do elementu.

```javascript
console.log(element.classList.length);
```

### Dostęp przez indeks

Możemy odwołać się do konkretnej nazwy klasy używając indeksu, tak jak w tablicy.

```javascript
// Zwraca nazwę pierwszej klasy
console.log(element.classList[0]);
// Lub metodą item()
console.log(element.classList.item(0));
```

### Iteracja

Możemy użyć pętli `for...of` lub metody `forEach`, aby przeiterować po wszystkich klasach elementu.

```javascript
element.classList.forEach((klasa) => {
  console.log("Znaleziono klasę:", klasa);
});
```

### Konwersja na tablicę

Jeśli potrzebujemy skorzystać z metod typowych dla tablic (np. `map`, `filter`), możemy przekonwertować `classList` na zwykłą tablicę.

```javascript
const klasyTablica = [...element.classList];
// lub
const klasyTablica2 = Array.from(element.classList);
```

## `classList` vs `className`

| Cecha        | `classList`                                      | `className`                                  |
| ------------ | ------------------------------------------------ | -------------------------------------------- |
| Typ danych   | Obiekt (DOMTokenList)                            | Tekst (String)                               |
| Dodawanie    | `add('nowa')` - bezpieczne, nie nadpisuje innych | Trzeba sklejać napisy: `+= ' nowa'`          |
| Usuwanie     | `remove('stara')` - proste                       | Skomplikowane operacje na tekście (replace)  |
| Sprawdzanie  | `contains('klasa')`                              | Wymaga wyrażeń regularnych lub `indexOf`     |
| Zastosowanie | Nowoczesne, zalecane podejście                   | Rzadziej, głównie do całkowitego resetu klas |

## Przykład praktyczny

```html
<div id="pudelko" class="box czerwony">Tekst</div>
```

```javascript
const box = document.querySelector("#pudelko");

box.addEventListener("click", () => {
  // Sprawdź czy ma klasę 'czerwony'
  if (box.classList.contains("czerwony")) {
    box.classList.remove("czerwony");
    box.classList.add("zielony");
  } else {
    box.classList.toggle("aktywny");
  }

  // Wypisz wszystkie klasy w konsoli
  console.log(`Lista klas: ${box.classList}`);
});
```

## Częste wzorce (Best Practices)

### 1. "Pokaż jeden, ukryj resztę" (np. zakładki, slider)

Zamiast ręcznie sprawdzać każdy element, często najłatwiej jest najpierw usunąć klasę aktywną ze wszystkich elementów, a potem dodać ją tylko do jednego wybranego.

```javascript
// Reset - usuń klasę ze wszystkich
buttons.forEach((btn) => btn.classList.remove("active"));

// Ustawienie - dodaj do klikniętego
clickedBtn.classList.add("active");
```

### 2. Wykorzystanie `dataset` do sterowania klasami

Często przechowujemy nazwę klasy w atrybucie `data-*` w HTML:

```html
<button data-kolor="czerwony">Zmień na czerwony</button>
```

```javascript
// JS: Pobierz wartość i użyj jako klasy
const kolor = button.dataset.kolor; // "czerwony"
element.classList.add(kolor);
```
