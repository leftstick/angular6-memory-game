angular2-memory-game
==================
![][david-url]
![][license-url]

A tiny game written in `angular`(version >= 2). It's inspired by IgorMinar's [Memory-Game](https://github.com/IgorMinar/Memory-Game). You can view the online demo [here](https://leftstick.github.io/angular2-memory-game).

We choose [@angular/cli](https://www.npmjs.com/package/@angular/cli) as default build tool.

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
├── assets
│   ├── 8-ball.png
│   ├── ...
│   ├── favicon.ico
│   ├── ...
│   └── zeppelin.png
├── environments
│   ├── environment.prod.ts
│   └── environment.ts
├── helper
│   ├── array.ts
│   ├── event.ts
│   └── object.ts
├── memorygame
│   ├── chessboard
│   │   ├── card.component.css
│   │   ├── card.component.html
│   │   ├── card.component.ts
│   │   ├── chessboard.component.css
│   │   ├── chessboard.component.html
│   │   └── chessboard.component.ts
│   ├── dashboard
│   │   ├── dashboard.component.css
│   │   ├── dashboard.component.html
│   │   ├── dashboard.component.ts
│   │   ├── info.component.css
│   │   ├── info.component.html
│   │   ├── info.component.ts
│   │   ├── logo.component.css
│   │   ├── logo.component.html
│   │   └── logo.component.ts
│   ├── status
│   │   ├── status.component.css
│   │   ├── status.component.html
│   │   └── status.component.ts
│   ├── memory.component.css
│   ├── memory.component.html
│   └── memory.component.ts
├── store
│   ├── action
│   │   └── index.ts
│   ├── interface
│   │   ├── ICard.ts
│   │   ├── IState.ts
│   │   ├── status.ts
│   │   └── index.ts
│   ├── model
│   │   └── card.ts
│   ├── reducer
│   │   └── index.ts
│   └── index.ts
├── index.css
├── index.html
├── index.ts
├── polyfills.ts
├── tsconfig.json
└── typings.d.ts
```

## Want to try locally? ##

```bash
#cloning code
git clone https://github.com/leftstick/angular2-memory-game.git
cd angular2-memory-game

#install dependencies
npm intall
#start debug server
npm start
```

Now, view the demo at [http://localhost:4200](http://localhost:4200)


## LICENSE ##

[MIT License](https://raw.githubusercontent.com/leftstick/angular2-memory-game/master/LICENSE)


[david-url]: https://david-dm.org/leftstick/angular2-memory-game.png
[license-url]: https://img.shields.io/github/license/leftstick/angular2-memory-game.svg