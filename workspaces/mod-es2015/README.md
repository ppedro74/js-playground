yarn -D add babel-cli
yarn -D add babel-preset-es2015

npx babel js --presets es2015 --out-dir build
js\app.js -> build\app.js
js\game.js -> build\game.js
js\player.js -> build\player.js
js\scoreboard.js -> build\scoreboard.js

yarn -D add webpack-cli
yarn -D add babel-loader babel-core
yarn -D add webpack-merge