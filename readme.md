1. Перейти в папку с проектом (cd /D/....)
2. Создать папку для сервиса (mkdir ws-name-of-service)
3. Перейти в папку (cd ws-name-of-service)
4. Установить yo локально (npm install yo --save)
5. Установить generator express локально (npm install generator-express --save)
6. Сгенерировать базовый набор файлов для приложения (yo express.
Параметры: n, Basic, Handlebars, None, Gulp)
7. Установить faker, chance, json-schema-faker локально (npm install faker --save, npm install chance --save, npm install json-schema-faker --save)
8. Открыть в текстовом редакторе папку с проектом
9. В файле app.js изменить: на 13 строке название переменной в зависимости от назначения сервиса, а также имя файла пути для файла. На 40 строке изменить название пути в зависимости от назначения сервиса, а также изменить имя переменной на то, которое введено на 13 строке).
10. Открыть папку routes, изменить имя файла user.js в зависимости от назначения сервиса
11. Открыть файл name-of-service.js, подключить faker, chance, json-schema-faker (Прописать после объявления констант: 
const faker = require('faker');
const chance = new require('chance').Chance();
const jsf = new require('json-schema-faker');
jsf.extend('chance', () => chance);
jsf.extend('faker', () => faker);
)
12. Создать нужную схему, которая имеет вид

var schema = {
  "type": "array",
  "minItems": 5,
  "maxItems": 10,
  "items": {
    type: 'object',
    properties: {
      firstName: {
        type: 'string',
        faker: 'name.firstName'
      },
      lastName: {
        type: 'string',
        faker: 'name.lastName'
      }
    },
    required: ['firstName','lastName']
  }
};

Где 5 - минимальное кол-во объектов, а 10 - максимальное. firstName - ключ, type: 'string' - тип значения, faker: 'name.firstName' - значение. Также вместо faker может использовать chance (faker: 'name.lastName' --> chance: 'last' ). В массиве required пишутся названия ключей, которые должны обязательно генерироваться. 

13. Вывести json-объекты, вместо оставшихся команд вставить:
router.get('/', (req, res) => {
  jsf.resolve(schema).then(sample => {
    res.send(sample);
  });
});

module.exports = router;

14. Установить Gulp локально (install gulp --save), запустить gulp командой "gulp". (совместимо с версией node js 11.10.1)
15. Перейти в бразуер по адресу localhost:3000/name-of-routes, где name-of-routes - путь, указанный в 40 строке файла app.js
16. Проверить генерацию файлов (должен вывестить массив json-объектов), перейти в текстовый редактов и в паке views создать handlebars файл (name-of-service.handlebars)
17. Вставить пример вида:
(где точка - это тег li, а после {{this.lastName}} идет закрытие тега li)

<ul>
    {{#each sampleReview}}
    <li>Name: {{this.firstName}}, Last Name: {{this.lastName}}</li>
    {{/each}}
</ul>

Где sampleReview название схемы шаблонизации, firstName - название ключа, указанное в файле name-of-service.js

18. Перейти в файл name-of-service.js, изменить строку "res.send(sample);" на "res.render('name-of-service', { sampleName: sample});", где name-of-service - название handlebars файла, sampleName - название схемы шаблонизации, sample - шаблонизируемая схема с json-объектами.
19. Обрадоваться, что все работает или пойти искать ошибку в коде
20. Запустить приложение докера
21. Скопировать в папку с сервисом приложенные файлы (Dockerfile, ecosystem.config.js)
22. Забилдить образ контейнера (docker build -t name-of-image . )
23. Запустить контейнер (docker run --name=name-of-service --rm -d -p 3000:3000 name-of-image , где name-of-service - имя контейнера, а name-of-image - имя образа, созданного в 22 пункте)
24. Обрадоваться, что все работает или пойти искать ошибку в коде
Приложение создано!
