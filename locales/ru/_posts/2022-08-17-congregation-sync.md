---
tag: Настройки
title: Синхронизация собрания
ref: congregation-sync
---

Брат, названный *организатором видеоконференций* (ОВ) советом старейшин, может использовать M³ для управления тем, какие мультимедиа будут предоставлены команде аудио/видео техподдержки в его собрании.

ОВ, или назначенные ему лица, может:

- загрузить **дополнительные** медиа для встреч, например, для посещения районного старейшины или для публичных речей
- **скрыть** медиа из JW.org, которые не актуальны для какой-то встречи, например, когда часть была заменена местным филиалом
- добавить или удалить **повторяющиеся** медиа, такие как видео с годовым текстом или слайд с объявлением

Все, кто синхронизирован с одним и тем же собранием, получат точно такие же мультимедийные файлы, когда они нажмут кнопку *Обновить папки мультимедиа*.

Обратите внимание, что функция синхронизации собраний является опциональной и совершенно необязательной.

### Как это работает

Механизм синхронизации собраний, используемый в M³, основан на WebDAV. Это означает, что ОВ (или кто-то под его руководством) должен либо:

- установить защищенный WebDAV-сервер, доступный через Интернет, **либо**
- использовать сторонний сервис облачного хранения данных, который поддерживает протокол WebDAV (см. опцию *Веб адрес* в разделе *Настройка синхронизации на уровне местного собрания* ниже).

Все пользователи, желающие синхронизироваться вместе, должны будут подключаться к тому же WebDAV-серверу, используя информацию о подключении и учетные данные, предоставленные им ОВ.

### Настройка синхронизации на уровне местного собрания

| Настройки                      | Обьяснение                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Веб адрес`                    | Веб адрес WebDAV-сервера. Требуется безопасный HTTP (HTTPS). <br><br> ***Примечание:** Метка для этого поля на самом деле является кнопкой, которая после нажатия покажет список WebDAV-провайдеров совместимые с M³, и автоматически заполнят определенные настройки для этих провайдеров. <br><br> Этот список предоставляется как есть и ни в коем случае не является одобрением какой-либо конкретной услуги или провайдера. Самый лучший сервер - это всегда тот, который принадлежит вам...* |
| `Имя пользователя`             | Имя пользователя для WebDAV-провайдера.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `Пароль`                       | Пароль для WebDAV-провайдера. <br><br> ***Примечание:** Как подробно описано на их страницах поддержки, может потребоваться создание пароля для конкретного приложения для [Box](https://support.box.com/hc/en-us/articles/360043696414-WebDAV-with-Box) и [Koofr](https://koofr.eu/help/koofr_with_webdav/how-do-i-connect-a-service-to-koofr-through-webdav/) для того, чтобы включить WebDAV-соединения с их службами.*                                                                                     |
| `Папка для собрания`           | Это папка, которая будет использоваться для синхронизации мультимедиа для всех пользователей синхронизации собрания. Вы можете набрать/вставить путь или использовать мышку для перехода в целевую папку. <br><br> ***Примечание:** Убедитесь, что все пользователи синхронизации вводит один и тот же путь к папке; иначе синхронизация не будет работать так как ожидалось.*                                                                                                                                 |
| `Настройки для всего собрания` | После того, как ОВ настроил разделы *медиа* и *встречи* в [настройках]({{page.lang}}/#configuration) на своем компьютере, затем он может использовать эту кнопку, чтобы применить определенные настройки для всех пользователей синхронизации (например, дни встречи, язык мультимедиа, настройки конверсии и т. д.). Это означает, что выбранные настройки будут принудительно применены для всех синхронизированных пользователей при каждом открытии M³.                                                                |

### Использование синхронизации собрания для управления медиа

После завершения установки синхронизации собрания, вы готовы [управлять медиа]({{page.lang}}/#manage-media) для команды аудио/видео техподдержки.

### Скриншоты синхронизации собрания

{% include screenshots/congregation-sync.html lang=site.data.ru %}