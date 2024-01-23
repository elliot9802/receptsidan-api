![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Felliot9802%2Freceptsidan-api&countColor=%23263759)

![language](https://img.shields.io/badge/main_language-TypeScript-blue)

![GitHub stars](https://img.shields.io/github/stars/elliot9802/receptsidan-api)
![GitHub forks](https://img.shields.io/github/forks/elliot9802/receptsidan-api)

# Angular Recept Applikation

## Innehållsförteckning
1. [Översikt](#översikt)
2. [Funktioner](#funktioner)
3. [Installation och Körning](#installation-och-körning)
   - [Klona Repot](#klona-repot)
   - [Installera nödvändiga paket](#installera-nödvändiga-paket)
   - [Starta utvecklingsservern](#starta-utvecklingsservern)
4. [Tekniker](#tekniker)

## Översikt
<img src="https://github.com/elliot9802/AngularPortfolio-masterr-main/blob/main/src/assets/images/receptsida.png"/>
Denna Single Page Application (SPA) är utvecklad med Angular och är 
avsedd för att visa och hantera recept. 
Applikationen hämtar data från en JSON-fil som är hostad via GitHub, 
vilket erbjuder en effektiv & gratis lösning för datalagring och åtkomst.

## Funktioner
Dynamisk hämtning av receptdata från en extern JSON-fil på GitHub.
Visa detaljerade recept, inklusive ingredienser och tillagningsinstruktioner.
SPA-design för en sömlös användarupplevelse.
Interaktiv användarupplevelse med möjligheter att se och interagera med olika recept.

## Installation och Körning
För att köra applikationen lokalt, följ dessa steg:

1. **Klona repot**
```bash
git clone https://github.com/elliot9802/receptsidan-api.git
```
2. **Installera nödvändiga paket**
```bash
cd receptsidan
npm install
```
3. **Starta utvecklingsservern**
```bash
ng serve
```
4. **Öppna http://localhost:4200/ i din webbläsare.**
## Tekniker
- **Angular:** *För frontend-ramverk.*
- **RxJS:** *För hantering av asynkron data och händelser.*
- **TypeScript:** *Som huvudspråk för applikationslogik.*
- **HTML/CSS:** *För layout och stil.*
