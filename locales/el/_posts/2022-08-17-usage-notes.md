---
tag: Βοήθεια
title: Τεχνικές σημειώσεις χρήσης
ref: usage-notes
---

Η εφαρμογή θα πρέπει να λειτουργεί όπως είναι στους περισσότερους σύγχρονους υπολογιστές που χρησιμοποιούν Windows, Linux ή macOS.

### Windows: Εγκατάσταση και πρώτη εκκίνηση

Ανοίγοντας το πρόγραμμα εγκατάστασης, μπορεί να λάβετε ένα [σφάλμα](assets/img/other/win-smartscreen.png) υποδεικνύοντας ότι το "Windows SmartScreen εμπόδισε μια άγνωστη εφαρμογή από την εκκίνηση". Αυτό οφείλεται στο ότι η εφαρμογή δεν έχει υψηλό αριθμό λήψεων και συνεπώς δεν είναι ρητά "αξιόπιστη" από τα Windows. Για να πάρετε γύρω από αυτό, απλά κάντε κλικ στο "Περισσότερες πληροφορίες", τότε "Run ούτως ή άλλως".

### Linux: Εγκατάσταση και πρώτη εκκίνηση

Σύμφωνα με την [επίσημη τεκμηρίωση AppImage](https://docs.appimage.org/user-guide/troubleshooting/electron-sandboxing.html), εάν η εφαρμογή αποτύχει να ανοίξει σωστά, επιβεβαιώστε την έξοδο της ακόλουθης εντολής:

`sysctl kernel.unprivileged_userns_clone`

Αν η έξοδος είναι `0`, then the AppImage will **not** run unless you run the following command, followed by a reboot:

`echo kernel.unprivileged_userns_clone = 1 | sudo tee /etc/sysctl.d/00-local-userns.conf`

Βεβαιωθείτε ότι έχετε διαβάσει στο [τι συνεπάγεται αυτό](https://lwn.net/Articles/673597/) πριν το κάνετε αυτό.

### macOS: Εγκατάσταση και πρώτη εκκίνηση

Εάν κατά την εκκίνηση της εφαρμογής, λαμβάνετε μια προειδοποίηση ότι η εφαρμογή δεν μπορεί να ανοιχτεί, είτε επειδή "δεν λήφθηκε από το App store" ή επειδή "ο προγραμματιστής δεν μπορεί να επαληθευτεί", τότε αυτή η σελίδα υποστήριξης [Apple](https://support.apple.com/en-ca/HT202491) θα σας βοηθήσει να ξεπεράσετε αυτό.

If you get a message indicating that you "do not have permission to open the application", then try some solutions from [this page](https://stackoverflow.com/questions/64842819/cant-run-app-because-of-permission-in-big-sur/64895860), for example running the following command in `Terminal.app`:

`codesign --force --deep --sign - "/path/to/Meeting Media Manager.app"`

### macOS: Issues with audio or microphone permissions in macOS Sonoma

Since macOS Sonoma, some users might encounter an issue where M³ repeatedly gives an error message indicating that it needs access to the microphone. Executing the following command in `Terminal.app` has resolved the issue for some:

`codesign --force --deep --sign - "/path/to/Meeting Media Manager.app"`

### macOS: Auto-update

Σε αντίθεση με τα Windows και το Linux, η λειτουργία αυτόματης ενημέρωσης είναι **όχι** που υλοποιείται στο macOS και για τεχνικούς λόγους πιθανότατα δεν θα είναι ποτέ. Ωστόσο, ένα από τα δύο πράγματα θα συμβεί για τους χρήστες του macOS όταν είναι διαθέσιμη μια ενημέρωση:

- M3 θα προσπαθήσει να κατεβάσετε το πακέτο ενημέρωσης και να το ανοίξετε αυτόματα, μετά την οποία ο χρήστης θα πρέπει να ολοκληρώσει χειροκίνητα την εγκατάσταση της ενημέρωσης M3 σύροντας και ρίχνοντας την ενημερωμένη εφαρμογή στο φάκελο Εφαρμογές τους. Στη συνέχεια, θα είναι σε θέση να ξεκινήσει το πρόσφατα ενημερωμένο M3 από το φάκελο Εφαρμογές τους ως συνήθως.
- Εάν το προηγούμενο βήμα αποτύχει σε οποιοδήποτε στάδιο, M3 θα εμφανίσει μια επίμονη ειδοποίηση που δείχνει ότι μια ενημερωμένη έκδοση είναι διαθέσιμη, με ένα σύνδεσμο προς την ίδια την ενημέρωση. Μια ειδοποίηση κόκκινου παλμού θα εμφανιστεί επίσης στο κουμπί ρυθμίσεων στην κύρια οθόνη του M3. Ο αριθμός έκδοσης M3 στην οθόνη ρυθμίσεων θα μετατραπεί σε ένα κουμπί που, μόλις πατηθεί, ανοίγει αυτόματα τη σελίδα λήψης της τελευταίας έκδοσης.