angular2-memory-game
==================
![][david-url]
![][license-url]

A tiny game written in `angular2`. It's inspired by IgorMinar's [Memory-Game](https://github.com/IgorMinar/Memory-Game). You can view the online demo [here](http://leftstick.github.io/angular2-memory-game).

We choose [webpack](http://webpack.github.io/) as bundling tool taking the place of runtime loading via `System.js`.

## Components Tree ##

![](https://raw.githubusercontent.com/leftstick/angular2-memory-game/master/doc/img/components.png)


## Components break down ##

1. `Game`, the whole game board
2. `Dashboard`, the panel on the top, including "logo", "progress", "best result"
3. `Logo`, on the left of `Dashboard`, showing the game Logo
4. `MatchInfo`, on the center of `Dashboard`, showing the current matching information
5. `Score`, on the right of `Dashboard`, showing the best result
6. `Chessboard`, on the center of `Game`, the playing area
7. `Card`, each card in the `Chessboard`
8. `PlayStatus`, the footer part, displaying current status of game

## File Structure ##

```
angular2-memory-game
```


## Want Having a try locally? ##

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