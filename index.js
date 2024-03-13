const fs = require('fs');
const path = require('path');

// Проверяем, что переданы оба параметра
if (process.argv.length < 4) {
	console.log('Usage: node generator.js <block> <elements>');
	process.exit(1);
}

writeSCSSModule();

function writeSCSSModule() {
	// Получаем параметры из командной строки
	const block = process.argv[2];
	const elements = process.argv[3];

	const collection = block.split('-')[0] + 's';
	const filepath = `./src/styles/blocks/${collection}/${block}.scss`;
	const content = createCssSelectors(block, elements);
	writeFileWithDirectories(filepath, content);

	console.log(`CSS selectors generated and saved to ${filepath}`);
}

function createCssSelectors(block, elements) {
	const inner = elements
		.split(',')
		.map(element => {
			return `
    &__${element.trim()} {
    }\n`;
		})
		.join('');

	return `
.${block} {
${inner}
}
    `;
}

function writeFileWithDirectories(filepath, content) {
	const directory = path.dirname(filepath);

	// Создаем директории, если они не существуют
	if (!fs.existsSync(directory)) {
		fs.mkdirSync(directory, { recursive: true });
	}

	// Записываем файл
	fs.writeFileSync(filepath, content);
}
