const fs = require('fs');

// Проверяем, что переданы оба параметра
if (process.argv.length < 4) {
	console.log('Usage: node generator.js <blockName> <elements>');
	process.exit(1);
}

// Получаем параметры из командной строки
const blockName = process.argv[2];
const elements = process.argv[3];

function createSelectors(blockName, elements) {
	const selectors = elements
		.split(',')
		.map(element => {
			return `
    &__${element.trim()} {
    }\n`;
		})
		.join('');

	return `
.${blockName} {
${selectors}
}
    `;
}

const filename = `${blockName}.scss`;
const content = createSelectors(blockName, elements);
fs.writeFileSync(filename, content);

console.log(`CSS selectors generated and saved to ${filename}`);
