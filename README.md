# ![logo](https://i.imgur.com/aHRDloT.png)
## 🚩 Spis treści
- [Informacje] (# - informacje)
- [Jak to działa] (# - działa)
- [Przykłady] (# - przykłady)
- [Moduły] (# - moduły)


## ❓ Informacje
To narzędzie umożliwia użytkownikom Twojego serwera uzyskiwanie kont za pośrednictwem bezpiecznego i zaawansowanego systemu.
Konta są zapisywane w plikach txt, więc nie musisz zajmować się bazami danych.
Możesz utworzyć usługę i wygenerować konta dla tej usługi.

## ⚙️ Jak to działa
** Tworzenie usługi **
Musisz utworzyć konto w usługach, dla których świadczysz usługi. (Netflix itp.), użyj polecenia `/ create`, spowoduje to utworzenie pliku txt
z nazwą usługi, którą wybrałeś, możesz ją również utworzyć ręcznie.
  
** Dodawanie kont **
Po utworzeniu usługi musisz dodać do niej konta, wystarczy użyć polecenia `/ add`, a następnie nazwę użytkownika i hasło
w następnej składni nazwa_użytkownika: hasło, a następnie nazwa usługi
  
** Otrzymywanie rachunków **
Wystarczy, że użytkownik uruchomi polecenie `/ gen`, a następnie nazwę usługi i otrzyma konto w DM.
Czas odnowienia wynosi 15 minut, który możesz edytować w kodzie źródłowym
  
** Uzupełnianie kont **
Po wypełnieniu txt wszystkimi kontami, które chcesz, możesz użyć polecenia `/ restock`, po którym następuje nazwa usługi, aby ostrzec użytkowników, że usługa została ponownie zablokowana
  
**Uwaga**
W kodzie źródłowym pamiętaj, aby zastąpić „ID kanału” w
`` js
if (message.channel.id === "ID_kanału")
`` ''
z identyfikatorem kanału, na którym ma pracować bot.

## 🐾 Przykłady
/ create Netflix - spowoduje to utworzenie pliku tekstowego o nazwie „Netflix”
/ add nazwa_użytkownika1@gmail.com: hasło1 Netflix - spowoduje to dodanie tego konta do usługi Netflix
/ gen Netflix - Spowoduje to pobranie pierwszego konta w pliku Netflix.txt i wysłanie go do użytkownika
/ restock Netflix - bot wyśle ​​wiadomość @everyone z informacją, że usługa Netflix została uzupełniona.

## 📦 Moduły

### discord.js
potężny moduł node.js, który umożliwia interakcję z Discord API

### Async
moduł narzędziowy, który zapewnia proste, zaawansowane funkcje do pracy z asynchronicznym JavaScriptem

### Express
Szybki, nieoceniony, minimalistyczny framework sieciowy dla Node.js.

###  Firstline
Moduł npm async dla NodeJS, który czyta i zwraca pierwszą linię dowolnego pliku.

### Line-reader
czytnik plików / strumieni wiersz po wierszu z obsługą separatorów linii zdefiniowanych przez użytkownika.
