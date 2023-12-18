import {
  _decorator,
  Component,
  Label,
  math,
  Node,
  Prefab,
  randomRangeInt,
} from "cc";
import { EnemyPlane } from "./plane/EnemyPlane";
import { UIMain } from "./ui/UIMain";
import { AudioManager } from "./AudioManager";
import { UserPlane } from "./plane/UserPlane";
import { PoolManager } from "./PoolManager";
const { ccclass, property } = _decorator;

@ccclass("GameManager")
export class GameManager extends Component {
  @property(UIMain)
  UIMain: UIMain = null;
  @property(UserPlane)
  userPlaner: UserPlane = null;
  @property(Prefab)
  enemyPlaner: Prefab = null;
  @property
  bulletSpeed = 1;
  @property
  shootTime = 0.3;
  @property(Node)
  bulletRoot: Node = null;
  @property(Label)
  gameScore = null;
  @property(AudioManager)
  audioManager: AudioManager = null;

  _isShooting = false;
  _curShootTime = 0;
  _createEnemyTime = 0.3;
  _curEnemyTime = 0;
  score = 0;
  isStart = false;

  protected start(): void {
    this._init();
  }

  // 游戏开始
  beginGame() {
    this._init();
    this.isStart = true;
    this.userPlaner.node.setPosition(0, 0, 30);
  }

  // 游戏结束
  stopGame() {
    this.isStart = false;
    this.toggleShootState(false);
    this.destroyAllPlanes();
    this.gameScore.string = "0";
    this.UIMain.stopGame();
  }

  protected _init() {
    this._curShootTime = this.shootTime;
    this.score = 0;
  }

  changeCore() {
    this.score++;
    this.gameScore.string = this.score.toString();
  }

  // 创建敌机
  createEnemyPlane() {
    const enemyPlaner = PoolManager.instance.getNode(
      this.enemyPlaner,
      this.node
    );
    const enemyPlanerComp = enemyPlaner.getComponent(EnemyPlane);
    enemyPlanerComp.show(this, randomRangeInt(16, 24));
    const x = math.randomRangeInt(-20, 20);
    enemyPlaner.setPosition(x, 0, -50);
  }

  toggleShootState(shooting?: boolean) {
    this._isShooting = shooting ?? !this._isShooting;
  }

  destroyAllPlanes() {
    // const children = this.gameManager.node.children;
    // const len = children.length;
    this.node.destroyAllChildren();
    this.bulletRoot.destroyAllChildren();
  }

  // 播放音效
  playAudioEffect(name: string, volume = 1) {
    this.audioManager.playAudio(name, volume);
  }

  protected update(dt: number): void {
    if (!this.isStart) return;
    // 处理子弹
    this._curShootTime += dt;
    if (this._isShooting && this._curShootTime > this.shootTime) {
      this.userPlaner.createUserBullet();
      this._curShootTime = 0;
    }

    // 创建敌机
    this._curEnemyTime += dt;
    if (this._curEnemyTime > this._createEnemyTime) {
      this.createEnemyPlane();
      this._curEnemyTime = -0.5;
    }
  }
}
