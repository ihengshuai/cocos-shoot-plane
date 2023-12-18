import { _decorator, Collider, Component, ITriggerEvent } from "cc";
import { PoolManager } from "../PoolManager";
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
      // this.node.destroy();
      PoolManager.instance.putNode(this.node);
    }
  }

  show(speed: number, isEnemyBullet = false) {
    this._speed = speed;
    this._isEnemyBullet = isEnemyBullet;
  }

  protected onEnable(): void {
    const collider = this.getComponent(Collider);
    collider.on("onTriggerEnter", this._collisionEnter, this);
  }

  protected onDisable(): void {
    const collider = this.getComponent(Collider);
    collider.off("onTriggerEnter", this._collisionEnter, this);
  }

  private _collisionEnter(event: ITriggerEvent) {
    // this.node.destroy();
    PoolManager.instance.putNode(this.node);
  }
}
