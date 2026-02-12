# Zadanie 3: Galeria - Mouseenter/Mouseleave

## Cel

Nauczysz się reagować na najechanie kursorem myszy na element (`mouseenter`) i zjechanie z niego (`mouseleave`).

## Krok po kroku

1.  W HTML mamy 3 obrazy (lub kolorowe divy) z klasą `.box`.
    Poniżej jest element `#info`, który ma wyświetlać opis.
2.  Pobierz wszystkie elementy `.box` (użyj `document.querySelectorAll`).
3.  Użyj pętli `forEach`, aby nadać nasłuchiwanie każdemu elementowi z osobna.
4.  Dla każdego elementu dodaj dwa zdarzenia:
    - **`mouseenter`**:
      - Zmień kolor tła elementu (np. na żółty).
      - Pobierz wartość atrybutu `data-opis` z tego elementu (`element.getAttribute('data-opis')` lub `element.dataset.opis`).
      - Wyświetl ten opis w kontenerze `#info`.
    - **`mouseleave`**:
      - Przywróć oryginalny kolor elementu.
      - Wyczyść tekst w `#info` (lub wpisz "Najedź na element").

## Zauważ

Czym różni się `mouseenter` od `mouseover`?
`mouseenter` nie "bąbelkuje" (nie odpala się ponownie, gdy wjedziesz na element-dziecko wewnątrz rodzica). Jest zazwyczaj lepszym wyborem dla czystości działania.
