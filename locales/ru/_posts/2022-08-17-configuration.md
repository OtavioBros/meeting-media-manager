---
tag: Настройки
title: Настройки
ref: configuration
---

Экран настроек разделен на 4 раздела. Большинство опций не требуют пояснений, но вот несколько дополнительных подробностей.

### Настройка приложения

| Настройки                                                    | Обьяснение                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Оффлайн-режим`                                              | Если эта опция включена, M³ не будет пытаться подключиться к JW.org или к синхронизации собрания. Это полезно, когда у вас плохое интернет-соединение и вы хотите сэкономить пропускную способность.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `Предпочтение темы`                                          | Выберите тему, которую вы предпочитаете. При выборе `Система`, M³ будет использовать тему системы.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `Название собрания`                                          | Название вашего собрания. Это используется в случае, когда несколько собраний используют один и тот же компьютер и имя пользователя Windows.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `Язык интерфейса`                                            | Устанавливает язык, на котором отображается M³. <br><br> Благодарим наших многочисленных участников за то, что они перевели приложение на столько языков! Если вы хотите помочь улучшить существующий перевод или добавить новый, пожалуйста, откройте новую [дискуссию]({{site.github}}/discussions/new?category=translations&title=New+translation+in+LANGUAGE&body=I+would+like+to+help+to+translate+M%C2%B3+into+a+language+I+speak,+LANGUAGE).                                                                                                                                                                                                                                                                                                                                 |
| `Папка для сохранения мультимедиа`                           | Медиафайлы собрания будут сохранены в этой папке для последующей презентации.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `Пользовательская папка кэша`                                | По умолчанию, публикации и другие данные сохраняются в отдельной папке для каждого пользователя. Можно изменить эту папку, если вы хотите использовать общую папку кэша для многих пользователей на одном компьютере.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `Формат даты для папок встреч`                               | Формат даты, используемый для папок встреч. <br><br> ***Примечание:** При использовании синхронизации собраний, пожалуйста, убедитесь, что все настроили одинаковый формат даты.*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `Запускать приложение при загрузке системы`                  | Если эта опция включена, M³ будет автоматически запускаться при входе текущего пользователя в компьютер. <br><br> ***Примечание:** Недоступно на Linux.*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `Запускать синхронизацию мультимедиа при запуске приложения` | Если эта опция включена, то через 5 секунд после запуска M³ будет автоматически инициироваться синхронизация мультимедиа. <br><br> *Чтобы предотвратить автоматическую синхронизацию, нажмите кнопку ⏸ (пауза) до истечения 5-секундного таймера.*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `Открыть папку мультимедиа после синхронизации`              | Если эта опция включена, папка, содержащая скачанные файлы для выбранной недели, откроется в файловом менеджере компьютера после завершения синхронизации.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `Выйти из приложения после синхронизации`                    | Если эта опция включена, то M³ автоматически завершит работу через 5 секунд после завершения синхронизации. <br><br> *Чтобы предотвратить автоматическое завершение работы M³ при включении этой настройки, нажмите кнопку 🏃 (уходящий/убегающий человек) до истечения 5-секундного таймера.*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `Включить режим совместимости с OBS Studio`                  | Если эта опция включена, то с помощью OBS Studio сцены будут автоматически меняться по мере необходимости до и после презентации медиа. <br><br> *При включении этой настройки убедитесь, что OBS Studio настроено на использование плагина `obs-websocket`, с помощью которого M³ сможет взаимодействовать с OBS Studio. <br><br> Кроме того, настройте в OBS все необходимые сцены для презентации медиа и показа пюпитра. Как минимум, вам потребуется сцена с `захватом окна` (рекомендуется) или `захватом монитора`, чтобы захватить окно презентации медиа M³, или экран, на котором будет отображаться медиа. <br><br> Вам также нужно будет настроить все желаемые сцены с видом на сцену, например: снимок пюпитра, широкий снимок сцены и т. д.* |
| `Порт`                                                       | Порт, на котором плагин `obs-websocket` будет прослушивать.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `Пароль`                                                     | Пароль, настроен в настройках плагина `obs-websocket`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `Вид сцены, настроенный в OBS Studio`                        | Выберите, какая сцена должна быть выбрана по умолчанию при запуске режима презентации медиа. Как правило, это будет широкий вид сцены или вид на пюпитр.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `Вид окна презентации мультимедиа, настроенный в OBS Studio` | Выберите, какая сцена настроена в OBS Studio для захвата окна мультимедиа M³.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `Сцена OBS Studio для отображения участников Zoom`           | Необязательная сцена для быстрого и эффективного управления отображением участников Zoom во время гибридной встречи. <br><br> Когда эта сцена настроена, действие [режима презентации мультимедиа]({{page.lang}}/#present-media) несколько изменяется. В этом режиме появится кнопка переключения, при включении которой окно мультимедиа будет скрыто, а сцена Zoom будет показана. Выборщик сцен OBS также будет скрыт. При представлении медиа автоматически появится сцена медиа, как обычно, а после представления медиа окно медиа сразу исчезнет. <br><br> Когда переключатель отключен, окно мультимедиа и выборщик сцен будут показаны снова.                                                                                                                  |
| `Отключите автоматическое обновление приложений`             | Когда эта опция включена, M³ не будет автоматически обновляться при закрытии.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `Отключить аппаратное ускорение`                             | Включите эту настройку только в том случае, если у вас возникли проблемы с режимом презентации медиа. Изменение этого параметра вызовет перезапуск M³.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

### Настройка синхронизации на уровне местного собрания

Смотрите раздел [Синхронизация собрания]({{page.lang}}/#congregation-sync) для подробной информации о том, как именно работает эта функция и как ее настроить.

### Настройка мультимедиа

| Настройки                                                                         | Обьяснение                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Язык мультимедиа`                                                                | Выберите язык собрания или группы. Все медиа будут загружены с JW.org на этом языке.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `Резервный язык мультимедиа, в случае отсутствия основного языка`                 | Этот язык используется в тех случаях, когда основной язык медиа недоступен. <br><br> Например, если вы выберете ирландский язык как язык медиа, а английский как резервный, то всякий раз, когда публикация или видео не доступны на ирландском языке, они будут загружаться на английском.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `Максимальное разрешение для видео`                                               | Видео, загруженные с JW.org, будут загружены в это разрешение или следующее доступное разрешение. Полезно в тех случаях, когда пропускная способность низкоскоростная или ограничена.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `Включить субтитры для мультимедиа`                                               | Включите эту опцию, если вы хотите загрузить субтитры для видео, когда они доступны. Субтитры будут показаны по умолчанию, но могут быть включены/выключены во время представления.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `Преобразовать медиафайлы в формат MP4`                                           | Эта опция автоматически преобразует все изображения и аудиофайлы в формат MP4 для использования с встроенной в Zoom [функцией презентации MP4](assets/img/other/zoom-mp4-share.png) во время полностью удаленных встреч Zoom. Сюда входят все изображения и файлы мультимедиа, загруженные с JW.org, а также дополнительные файлы мультимедиа, добавленные пользователем или организатором видеоконференций. <br><br> ***Примечание:** Этот вариант лучше всего подходит для **полностью удаленных** встреч собрания, проводимых через Zoom. Если проводятся как **гибридные**, так и **обычные** встречи собрания, рассмотрите вариант использования [режима презентации медиа]({{page.lang}}/#present-media), активировав опцию `Воспроизводить медиафайлы на внешнем экране или в отдельном окне`, и отключите данную опцию.*      |
| `Сохранить исходные медиафайлы после преобразования`                              | Если эта опция включена, то после преобразования в формат MP4 изображения и аудиофайлы будут сохраняться в папке мультимедиа, а не удаляться. Это означает, что папка мультимедиа станет немного более захламленной, и обычно эту опцию не нужно включать, если обмен мультимедиа осуществляется через функцию обмена МР4-файлами в Zoom. (См. `Преобразовать медиафайлы в формат MP4` выше.) <br><br> ***Примечание:** Видимо, только если `Преобразовать медиафайлы в формат MP4` включено.*                                                                                                                                                                                                                                                                                                                                        |
| `Воспроизводить медиафайлы на внешнем экране или в отдельном окне`                | Эта опция позволит вам использовать M³ для презентации изображений, видео и аудиофайлов во время **гибридных** или **обычных** встреч собрания в живую. Затем можно перейти к экрану управления воспроизведением мультимедиа, нажав кнопку ▶️ (воспроизведение) на главном экране M³. <br><br> Экран презентации мультимедиа автоматически отображается на внешнем мониторе, если таковой имеется; если нет, то мультимедиа будет отображаться в отдельном окне с изменяемым размером. <br><br> ***Примечание:** Этот вариант лучше всего подходит для **гибридных** или **обычных** встреч собрания. <br><br>Если проводятся **полностью удаленные** встречи собрания, попробуйте включить опцию `Преобразовать медиафайлы в формат MP4` и поделиться медиа с помощью встроенной функции обмена MP4 в Zoom.* |
| `Фоновое изображение для режима презентации мультимедиа`                          | По умолчанию, M³ будет пытаться загрузить текущий годовой текст на выбранном ранее языке, чтобы отобразить его на черном фоне, когда используется [режим презентации медиа]({{page.lang}}/#present-media) и никакие другие медиа на данный момент не воспроизводятся. Если по какой-то причине автоматическое скачивание годового текста не удалось, или если вы хотите отобразить другое фоновое изображение, можно воспользоваться кнопкой 'Поиск' чтобы выбрать пользовательское изображение, или кнопкой 'Обновить', чтобы попробовать автоматически скачать годовой текст снова. <br><br> ***Примечание:** Если [ синхронизация собрания]({{page.lang}}/#congregation-sync) включена, выбор пользовательского фонового изображения автоматически синхронизирует его для всех пользователей синхронизации собрания.*              |
| `Скрыть окно мультимедиа после завершения воспроизведения мультимедиа`            | Если эта опция включена, окно мультимедиа будет скрываться сразу после завершения воспроизведения каждого мультимедийного файла. <br><br> ***Примечание:** Эта настройка особенно полезна для встреч, проводимых на жестовом языке.*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `Включить горячие клавиши во время воспроизведения мультимедиа`                   | Эта опция позволяет настроить пользовательские комбинации клавиш для воспроизведения и остановки мультимедиа. Это удобно, например, в сочетании с USB-пультом дистанционного управления.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `Создать плейлист для использования в VLC`                                        | Включите эту опцию, если вы хотите автоматически создавать плейлисты для каждой встречи, которые затем могут быть загружены в VLC, если вы пользуетесь этим приложением для презентации медиа вместо [режима презентации медиа]({{page.lang}}/#present-media).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `Исключить все медиа из брошюры th`                                               | Если эта опция включена, то медиа из брошюры *Развивай навыки* не будет включаться во встречу в будние дни.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `Исключить из книги lff изображения, не относящиеся к изучению Библии в собрании` | Если эта опция включена, то изображения из книги *Радуйтесь жизни* (*lff*) не будут включены, например, для учебных заданий во время встречи в будние дни.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `Включить изображения из печатного издания, когда они доступны`                   | Если эта опция включена, визуализации печатных изданий публикаций будут включаться, если они доступны. Это может быть полезно для таблиц или коллажей изображений, которые более понятны в печатном виде.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

### Настройки, связанные со встречами

| Настройки                                                               | Обьяснение                                                                                                                                                                                                                                                                                                                                                                                          |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Специальное собрание`                                                  | Если эта опция включена, никакие мультимедиа не будут загружаться с сайта JW.org. Будут доступны только вручную добавленные медиа. Это полезно например для теократических школ.                                                                                                                                                                                                                    |
| `Встречи в будние дни`                                                  | Укажите обычный день и время проведения встречи в будние дни; используется для именования папок и автоматического затухания фоновой музыки (см. ниже).                                                                                                                                                                                                                                              |
| `Встречи в выходные дни`                                                | Укажите обычный день и время проведения встречи в выходные дни.                                                                                                                                                                                                                                                                                                                                     |
| `Включить кнопку для воспроизведения в случайном порядке песен Царства` | Включить кнопку на главном экране, которая будет воспроизводить песни Царства из серии *sjjm* в случайном порядке. Это полезно, например, для воспроизведения песен до и после встреч в Зале Царства в качестве фоновой музыки. Справа от этой опции находится кнопка для загрузки всех доступных песен Царства, что может быть полезно для предотвращения задержек при буферизации.                |
| `Громкость песен`                                                       | Устанавливает громкость, при которой будет воспроизводиться фоновая музыка.                                                                                                                                                                                                                                                                                                                         |
| `Автоматически остановить песни`                                        | Если включена опция `Включить кнопку для воспроизведения в случайном порядке песен Царства`, то данная опция позволит вам указать промежуток времени, после которого фоновая музыка должна автоматически останавливаться. Это может быть либо заданное количество минут, либо заданное количество секунд до момента начала встречи (в случае, если фоновая музыка была запущена до начала встречи). |

### Скриншоты экрана настроек

{% include screenshots/configuration.html lang=site.data.ru %}