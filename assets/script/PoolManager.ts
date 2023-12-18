import { _decorator, Component, instantiate, Node, NodePool, Prefab } from "cc";
const { ccclass, property } = _decorator;

@ccclass("PoolManager")
export class PoolManager {
  private static _instance: PoolManager;
  private _dictPool: Record<string, NodePool> = {};

  static get instance() {
    if (!this._instance) {
      this._instance = new PoolManager();
    }
    return this._instance;
  }

  getNode(prefab: Prefab, parent: Node) {
    const name = prefab.data.name;
    let node: Node = null;
    const pool = this._dictPool[name];
    if (pool) {
      node = pool?.size() > 0 ? pool.get() : instantiate(prefab);
    } else {
      this._dictPool[name] = new NodePool();
      node = instantiate(prefab);
    }
    node.parent = parent;
    node.active = true;
    return node;
  }

  putNode(node: Node) {
    let name = node.name;
    node.parent = null;
    if (!this._dictPool[name]) {
      this._dictPool[name] = new NodePool();
    }
    this._dictPool[name].put(node);
  }
}
