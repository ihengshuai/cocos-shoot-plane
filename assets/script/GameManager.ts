import { _decorator, Component, instantiate, log, math, Node, Prefab, Size, Vec2, Vec3 } from "cc";
import { Bullet } from "./bullet/Bullet";
import { EnemyPlane } from "./plane/EnemyPlane";
const { ccclass, property } = _decorator;

@ccclass("GameManager")
export class GameManager extends Component {
  @property(Node)
  userPlaner = null;
  @property(Prefab)
  enemyPlaner: Prefab = null;
  @property(Prefab)
  bullet: Prefab = null;
  @property(Prefab)
  userBullet: Prefab = null;
  @property
  bulletSpeed = 1;
  @property
  shootTime = 0.3;
  @property(Node)
  bulletRoot = null;

  _isShooting = false;
  _curShootTime = 0;
  _createEnemyTime = 0.5;
  _curEnemyTime = 0;

  protected start(): void {
    this._init();
  }

  protected update(dt: number): void {
    // 处理子弹
    this._curShootTime += dt;
    if (this._isShooting && this._curShootTime > this.shootTime) {
      this.createUserBullet();
      this._curShootTime = 0;
    }

    // 创建敌机
    this._curEnemyTime += dt;
    if (this._curEnemyTime > this._createEnemyTime) {
      this.createEnemyPlane();
      this._curEnemyTime = -0.5;
    }
  }

  _init() {
    this._curShootTime = this.shootTime;
  }

  // 创建子弹
  createUserBullet() {
    // 使用材质构造节点
    const bullet = instantiate(this.userBullet);
    // 节点需添加到父节点中
    bullet.setParent(this.bulletRoot);
    // 获取到飞机的位置
    const pos = this.userPlaner.position;
    // 设置子弹的初始位置
    bullet.setPosition(pos.x, pos.y, pos.z - 7);
    // 获取子弹组件
    const bulletComp = bullet.getComponent(Bullet);
    bulletComp.show(this.bulletSpeed);
  }

  // 创建敌机
  createEnemyPlane() {
    const enemyPlaner = instantiate(this.enemyPlaner);
    enemyPlaner.setParent(this.node);
    const enemyPlanerComp = enemyPlaner.getComponent(EnemyPlane);
    enemyPlanerComp.show(this, 20);
    const x = math.randomRangeInt(-20, 20);
    enemyPlaner.setPosition(x, 0, -50);
  }

  // 创建敌机子弹
  createEnemyBullet(pos: Vec3) {
    const bullet = instantiate(this.bullet);
    bullet.setParent(this.bulletRoot);
    bullet.setPosition(pos.x, pos.y, pos.z + 4);
    const bulletComp = bullet.getComponent(Bullet);
    bulletComp.show(0.6, true);
  }

  toggleShootState() {
    this._isShooting = !this._isShooting;
  }
}
