import { _decorator, Component, Label, log, Node } from "cc";
import { GameManager } from "../GameManager";
import { UserPlane } from "../plane/UserPlane";
const { ccclass, property } = _decorator;

@ccclass("UIMain")
export class UIMain extends Component {
  @property(Node)
  gameStart: Node = null;
  @property(Node)
  gameOver: Node = null;
  @property(Node)
  game: Node = null;
  @property(Label)
  gameOverScore: Label = null;

  gameManager: GameManager = null;
  userPlaner: UserPlane = null;

  protected start(): void {
    // 激活节点
    this.gameStart.active = true;
    this.gameManager = this.node.parent.getComponentInChildren(GameManager);
    this.userPlaner = this.gameManager.userPlaner;
  }

  // 开始游戏
  startGame() {
    this.gameManager.beginGame();
    this.gameOver.active = false;
    this.gameStart.active = false;
    this.game.active = true;
    this.gameManager.playAudioEffect("button", 3);
  }

  // 结束游戏
  stopGame() {
    this.game.active = false;
    this.gameOver.active = true;
    this.gameOverScore.string = this.gameManager.score.toString();
  }

  // 返回主页
  backHome() {
    this.gameOver.active = false;
    this.gameStart.active = true;
    this.userPlaner.node.setPosition(0, 0, 0);
    this.gameManager.playAudioEffect("button", 3);
  }
}
