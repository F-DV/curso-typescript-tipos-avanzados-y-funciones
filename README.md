# curso-typescript-tipos-avanzados-y-funciones

## Iniciar Proyecto con ts-node

	1) Creamos la carpeta del proyecto
	2) Creamos el archivo .gitignore desde la pagina :
	https://www.toptal.com/developers/gitignore/
	3) Se crea el archivo .editorconfig y pegamos la vonfiguracion del profesor, debemos tener instalada la extencion editorconfig:
	# Editor configuration, see https://editorconfig.org
	root = true
	[*]
	charset = utf-8
	indent_style = space
	indent_size = 2
	insert_final_newline = true
	trim_trailing_whitespace = true
	[*.ts]
	quote_type = single
	[*.md]
	max_line_length = off
	trim_trailing_whitespace = false>

	4) Iniciamosun proyecto en node:
	npm init -y

	5) Instalamos typescript de forma local y modo desarrollo:
	npm i typescript --save-dev

	6) Verificamos que este instalada:
	npx tsc --version

	7) Iniciamos el proyecto typescript:
	npx tsc --init

	8) Modificamos el tsconfig.json, el outDir por ejemplo
	9) Creamos un archivo de ejemplo y ver si transpila de forma adecuada.
	10) Instalamos librería para evitar el proceso del transpilado, ejecutamos directamente el archivo typescript https://typestrong.org/ts-node/ :
	npm install -D ts-node

NOTA: solo usar ts-node en aprendizaje
