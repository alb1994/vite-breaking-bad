[GIORNO-1-]Create un nuovo progetto utilizzando Vite e Vue 3 e definite i componenti necessari per strutturare un layout a tema Pokémon.
Al caricamento della pagina, effettuate una chiamata all'API di Pokémon creata per voi dal nostro Man of the Day 
@Enrico Campani
!
Cerchiamo di utilizzare lo store management per prenderci confidenza(nelle slide trovate anche codice di supporto, sfruttatele : wink: )

[GIORNO-2-]Continuiamo a lavorare sul nostro Pokedex, aggiungendo però un filtro di ricerca:
Il filtro deve essere fatto con una tendina `<select>` e deve permettere all'utente di filtrare i pokemon per tipo.
Per conoscere quali tipi sono disponibili, effettuate una chiamata via Postman all'indirizzo https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons/types1 .
Copiate quindi l'array che vi arriverà come risposta e usatelo per produrre dinamicamente le `<options>`.
Quando l'utente cambia il valore della tendina, potete usare il valore scelto per fare partire la chiamata API e mostrare i risultati in pagina!
Come faccio a sapere come filtrare? Bisogna guardare la documentazione:
https://documenter.getpostman.com/view/1276443/2s8ZDbVLPF#31f11fae-574f-4ac4-8882-c235058f517e
Attenzione
Sono obbligatori l'utilizzo di $emit e di almeno una computed (va bene anche semplice)
PS: non dimenticate di dare all'utente la possibilità di annullare il filtro e tornare alla chiamata "normale".







