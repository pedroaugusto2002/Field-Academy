#!/bin/bash
diretorio=/home/viniciusgiovanni/FIELD_ACADEMY;
mvarquivo=/home/viniciusgiovanni;
nodeinstalado=
if [ -d $diretorio ]; then
	echo "A pasta já existe";
	cd $arquivo;
	curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
	sudo apt-get install -y nodejs
	echo "console.log('Hello World!')" >> helloWorld.js;
	node helloWorld.js;
else
	mkdir $diretorio;
	cd $diretorio;
	touch helloWorld.js;
	echo "Pasta criada";
	curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
	sudo apt-get install -y node.js
	echo "console.log('Hello World!')" >> helloWorld.js;
	node helloWorld.js
fi
cp /home/viniciusgiovanni/FIELD_ACADEMY/helloWorld.js /home/viniciusgiovanni/
tar -czf $diretorio/FIELD_ACADEMY.tar.gz ./
rm -rf /home/viniciusgiovanni/FIELD_ACADEMY 
