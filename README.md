Требования: ​
 + ​Создать RN проект с нативным кодом (через react-native init)
​​ + Подключить навигацию https://reactnavigation.org/ ;
​ + ​Создать store (redux) и подключить к экранам
​ + ​Реализовать с помощью reactnavigation навигации приложение с двумя экранами-табами (startTabBasedApp):
​​ + Список (чего угодно, например людей)
​ + ​Элемент списка (например профиль человека)
​​ + Оба экрана должны быть подключены к редаксу (к соответствующим состояниям)
​​ + При нажатии на элемент списка (экран “Список”), в редаксе должно меняться состояние currentElement, и при переходе на экран “Элемент списка”, на экране должна выводиться информация этого элемента
 + Добавить иконку приложения, иконки табов и подключить любые доступные шрифты https://fonts.google.com/
 + Добавить RefreshControl, обновление списка и экрана просмотра
 - Добавить пагинацию с помощью Flatlist, если api поддерживает (не совсем понял этот пункт, но и api не поддерживает пагинацию, если нужно, можгу написать свою)
 + Добавить поиск по списку (текстовое поле с кнопкой поиска или автоматическим обновлением)
​​ + Данные для списка необходимо получать с помощью http-запроса (к любому публичному API), во время запроса должен выводиться прелоадер
 + В качестве API можете использовать гитхаб и получить список репозиториев какой-нибудь компании (использовал jsonplaceholder)

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```



