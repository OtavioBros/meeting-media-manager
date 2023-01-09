---
tag: Help
title: Tehnilised kasutusjuhised
ref: usage-notes
---

Rakendus peaks töötama nii nagu enamikus kaasaegsetes Windowsi, Linuxi või Maci arvutites.

### Windows: Paigaldamine ja esimene käivitamine

On opening the installer, you might get an [error](assets/img/other/win-smartscreen.png) indicating that "Windows SmartScreen prevented an unrecognized app from starting". This is due to the app not having a high number of downloads, and consequently not being explicitly "trusted" by Windows. To get around this, simply click on "More info", then "Run anyway".

### Linux: Paigaldamine ja esimene käivitamine

Vastavalt [ametlik AppImage dokumentatsioon](https://docs.appimage.org/user-guide/troubleshooting/electron-sandboxing.html)-le, kui rakendus ei avane korralikult, kinnitage järgmise käsu väljund:

`ysctl kernel.unprivileged_userns_clone`

Kui väljund on `0`, siis rakendust AppImage **ei** käivitata, kui te ei käivita järgmist käsku, millele järgneb taaskäivitamine:

`echo kernel.unprivileged_userns_clone = 1 | sudo tee /etc/sysctl.d/00-local-userns.conf`

Enne selle tegemist lugege kindlasti läbi sait [mida see endaga kaasa toob](https://lwn.net/Articles/673597/).

### MacOS: Paigaldamine ja esimene käivitamine

If upon launching the app, you receive a warning that the app cannot be opened, either because "it was not downloaded from the App store" or because "the developer cannot be verified", then this [Apple support page](https://support.apple.com/en-ca/HT202491) will help you to get past that.

Kui teile kuvatakse teade, et teil pole luba rakenduse avamiseks, proovige mõnda lahendust saidilt [sellel lehel](https://stackoverflow.com/questions/64842819/cant-run-app-because-of-permission-in-big-sur/64895860).

`codesign --force --deep --sign - "/path/to/Meeting Media Manager.app"`

### MacOS: Automaatne värskendus

Unlike Windows and Linux, auto-update functionality is **not** implemented on macOS, and for technical reasons probably never will be. However, one of two things will happen for Mac users when an update is available:

- M³ will attempt to download the update package and open it automatically, after which the user will have to manually complete the installation of the M³ update by dragging and dropping the updated app to their Applications folder. Then, they will be able to launch the newly updated M³ from their Applications folder as usual.
- If the previous step fails at any stage, M³ will display a persistent notification indicating that an update is available, with a link to the update itself. A red, pulsing notification will also be displayed on the settings button in the main screen of M³. The M³ version number in the settings screen will turn into a button that, once clicked, opens the latest release's download page automatically.