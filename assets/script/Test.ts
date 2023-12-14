
import { _decorator, Component, EventKeyboard, KeyCode, Node, System, systemEvent, SystemEvent } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Test
 * DateTime = Wed Dec 13 2023 11:37:58 GMT+0800 (中国标准时间)
 * Author = ihengshuai
 * FileBasename = Test.ts
 * FileBasenameNoExtension = Test
 * URL = db://assets/script/Test.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */
 
@ccclass('Test')
export class Test extends Component {
    protected start(): void {
        this.node.on(SystemEvent.EventType.TOUCH_START, (event) => {
            console.log(event)
        })

        systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.listenerKeyboard, this)
    }

    listenerKeyboard(event: EventKeyboard) {
        const keyCode = event.keyCode;
        if (keyCode === KeyCode.KEY_W) {
            this.node.setPosition(this.node.position.x, this.node.position.y + 10)
        } else if (keyCode === KeyCode.KEY_S) {
            this.node.setPosition(this.node.position.x, this.node.position.y - 10)
        } else if (keyCode === KeyCode.KEY_A) {
            this.node.setPosition(this.node.position.x - 10, this.node.position.y)
        } else if (keyCode === KeyCode.KEY_D) {
            this.node.setPosition(this.node.position.x + 10, this.node.position.y)
        }
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/zh/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/zh/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/zh/scripting/life-cycle-callbacks.html
 */
