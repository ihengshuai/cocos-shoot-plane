import {
  _decorator,
  Component,
  EventTouch,
  log,
  Node,
  SystemEvent,
  systemEvent,
  Touch,
} from "cc";
import { GameManager } from "../GameManager";
const { ccclass, property } = _decorator;

@ccclass("UIMain")
export class UIMain extends Component {
  @property
  speed = 1;
  @property(Node)
  userPlaner = null;

  @property(GameManager)
  gameManager: GameManager = null;

  protected start(): void {
    systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this.updatePlanePos, this);
    systemEvent.on(SystemEvent.EventType.TOUCH_START, this.touchStart, this);
    systemEvent.on(SystemEvent.EventType.TOUCH_END, this.touchEnd, this);
  }

  updatePlanePos(touch: Touch, event: EventTouch) {
    const delta = touch.getDelta();
    const pos = this.userPlaner.position;
    this.userPlaner.setPosition(
      pos.x + this.speed * delta.x * 0.01,
      pos.y,
      pos.z - this.speed * delta.y * 0.01
    );
  }

  touchStart(touch: Touch, event: EventTouch) {
    this.gameManager.toggleShootState();
  }
  touchEnd(touch: Touch, event: EventTouch) {
    this.gameManager.toggleShootState();
  }
}
