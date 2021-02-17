# Versus

Веб-приложение для создания, проведения и участия в турнирах по настольному теннису

### Стек технологий
* React
* Redux-Thunk
* Express
* Node.js
* MongoDB Atlas
* WebSocket
* Passport.js
* React-beautiful-dnd
* Chart.js
* Bootstrap

### Запуск проекта
1. Перейти в корневой каталог проекта
2. В командной строке выполнить (однократно для установки): 
```sh
npm install
```
3. Переименовать .env.sample в .env (в папке client и папке server) и заполнить поля:
```sh
REACT_APP_SERVER_URL=
REACT_APP_GOOGLE_ID=
REACT_APP_GOOGLE_CLIENT_SECRET=
REACT_APP_URL=

GOOGLE_ID=
GOOGLE_CLIENT_SECRET=
SERVER_URL=
ATLAS=
```
4. Запуск проекта:
```sh
npm start
```

### Какой-то заголовок

![main](readme-assets/main.gif)

### Турнирная сетка

![bracket](readme-assets/bracket.gif)

### Страница профиля

![bracket](readme-assets/profile.gif)
