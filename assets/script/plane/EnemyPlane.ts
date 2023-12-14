import { _decorator, Component, log, Node } from "cc";
import { GameManager } from "../GameManager";
const { ccclass, property } = _decorator;

const OUT_OF_POS = 100;

@ccclass("EnemyPlane")
export class EnemyPlane extends Component {
  // 可以根据分数动态修改子弹发射频率
  createBulletTime = 1;

  private _speed = 0;
  private _gameManager: GameManager;

  private _curCreateBulletTime = 0;

  protected update(dt: number): void {
    const pos = this.node.position;
    const offsetY = pos.z + this._speed * dt;
    this.node.setPosition(pos.x, pos.y, offsetY);

    // 创建敌机子弹
    this._curCreateBulletTime += dt;
    if (this._curCreateBulletTime > this.createBulletTime) {
      this._gameManager.createEnemyBullet(pos);
      this._curCreateBulletTime = 0;
    }

    if (offsetY > OUT_OF_POS) {
      this.node.destroy();
    }
  }

  show(gameManager: GameManager, speed: number) {
    this._speed = speed;
    this._gameManager = gameManager;
    this._curCreateBulletTime = this.createBulletTime;
  }
}

