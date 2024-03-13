# Генератор модулей для html-start.

## Сгенерировать .scss модуль

Пример:

```bash
npx meyker card-event h1,desc,left,right,image
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
