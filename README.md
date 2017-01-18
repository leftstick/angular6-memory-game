angular2-memory-game
==================
![][david-url]
![][license-url]

A tiny game written in `angular2`. It's inspired by IgorMinar's [Memory-Game](https://github.com/IgorMinar/Memory-Game). You can view the online demo [here](https://leftstick.github.io/angular2-memory-game).

We choose [webpack](http://webpack.github.io/) as bundling tool taking the place of `System.js`.

## Components Tree ##

![](https://raw.githubusercontent.com/leftstick/angular2-memory-game/master/doc/img/components.png)


## Components break down ##

1. `memory-game`, the whole game view
2. `dashboard`, the panel on the top, including "logo", "remains", "top"
3. `logo`, on the left of `dashboard`, showing the game Logo
4. `info-board`, on the center of `dashboard`, showing the current matching information(`Remains`)
5. `info-board`, on the right of `dashboard`, showing the best result(`Top`)
6. `chessboard`, on the center of `memory-game` view, the playing area
7. `card`, each card in the `chessboard`
8. `status`, the footer part, displaying current status of game

## File Structure ##

```
angular2-memory-game
├── img
│   ├── ...
│   └── zeppelin.png
├── ts
│   ├── core
│   │   ├── declare
│   │   │   └── static.ts
│   │   ├── ext
│   │   │   ├── polyfills.ts
│   │   │   └── vendor.ts
│   │   └── helper
│   │       ├── array.ts
│   │       ├── event.ts
│   │       └── object.ts
│   ├── game
│   │   ├── components
│   │   │   ├── chessboard
│   │   │   │   ├── card.co.ts
│   │   │   │   └── index.ts
│   │   │   ├── dashboard
│   │   │   │   ├── info.board.co.ts
│   │   │   │   ├── logo.co.ts
│   │   │   │   └── index.ts
│   │   │   └── status
│   │   │       └── index.ts
│   │   ├── memory.game.co.ts
│   │   └── index.ts
│   ├──store
│   │   ├── action
│   │   │   └── index.ts
│   │   ├── index.ts
│   │   ├── model
│   │   │   ├── card.ts
│   │   │   ├── state.ts
│   │   │   └── status.ts
│   │   └── reducer
│   │       └── index.ts
│   └── index.ts
├── index.html
├── package.json
├── tsconfig.json
├── webpack.config.common.js
├── webpack.config.js
└── webpack.config.prod.js
```

## Want to try locally? ##

```bash
#cloning code
git clone https://github.com/leftstick/angular2-memory-game.git
cd angular2-memory-game

#install dependencies
npm install
#start debug server
npm start
```

Now, view the demo at [http://localhost:8080](http://localhost:8080)


## LICENSE ##

[MIT License](https://raw.githubusercontent.com/leftstick/angular2-memory-game/master/LICENSE)


[david-url]: https://david-dm.org/leftstick/angular2-memory-game.png
[license-url]: https://img.shields.io/github/license/leftstick/angular2-memory-game.svg