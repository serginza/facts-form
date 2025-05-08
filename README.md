# facts-form

### Eng

*The deployment server may return an error when connecting via mobile communications, please open with a Wi-Fi or LAN connection*. 
Deploy (with a functioning backend): https://serginza-facts-form-fcb5.twc1.net/
______________________

I would like to present to your attention a fullstack application, which is a two-page website. It includes a main page, a contact page with a form, and a basic backend to handle form submissions.

1. The main page contains content about facts, as well as buttons for switching to the contact form (Contact us).
2. The contact page contains a form in which the user fills in the data and sends it to the server. If the request is successful, the form will change to the title *"Thank you for your interest, {Name}"*

Communication with the backend is implemented using **ky** in the agent. Data passes through an adapter to match the frontend format with the backend format (in this application, the adapter implements mandatory data, in addition to validation). The request is processed in the store using **MobX**. A singleton is implemented to ensure a single instance. The feedback form is made using **react-hook-form** and **Material UI**. All components have memoization, pages - lazy loading to optimize rendering.

All pages have a rubber layout and adaptability, SEO, header and footer are "fixed".
For styling, such approaches as styled-components, css, object styling, prop styling (sx MUI) are used. In index.css, a local font and the variables of the main colors are declared.

**Instructions for running the project locally:**
- clone the repository to disk:

1. Front: go to the client folder, install dependencies (***npm intall*** or ***yarn install***), run the project with the command **"npm run dev"**. The front runs on port 3000.
2. Back: <u>to work with a local database, postgreSQL is required and .env must be reconfigured in the root</u>. To start a local server, go to the server folder, install dependencies (***npm intall*** or ***yarn install***), run the project with the "npm run dev" command. The backend runs on port 4000.

Frontend stack: React 19, Typescript, MobX, React-hook-form, zod, ky, Material UI, Emotion, React-youtube.

Backend stack: Node.js, Typescript, Express, PostgreSQL, Prisma.
______________________
______________________

### Рус

*Сервер деплоя может выдавать ошибку при подключении через мобилльную связь, пожалуйста, открывайте с подключением по Wi-Fi или через проводное соединение*. 
Деплой (с функционирующим бэком): https://serginza-facts-form-fcb5.twc1.net/

______________________

Представляю Вашему вниманию fullstack-приложение, являющиеся двухстраничным веб-сайтом. Веб-сайт включает в себя главную страницу, страницу контактов с формой и базовый бэкэнд для обработки отправки форм.

1. На главной странице представлен контент о фактах, а так же кнопки перехода на форму обратной связи (Contact us). 
2. На странице обратной связи представлена форма, в которой пользователь заполняет данные и отправляет на сервер, при успешном запросе форма поменяется на заголовок *"Thank you for
your interest, {Name}"*

Связь с бэком реализована с помощью **ky** в агенте. Данные проходят через адаптер для согласования формата фронта с форматом бэка (в данном приложении в адаптере реализована обязателньость данных, помимо валидации). Обработка запроса происходит в сторе с помощью **MobX**. Реализован синглтон для гарантии единого экземпляра. Форма обратной связи сделана с помощью **react-hook-form** и **Material UI**. Все компоненты имеют мемоизацию, pages - ленивуюю загрузку для оптимизации рендера. 

Все страницы имеют резиновую верстку и адаптивность, SEO, header и footer "закреплены" на месте. 
Для стиллизации используются такие подходы, как styled-components, css, объектная стиллизация, пропсовая стиллизация (sx MUI). В index.css подключен локальный шрифт и объявлены переменные основных цветов.

**Инструкция по локальному запуску проекта:**
- клонировать репозиторий на диск:

1. Front: зайти в папку client, выполнить установку зависимостей (***npm intall*** или ***yarn install***), запустить проект командой **"npm run dev"**. Фронт работает на 3000 порту.
2. Back: <u>для работы с локальной базой данных необходим postgreSQL и перенастройка .env в корне</u>. Для запуска локального сервера зайти в папку server, выполнить установку зависимостей (***npm intall*** или ***yarn install***), запустить проект командой "npm run dev". Бэк работает на 4000 порту.



Стек фронта: React 19, Typescript, MobX, React-hook-form, zod, ky, Material UI, Emotion, React-youtube.

Стек бэка: Node.js, Typescript, Express, PostgreSQL, Prisma.