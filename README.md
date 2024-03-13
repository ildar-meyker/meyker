# Генератор модулей для html-start.

## Установка

```bash
npm install git+https://github.com/ildar-meyker/rabbit.git --save-dev
```

## Сгенерировать .scss модуль

Пример:

```bash
npx rabbit card-event h1,desc,left,right,image
```

Это команда создаст файл `card-events.scss` в директории `src/styles/blocks/cards` со следующим содержимым:

```css
.card-event {
	&__h1 {
	}
	&__desc {
	}
	&__left {
	}
	&__right {
	}
	&__image {
	}
}
```
