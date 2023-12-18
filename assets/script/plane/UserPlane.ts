import {
  _decorator,
  AudioSource,
  Collider,
  Component,
  EventTouch,
  ITriggerEvent,
  Node,
  Prefab,
  SystemEvent,
  systemEvent,
  Touch,
} from "cc";
import { Constants } from "../constants/Constants";
import { GameManager } from "../GameManager";
import { Bullet } from "../bullet/Bullet";
import { PoolManager } from "../PoolManager";
const { ccclass, property } = _decorator;

@ccclass("UserPlane")
export class UserPlane extends Component {
  @property(Node)
  bulletRoot: Node = null;
  @property(Prefab)
  userBullet: Prefab = null;
  @property
  speed = 1;

  gameManager: GameManager = null;

  protected start(): void {
    systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this.updatePlanePos, this);
    systemEvent.on(SystemEvent.EventType.TOUCH_START, this.touchStart, this);
    systemEvent.on(SystemEvent.EventType.TOUCH_END, this.touchEnd, this);
    this.gameManager = this.node.parent.getComponentInChildren(GameManager);
  }

  // 创建子弹
  createUserBullet() {
    // 使用材质构造节点
    // const bullet = instantiate(this.userBullet);
    // 节点需添加到父节点中
    // bullet.setParent(this.bulletRoot);
    const bullet = PoolManager.instance.getNode(
      this.userBullet,
      this.bulletRoot
    );
    // 获取到飞机的位置
    const pos = this.node.position;
    // 设置子弹的初始位置
    bullet.setPosition(pos.x, pos.y, pos.z - 7);
    // 获取子弹组件
    const bulletComp = bullet.getComponent(Bullet);
    bulletComp.show(this.gameManager.bulletSpeed);
    // 播放子弹声音
    this.gameManager.playAudioEffect("bullet1", 0.4);
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
    const { ENEMY, ENEMY_BULLET } = Constants.CollisionGroup;

    // 撞到敌机子弹 -1
    // 撞到敌机 -20%
    if (collisionGroup === ENEMY || collisionGroup === ENEMY_BULLET) {
      this.gameManager.stopGame();
      this.getComponent(AudioSource).play();
    }
  }

  updatePlanePos(touch: Touch, event: EventTouch) {
    if (!this.gameManager.isStart) return;
    const delta = touch.getDelta();
    const pos = this.node.position;

    this.node.setPosition(
      pos.x + this.speed * delta.x * 0.01,
      pos.y,
      pos.z - this.speed * delta.y * 0.01
    );
  }

  touchStart(touch: Touch, event: EventTouch) {
    if (!this.gameManager.isStart) return;
    this.gameManager.toggleShootState();
  }
  touchEnd(touch: Touch, event: EventTouch) {
    if (!this.gameManager.isStart) return;
    this.gameManager.toggleShootState();
  }
}
