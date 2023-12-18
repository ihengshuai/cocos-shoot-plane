import {
  _decorator,
  Collider,
  Component,
  ITriggerEvent,
  Prefab,
  Vec3,
} from "cc";
import { GameManager } from "../GameManager";
import { Constants } from "../constants/Constants";
import { Bullet } from "../bullet/Bullet";
import { PoolManager } from "../PoolManager";
const { ccclass, property } = _decorator;

const OUT_OF_POS = 100;

@ccclass("EnemyPlane")
export class EnemyPlane extends Component {
  @property(Prefab)
  bullet: Prefab = null;

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
      this.createEnemyBullet(pos);
      this._curCreateBulletTime = 0;
    }

    if (offsetY > OUT_OF_POS) {
      // this.node.destroy();
      PoolManager.instance.putNode(this.node);
    }
  }

  // 创建敌机子弹
  createEnemyBullet(pos: Vec3) {
    // const bullet = instantiate(this.bullet);
    // bullet.setParent(this._gameManager.bulletRoot);
    const bullet = PoolManager.instance.getNode(
      this.bullet,
      this._gameManager.bulletRoot
    );
    bullet.setPosition(pos.x, pos.y, pos.z + 4);
    const bulletComp = bullet.getComponent(Bullet);
    bulletComp.show(0.6, true);
  }

  show(gameManager: GameManager, speed: number) {
    this._speed = speed;
    this._gameManager = gameManager;
    this._curCreateBulletTime = this.createBulletTime;
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
    const collisionGroup = event.otherCollider.getGroup();
    const { USER, USER_BULLET } = Constants.CollisionGroup;
    // 敌机撞到玩家的东西就销毁
    if (collisionGroup === USER || collisionGroup === USER_BULLET) {
      // this.node.destroy();
      PoolManager.instance.putNode(this.node);
      this._gameManager.changeCore();
      this._gameManager.playAudioEffect("enemy");
    }
  }
}
