export class Constants {
  /**
   * 敌机类型
   */
  public static EnemyPlaneType = {
    TYPE1: 1,
    TYPE2: 2
  }

  /**
   * 碰撞分组
   */
  public static CollisionGroup = {
    /*
     * 玩家
     */
    USER: 1 << 1,

    /*
     * 敌机
     */
    ENEMY: 1 << 2,

    /**
     * 玩家子弹
     */
    USER_BULLET: 1 << 3,

    /**
     * 敌机子弹
     */
    ENEMY_BULLET: 1 << 4
  }
}
