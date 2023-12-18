import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

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
