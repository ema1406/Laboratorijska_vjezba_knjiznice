# README.md

## Opis skupa podataka
Ovaj skup podataka sadrži informacije o odabranim javnim knjižnicama na području Republike Hrvatske. Podaci obuhvaćaju osnovne informacije o knjižnicama, njihovim odjelima i zaposlenicima.

## Metapodaci

## Opis licencija
Licencija: Creative Commons Imenovanje 4.0 međunarodna (CC BY 4.0).

## Autor
Autor: Ema Pavić

## Datum izrade
30.10.2026.

## Verzija skupa
Verzija: 1.0

## Jezik
Hrvatski jezik

## Područje
Republika Hrvatska

## Izvor podataka
Podaci su prikupljeni iz javno dostupnih informacija o knjižnicama i njihovim mrežnim stranicama.
Jedan od korištenih izvora:
https://www.knjiznica.hr/export

## Sadržaj skupa podataka
Skup podataka sastoji se od tri povezane tablice:
- **knjiznice** – sadrži osnovne podatke o knjižnicama.
- **odjeli** – sadrži podatke o odjelima pojedinih knjižnica.
- **zaposlenici** – sadrži podatke o zaposlenicima i njihovoj povezanosti s knjižnicama i odjelima.

## Opis atributa

### Tablica knjiznice
- `id` – jedinstveni identifikator knjižnice
- `naziv` – naziv knjižnice
- `adresa` – adresa knjižnice
- `postanski_broj` – poštanski broj
- `grad` – grad u kojem se knjižnica nalazi
- `zupanija` – županija u kojoj se knjižnica nalazi
- `telefon` – kontakt telefon
- `mail` – adresa elektroničke pošte
- `web` – mrežna stranica knjižnice
- `vrsta_knjiznice` – vrsta knjižnice

### Tablica odjeli
- `id` – jedinstveni identifikator odjela
- `id_knjiznice` – identifikator knjižnice kojoj odjel pripada
- `naziv` – naziv odjela

### Tablica zaposlenici
- `id` – jedinstveni identifikator zaposlenika
- `id_knjiznice` – identifikator knjižnice u kojoj zaposlenik radi
- `id_odjel` – identifikator odjela kojem zaposlenik pripada
- `ime` – ime zaposlenika
- `prezime` – prezime zaposlenika
- `radni_odnos` – funkcija zaposlenika

## Formati podataka
- CSV
- JSON
- SQL
