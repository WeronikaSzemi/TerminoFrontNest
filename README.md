# Termino – aplikacja do przechowywania słownictwa

— English below —

## Opis projektu

<strong>Termino</strong> to aplikacja mojego pomysłu pozwalająca tworzyć słowniki i przechowywać w nich słownictwo, w której wykorzystuję swoją wiedzę z zakresu terminologii i terminografii oraz tłumaczeń specjalistycznych. Jej część frontendowa została napisana w Typescripcie z użyciem biblioteki React.js i frameworka Bootstrap. Frontend łączy się z RESTowym API połączonym z relacyjną bazą danych, którego repozytorium znajduje się <a href="https://github.com/WeronikaSzemi/TerminoBackNest">tutaj</a>.
Jest to druga wersja aplikacji, powstała po przepisaniu backendu na framework NestJS (co skutkowało m.in. niewielką liczbą commitów). Wersja pierwotna frontendu znajduje się <a href="https://github.com/WeronikaSzemi/TerminoFront">tutaj</a>.

### Funkcjonalności:
<ul>
  <li>Na <strong>stronie głównej</strong> można przeczytać o aplikacji i skorzystać z formularza kontaktowego. Można też przejść do krótkiego demo aplikacji.</li>
  <li>Nowe osoby mogą <strong>zarejestrować się</strong>, podając email i hasło.</li>
  <li>Następnie możliwe jest <strong>zalogowanie się</strong> dające dostęp do aplikacji.</li>
  <li>Z <strong>panelu użytkownika_czki</strong> można przejść do widoku słowników, usunąć konto i wylogować się.</li>
  <li>Po wejściu w <strong>widok słowników</strong> otrzymuje się listę swoich słowników oraz pole do utworzenia nowego. Każdy słownik można wczytać oraz usunąć.</li>
  <li>Po wejściu w dany słownik otrzymujemy <strong>listę haseł</strong>, które można wczytywać, edytować i usuwać. Można też dodawać nowe.</li>
  <li>Domyślnie hasła wyświetlają się alfabetycznie według wyrazu hasłowego, natomiast można wyświetlać je też według daty dodania (od najnowszych) oraz daty edycji (od ostatnio zmodyfikowanych).</li>
  <li>Po wczytaniu <strong>pojedynczego hasła</strong> widzimy jego szczegóły, czyli wszystkie dostępne pola. Również z tego widoku dostępne są edycja oraz usunięcie hasła.</li>
</ul>

### Zastosowane języki, biblioteki i frameworki:
<ul>
  <li><img src="https://camo.githubusercontent.com/ee71fcc1aa3d059265517741dffc4161922fd744377e7a5f07c43381d0aa9aac/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f747970657363726970742d2532333030374143432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d74797065736372697074266c6f676f436f6c6f723d7768697465"/></li>
  <li><img src="https://camo.githubusercontent.com/aeddc848275a1ffce386dc81c04541654ca07b2c43bbb8ad251085c962672aea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145"/></li>
  <li><img src="https://camo.githubusercontent.com/ab4c3c731a174a63df861f7b118d6c8a6c52040a021a552628db877bd518fe84/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d2532333230323332612e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642"/></li>
  <li><img src="https://camo.githubusercontent.com/b768ae6e4f89b74512e6de02a8367fd71465bc3d88ef1cf2f1622e2017c32bea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f626f6f7473747261702d2532333536334437432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d626f6f747374726170266c6f676f436f6c6f723d7768697465"/></li>
</ul>

## Kolejne kroki

W planach są dalsza rozbudowa i dopracowywanie aplikacji.

Do dopracowania są przede wszystkim:
<ul>
  <li>autoryzacja po stronie frontendowej: cofnięcie do strony głównej nie powinno powodować konieczności ponownego logowania; po wylogowaniu nie powinno być możliwości wejścia w panel użytkownika_czki</li>
  <li>rejestracja: pola nie powinny podświetlać się na czerwono od razu po wyświetleniu widoku; potrzebne byłoby powtórne podanie hasła</li>
</ul>

Planowany dalszy rozwój aplikacji obejmuje m.in.:
<ul>
  <li>dodanie możliwości zmiany hasła i emaila</li>
  <li>podpowiadanie zapomnianego hasła</li>
  <li>podawanie w tabeli słowników informacji o liczbie haseł</li>
  <li>dodanie paginacji</li>
  <li>umożliwienie zmiany nazwy słownika</li>
  <li>dodanie wyświetlania kolokacji w formie listy</li>
  <li>dodanie kolejnych pól w słownikach, m.in. na przykładowe zdania</li>
  <li>dodanie obsługi synonimów, które stawałyby się osobnymi, powiązanymi hasłami</li>
  <li>umożliwienie użytkownikom_czkom samodzielnego wyboru pól (spośród zamkniętej listy) przy tworzeniu słownika oraz jego późniejszej edycji</li>
  <li>dodanie funkcji eksportu słownika w formacie pozwalającym na import do narzędzi CAT</li>
</ul>
… i wiele innych!

## Demo

![](https://github.com/WeronikaSzemi/TerminoFrontNest/blob/develop/public/TerminoDemo.gif)

Kontakt: <a href="mailto:weronikaszeminska@gmail.com">Weronika Szemińska</a>


---------------------------------- ENGLISH ----------------------------------

# Termino – an app for storing vocabulary

## Project description

<strong>Termino</strong> is an application I conceived that enables its users to create glossaries and store vocabulary, in which I have drawn from my expertise in terminology and terminography as well as specialized translation. Its front-end section has been written in Typescript and with the use of the React.js library and the Bootstrap framework. It connects to the RESTful API, which makes queries to an SQL database; the back-end repository is available <a href="https://github.com/WeronikaSzemi/TerminoBackNest">here</a>.
It is the second version of the application, created after the backend app was rewritten in NestJS (which resulted i.e. in the relatively low number of commits). The original application can be found <a href="https://github.com/WeronikaSzemi/TerminoFront">here</a>.

### Functionalities:
<ul>
  <li>The <strong>homepage</strong> provides information about the app and a contact form.</li>
  <li>New users can <strong>sign up</strong> by providing email and password.</li>
  <li>Then, they can <strong>sign in</strong> to access the application.</li>
  <li>From the <strong>dashboard</strong>, they can view their glossaries, delete their account, and log out.</li>
  <li>After entering the <strong>glossaries view</strong>, they see the list of their glossaries and can create a new one. Each glossary can be loaded or deleted.</li>
  <li>When they open a specific glossary, they see the <strong>list of entries</strong>. Individual entries can be viewed, edited, and deleted. You can also add new entries.</li>
  <li>By default, entries are listed alphabetically by the headword. It is, however, possible to list them by the date of creation (newest first) or by the date of modification (latwest modifications first).</li>
  <li>In <strong>single entry view</strong>, you see its individual fields. Also from here is it possible to edit or delete an entry.</li>
</ul>

### Languages and technologies used:
<ul>
  <li><img src="https://camo.githubusercontent.com/ee71fcc1aa3d059265517741dffc4161922fd744377e7a5f07c43381d0aa9aac/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f747970657363726970742d2532333030374143432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d74797065736372697074266c6f676f436f6c6f723d7768697465"/></li>
  <li><img src="https://camo.githubusercontent.com/aeddc848275a1ffce386dc81c04541654ca07b2c43bbb8ad251085c962672aea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145"/></li>
  <li><img src="https://camo.githubusercontent.com/ab4c3c731a174a63df861f7b118d6c8a6c52040a021a552628db877bd518fe84/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d2532333230323332612e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642"/></li>
  <li><img src="https://camo.githubusercontent.com/b768ae6e4f89b74512e6de02a8367fd71465bc3d88ef1cf2f1622e2017c32bea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f626f6f7473747261702d2532333536334437432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d626f6f747374726170266c6f676f436f6c6f723d7768697465"/></li>
</ul>

## Nest steps

I am planning to further develop and improve the app.

The elements that need improving are mainly:
<ul>
  <li>authorization on the front-end side: going back to homepage should not make it necessary to sign in again; after signing out, the user should not be able to enter the dashboard</li>
  <li>signing up view: the fields should not turn red as soon as the view is loaded; another field for confirming the password should be added</li>
</ul>

<ul>
  <li>dodanie możliwości zmiany hasła i emaila</li>
  <li>podpowiadanie zapomnianego hasła</li>
  <li>podawanie w tabeli słowników informacji o liczbie haseł</li>
  <li>dodanie paginacji</li>
  <li>umożliwienie zmiany nazwy słownika</li>
  <li>dodanie wyświetlania kolokacji w formie listy</li>
  <li>dodanie kolejnych pól w słownikach, m.in. na przykładowe zdania</li>
  <li>dodanie obsługi synonimów, które stawałyby się osobnymi, powiązanymi hasłami</li>
  <li>umożliwienie użytkownikom_czkom samodzielnego wyboru pól (spośród zamkniętej listy) przy tworzeniu słownika oraz jego późniejszej edycji</li>
  <li>dodanie funkcji eksportu słownika w formacie pozwalającym na import do narzędzi CAT</li>
</ul>

 As for developing the app, I specifically intend to:
<ul>
  <li>add the option to change password and email</li>
  <li>add help in case a user forgets their password</li>
  <li>add pagination</li>
  <li>provide the number of entries for each glossary in the glossary list view</li>
  <li>enable the option to rename a glossary</li>
  <li>render collocations in the form of a list</li>
  <li>add further glossary fields, such as example sentences</li>
  <li>enable adding synonyms, which would become individual, related entries</li>
  <li>enable the user to choose the fields in their glossary (from a closed list) and edit this setting later</li>
  <li>add the option to export the glossary in a format that enables its import into CAT tools</li>
</ul>
… and much more!

## Demo

![](https://github.com/WeronikaSzemi/TerminoFrontNest/blob/develop/public/TerminoDemo.gif)


Contact: <a href="mailto:weronikaszeminska@gmail.com">Weronika Szemińska</a>
