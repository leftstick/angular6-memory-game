import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'memory-game',
    template: `
        <div class="game-panel">
            <!-- 组装上、中、下三个部分组件 -->
            <h2>leftstick</h2>
        </div>
    `,
    styles: [`
        memory-game:host {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .game-panel {
            width: 450px;
            height: 670px;
            border: 4px solid #BDBDBD;
            border-radius: 2px;
            background-color: #faf8ef;
            padding: 10px;
            display: flex;
            flex-direction: column;
        }
        @media screen and (max-width: 450px) {
            .game-panel {
                width: 100%;
                height: 100%;
            }
        }`]
})
export default class MemoryGame implements OnInit {

    ngOnInit() { }

}
