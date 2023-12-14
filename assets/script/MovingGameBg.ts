import { _decorator, Component, log, Node, SystemEvent, systemEvent } from "cc";
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = MovingGameBg
 * DateTime = Wed Dec 13 2023 10:44:20 GMT+0800 (中国标准时间)
 * Author = ihengshuai
 * FileBasename = MovingGameBg.ts
 * FileBasenameNoExtension = MovingGameBg
 * URL = db://assets/script/MovingGameBg.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */

@ccclass("MovingGameBg")
export class MovingGameBg extends Component {
  @property(Node)
  bg01: Node = null;
  @property(Node)
  bg02: Node = null;

  protected _speed = 10;
  protected _bgMovingRange = 90;

  protected start(): void {
    this.init();
  }

  protected init() {
    this.bg01.setPosition(0, -10, 0);
    this.bg02.setPosition(0, -10, -this._bgMovingRange);
  }

  // @override
  protected update(dt: number): void {
    this.updateBackgroundPosition(dt);
  }

  // dt为每帧间隔
  protected updateBackgroundPosition(dt: number) {
    this.bg01.setPosition(0, -10, this.bg01.position.z + dt * this._speed);
    this.bg02.setPosition(0, -10, this.bg02.position.z + dt * this._speed);

    if (this.bg01.position.z > this._bgMovingRange) {
      this.bg01.setPosition(0, -10, this.bg02.position.z - this._bgMovingRange);
    } else if (this.bg02.position.z > this._bgMovingRange) {
      this.bg02.setPosition(0, -10, this.bg01.position.z - this._bgMovingRange);
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
