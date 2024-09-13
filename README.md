# AnilibriaAPI
## Информация
!! НЕОФИЦАЛЬНАЯ ОБОЛОЧКА !!
!! Авторизация пользователей НЕ БУДЕТ т.к это не работат на самом сайте либрии !!

Оболочка для API Anilibria, который позволяет установить и почти ничего не делать, кроме авторизации и вызова методов с параметрами. Модуль поддерживает автоисправление и подсказки в таких приложениях как VS Code и т.п.

В данный момент нету смысла делать v1 / v2 т.к они уже не актуальны... (+ мне лень)

Open Source: https://github.com/semen-bol/AnilibriaAPI-JS/

NpmJS: https://www.npmjs.com/package/anilibriajs-api

Придерживаемся данному API: https://github.com/anilibria/docs/blob/master/api_v3.md
## Использование
Перед началом использования, нужно установить зависимость
```
npm i anilibriajs-api@latest
npm i axios // В случае если не работает модуль
```
Пример использования:
```javascript
const api = require("./node_modules/anilibriajs-api")

const anilibriajs = new api.anilibria({})

async function testAnyMethods() {
    // random
    let s = await anilibriajs.title.random({})
    console.log(`Random anime: \nid: ${s.id}\nname: [ru: ${s.names.ru}; en: ${s.names.en}]\nStatus: ${s.status.string}\nEpisodes: ${s.type.episodes}\n`);

    // torrents stats for selected user
    s = await anilibriajs.torrent.seed_stats({users: "demonust"})
    console.log(s)
}

testAnyMethods()
```