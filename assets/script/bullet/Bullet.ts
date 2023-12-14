import { _decorator, Component, log, Node } from "cc";
const { ccclass, property } = _decorator;


const USER_BULLET_RANGE = -60;
const ENEMY_BULLET_RANGE = 60;

@ccclass("Bullet")
export class Bullet extends Component {

  _speed = 0;
  _isEnemyBullet = false;

  protected start(): void {}

  // 移动字段，直到超出屏幕外销毁
  protected update(dt: number): void {
    const pos = this.node.position;
    let offsetY = 0;
    if (this._isEnemyBullet) {
        offsetY = pos.z + this._speed;
    } else {
        offsetY = pos.z - this._speed;
    }
    this.node.setPosition(pos.x, pos.y, offsetY);

    // 销毁
    if (offsetY < USER_BULLET_RANGE || offsetY > ENEMY_BULLET_RANGE) {
      this.node.destroy();
    }
  }

  show(speed: number, isEnemyBullet = false) {
    this._speed = speed;
    this._isEnemyBullet = isEnemyBullet;
  }
}
