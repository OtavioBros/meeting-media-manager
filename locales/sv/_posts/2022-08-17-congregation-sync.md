---
tag: Inställningar
title: Församlingssynkronisering
ref: congregation-sync
---

Brodern som utsetts till *mötesorganisatör* (MO) av de äldste kan använda M³ för att hantera vilka media som görs tillgängliga för det tekniska A/V-supportteamet i hans församling.

Mötesorganisatören eller någon utsedd av honom, kan:

- ladda upp **ytterligare** media som ska delas under ett möte, till exempel för kretstillsyningsmannens besök eller för offentliga föreläsningar
- **dölj** media från JW.org som inte är relevant för ett visst möte, till exempel när en del har ersatts av den lokala avdelningskontoret
- lägg till eller ta bort **återkommande** media, till exempel en årstextvideo eller en meddelandebild

Alla som är synkroniserade till samma församling kommer sedan att få exakt samma media när de klickar på knappen *Uppdatera mediamappar_.

Observera att funktionen för församlingssynkronisering är helt valfri.

### Hur det fungerar

M³:s underliggande synkningsmekanism använder WebDAV. Detta innebär att MO (eller någon under hans övervakning) behöver antingen:

- konfigurera en säker WebDAV-server som är tillgänglig på webben, **eller**
- använd en tredjeparts molnlagringstjänst som stöder WebDAV-protokollet (se Värdnamn-inställningen i avsnittet *Inställningar för församlingssynkronisering* nedan).

Alla användare som vill synkroniseras tillsammans måste ansluta till samma WebDAV-server med hjälp av den anslutningsinformation och uppgifter som tillhandahålls av deras MO.

### Inställningar för församlingssynkronisering

| Inställning                             | Förklaring                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Värdnamn`                              | WebDAV-serverns webbadress. Säker HTTP (HTTPS) krävs. <br><br> ***Obs:** Etiketten för detta fält är faktiskt en knapp som när du klickat, kommer att visa en lista över WebDAV-leverantörer som har varit kända för att vara kompatibla med M³, och kommer automatiskt att fylla vissa inställningar för dessa leverantörer. <br><br> Denna lista tillhandahålls som förslag och representerar inte på något sätt ett godkännande av någon viss tjänst eller leverantör. Den bästa servern är alltid den du själv äger...* |
| `Användarnamn`                          | Användarnamn för WebDAV-tjänsten.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `Lösenord`                              | Lösenord för WebDAV-tjänsten. <br><br> ***Obs:** Som beskrivs på deras respektive supportsidor, ett appspecifikt lösenord kan behöva skapas för [Box](https://support.box.com/hc/en-us/articles/360043696414-WebDAV-with-Box) och [Koofr](https://koofr.eu/help/koofr_with_webdav/how-do-i-connect-a-service-to-koofr-through-webdav/) för att kunna aktivera WebDAV-anslutningar till sina tjänster.*                                                                                                                                  |
| `Församlingens synkroniseringsmapp`     | Detta är den mapp som kommer att användas för att synkronisera media för alla församlingens synkroniseringsanvändare. Du kan antingen skriva / klistra in i en sökväg, eller använda muspekaren för att navigera till målmappen. <br><br> ***Obs:** Se till att alla församlingsanvändare anger samma mappsökväg; annars fungerar synkningen inte som förväntat.*                                                                                                                                                                       |
| `Övergripande församlingsinställningar` | När MO har konfigurerat *Mediainställningar* och *Mötesinställningar* avsnitt i [Inställningar]({{page.lang}}/#configuration) på sin egen dator, han kan sedan använda denna knapp för att genomdriva vissa inställningar för alla församlingssynkningsanvändare (till exempel mötesdagar, mediaspråk, konverteringsinställningar och så vidare). Detta innebär att de valda inställningarna kommer att påtvingas alla synkroniserade användare varje gång de öppnar M³.                                                                            |

### Använder församlingssynkronisering för att hantera media

När konfigureringen av församlingssynkroniseringen är klar är du redo att starta [Hantera media]({{page.lang}}/#manage-media) för din församlings tekniska AV-supportteam.

### Skärmdumpar av församlingssynkronisering i aktion

{% include screenshots/congregation-sync.html lang=site.data.sv %}
