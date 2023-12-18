System.register("chunks:///_virtual/AudioManager.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(i){"use strict";var t,o,e,r,a,n,u,c,s,l;return{setters:[function(i){t=i.applyDecoratedDescriptor,o=i.inheritsLoose,e=i.initializerDefineProperty,r=i.assertThisInitialized,a=i.defineProperty},function(i){n=i.cclegacy,u=i._decorator,c=i.AudioClip,s=i.AudioSource,l=i.Component}],execute:function(){var d,p,h,f,y;n._RF.push({},"2396fOIGupFlYZid0E7xjjR","AudioManager",void 0);var g=u.ccclass,v=u.property;i("AudioManager",(d=g("AudioManager"),p=v([c]),d((y=t((f=function(i){function t(){for(var t,o=arguments.length,n=new Array(o),u=0;u<o;u++)n[u]=arguments[u];return t=i.call.apply(i,[this].concat(n))||this,e(r(t),"audioList",y,r(t)),a(r(t),"audioDict",{}),a(r(t),"audioSource",null),t}o(t,i);var n=t.prototype;return n.start=function(){for(var i=0;i<this.audioList.length;i++){var t=this.audioList[i];this.audioDict[t.name]=t}this.audioSource=this.getComponent(s)},n.playAudio=function(i,t){void 0===t&&(t=1);var o=this.audioDict[i];o&&this.audioSource.playOneShot(o,t)},t}(l)).prototype,"audioList",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),h=f))||h));n._RF.pop()}}}));

System.register("chunks:///_virtual/UIMain.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./GameManager.ts"],(function(e){"use strict";var t,a,r,i,n,o,c,s,l,u,g;return{setters:[function(e){t=e.applyDecoratedDescriptor,a=e.inheritsLoose,r=e.initializerDefineProperty,i=e.assertThisInitialized,n=e.defineProperty},function(e){o=e.cclegacy,c=e._decorator,s=e.Node,l=e.Label,u=e.Component},function(e){g=e.GameManager}],execute:function(){var m,p,f,h,v,b,y,M,d,S,O;o._RF.push({},"54b1epUs3NE5JfrwIcgrvyH","UIMain",void 0);var P=c.ccclass,I=c.property;e("UIMain",(m=P("UIMain"),p=I(s),f=I(s),h=I(s),v=I(l),m((M=t((y=function(e){function t(){for(var t,a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return t=e.call.apply(e,[this].concat(o))||this,r(i(t),"gameStart",M,i(t)),r(i(t),"gameOver",d,i(t)),r(i(t),"game",S,i(t)),r(i(t),"gameOverScore",O,i(t)),n(i(t),"gameManager",null),n(i(t),"userPlaner",null),t}a(t,e);var o=t.prototype;return o.start=function(){this.gameStart.active=!0,this.gameManager=this.node.parent.getComponentInChildren(g),this.userPlaner=this.gameManager.userPlaner},o.startGame=function(){this.gameManager.beginGame(),this.gameOver.active=!1,this.gameStart.active=!1,this.game.active=!0,this.gameManager.playAudioEffect("button",3)},o.stopGame=function(){this.game.active=!1,this.gameOver.active=!0,this.gameOverScore.string=this.gameManager.score.toString()},o.backHome=function(){this.gameOver.active=!1,this.gameStart.active=!0,this.userPlaner.node.setPosition(0,0,0),this.gameManager.playAudioEffect("button",3)},t}(u)).prototype,"gameStart",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=t(y.prototype,"gameOver",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=t(y.prototype,"game",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),O=t(y.prototype,"gameOverScore",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=y))||b));o._RF.pop()}}}));

System.register("chunks:///_virtual/UserPlane.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./Constants.ts","./PoolManager.ts","./Bullet.ts","./GameManager.ts"],(function(e){"use strict";var t,n,o,i,r,a,s,l,u,c,g,p,h,f,d,m,y,E;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,o=e.initializerDefineProperty,i=e.assertThisInitialized,r=e.defineProperty},function(e){a=e.cclegacy,s=e._decorator,l=e.Node,u=e.Prefab,c=e.systemEvent,g=e.SystemEvent,p=e.Collider,h=e.AudioSource,f=e.Component},function(e){d=e.Constants},function(e){m=e.PoolManager},function(e){y=e.Bullet},function(e){E=e.GameManager}],execute:function(){var b,M,v,P,C,S,T,_;a._RF.push({},"b207bvIqqVGE5qB48pLekVD","UserPlane",void 0);var B=s.ccclass,U=s.property;e("UserPlane",(b=B("UserPlane"),M=U(l),v=U(u),b((S=t((C=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return t=e.call.apply(e,[this].concat(a))||this,o(i(t),"bulletRoot",S,i(t)),o(i(t),"userBullet",T,i(t)),o(i(t),"speed",_,i(t)),r(i(t),"gameManager",null),t}n(t,e);var a=t.prototype;return a.start=function(){c.on(g.EventType.TOUCH_MOVE,this.updatePlanePos,this),c.on(g.EventType.TOUCH_START,this.touchStart,this),c.on(g.EventType.TOUCH_END,this.touchEnd,this),this.gameManager=this.node.parent.getComponentInChildren(E)},a.createUserBullet=function(){var e=m.instance.getNode(this.userBullet,this.bulletRoot),t=this.node.position;e.setPosition(t.x,t.y,t.z-7),e.getComponent(y).show(this.gameManager.bulletSpeed),this.gameManager.playAudioEffect("bullet1",.4)},a.onEnable=function(){this.getComponent(p).on("onTriggerEnter",this._collisionEnter,this)},a.onDisable=function(){this.getComponent(p).off("onTriggerEnter",this._collisionEnter,this)},a._collisionEnter=function(e){var t=e.otherCollider.getGroup(),n=d.CollisionGroup,o=n.ENEMY,i=n.ENEMY_BULLET;t!==o&&t!==i||(this.gameManager.stopGame(),this.getComponent(h).play())},a.updatePlanePos=function(e,t){if(this.gameManager.isStart){var n=e.getDelta(),o=this.node.position;this.node.setPosition(o.x+this.speed*n.x*.01,o.y,o.z-this.speed*n.y*.01)}},a.touchStart=function(e,t){this.gameManager.isStart&&this.gameManager.toggleShootState()},a.touchEnd=function(e,t){this.gameManager.isStart&&this.gameManager.toggleShootState()},t}(f)).prototype,"bulletRoot",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=t(C.prototype,"userBullet",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=t(C.prototype,"speed",[U],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),P=C))||P));a._RF.pop()}}}));

System.register("chunks:///_virtual/GameManager.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./AudioManager.ts","./PoolManager.ts","./EnemyPlane.ts","./UserPlane.ts","./UIMain.ts"],(function(e){"use strict";var t,i,n,r,o,a,l,s,u,c,h,m,g,f,p,y,b,d;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,r=e.assertThisInitialized,o=e.defineProperty},function(e){a=e.cclegacy,l=e._decorator,s=e.Prefab,u=e.Node,c=e.Label,h=e.randomRangeInt,m=e.math,g=e.Component},function(e){f=e.AudioManager},function(e){p=e.PoolManager},function(e){y=e.EnemyPlane},function(e){b=e.UserPlane},function(e){d=e.UIMain}],execute:function(){var S,P,_,M,T,A,E,v,w,z,I,R,U,G,C,D,F;a._RF.push({},"c0ae96bYARN/4Aay22+5ApF","GameManager",void 0);var L=l.ccclass,N=l.property;e("GameManager",(S=L("GameManager"),P=N(d),_=N(b),M=N(s),T=N(u),A=N(c),E=N(f),S((z=t((w=function(e){function t(){for(var t,i=arguments.length,a=new Array(i),l=0;l<i;l++)a[l]=arguments[l];return t=e.call.apply(e,[this].concat(a))||this,n(r(t),"UIMain",z,r(t)),n(r(t),"userPlaner",I,r(t)),n(r(t),"enemyPlaner",R,r(t)),n(r(t),"bulletSpeed",U,r(t)),n(r(t),"shootTime",G,r(t)),n(r(t),"bulletRoot",C,r(t)),n(r(t),"gameScore",D,r(t)),n(r(t),"audioManager",F,r(t)),o(r(t),"_isShooting",!1),o(r(t),"_curShootTime",0),o(r(t),"_createEnemyTime",.3),o(r(t),"_curEnemyTime",0),o(r(t),"score",0),o(r(t),"isStart",!1),t}i(t,e);var a=t.prototype;return a.start=function(){this._init()},a.beginGame=function(){this._init(),this.isStart=!0,this.userPlaner.node.setPosition(0,0,30)},a.stopGame=function(){this.isStart=!1,this.toggleShootState(!1),this.destroyAllPlanes(),this.gameScore.string="0",this.UIMain.stopGame()},a._init=function(){this._curShootTime=this.shootTime,this.score=0},a.changeCore=function(){this.score++,this.gameScore.string=this.score.toString()},a.createEnemyPlane=function(){var e=p.instance.getNode(this.enemyPlaner,this.node);e.getComponent(y).show(this,h(16,24));var t=m.randomRangeInt(-20,20);e.setPosition(t,0,-50)},a.toggleShootState=function(e){this._isShooting=null!=e?e:!this._isShooting},a.destroyAllPlanes=function(){this.node.destroyAllChildren(),this.bulletRoot.destroyAllChildren()},a.playAudioEffect=function(e,t){void 0===t&&(t=1),this.audioManager.playAudio(e,t)},a.update=function(e){this.isStart&&(this._curShootTime+=e,this._isShooting&&this._curShootTime>this.shootTime&&(this.userPlaner.createUserBullet(),this._curShootTime=0),this._curEnemyTime+=e,this._curEnemyTime>this._createEnemyTime&&(this.createEnemyPlane(),this._curEnemyTime=-.5))},t}(g)).prototype,"UIMain",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=t(w.prototype,"userPlaner",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=t(w.prototype,"enemyPlaner",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),U=t(w.prototype,"bulletSpeed",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),G=t(w.prototype,"shootTime",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.3}}),C=t(w.prototype,"bulletRoot",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=t(w.prototype,"gameScore",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=t(w.prototype,"audioManager",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=w))||v));a._RF.pop()}}}));

System.register("chunks:///_virtual/Constants.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(n){"use strict";var t,e;return{setters:[function(n){t=n.defineProperty},function(n){e=n.cclegacy}],execute:function(){e._RF.push({},"d02b0BjUwRE37q4PBA6gr0P","Constants",void 0);var s=n("Constants",(function(){}));t(s,"EnemyPlaneType",{TYPE1:1,TYPE2:2}),t(s,"CollisionGroup",{USER:2,ENEMY:4,USER_BULLET:8,ENEMY_BULLET:16}),e._RF.pop()}}}));

System.register("chunks:///_virtual/EnemyPlane.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./Constants.ts","./PoolManager.ts","./Bullet.ts"],(function(e){"use strict";var t,n,i,o,r,l,a,s,u,c,h,p,g;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,o=e.assertThisInitialized,r=e.defineProperty},function(e){l=e.cclegacy,a=e._decorator,s=e.Prefab,u=e.Collider,c=e.Component},function(e){h=e.Constants},function(e){p=e.PoolManager},function(e){g=e.Bullet}],execute:function(){var m,f,d,_,y;l._RF.push({},"d620eJWI7pFkrLj8SIpwJBX","EnemyPlane",void 0);var E=a.ccclass,B=a.property;e("EnemyPlane",(m=E("EnemyPlane"),f=B(s),m((y=t((_=function(e){function t(){for(var t,n=arguments.length,l=new Array(n),a=0;a<n;a++)l[a]=arguments[a];return t=e.call.apply(e,[this].concat(l))||this,i(o(t),"bullet",y,o(t)),r(o(t),"createBulletTime",1),r(o(t),"_speed",0),r(o(t),"_gameManager",void 0),r(o(t),"_curCreateBulletTime",0),t}n(t,e);var l=t.prototype;return l.update=function(e){var t=this.node.position,n=t.z+this._speed*e;this.node.setPosition(t.x,t.y,n),this._curCreateBulletTime+=e,this._curCreateBulletTime>this.createBulletTime&&(this.createEnemyBullet(t),this._curCreateBulletTime=0),n>100&&p.instance.putNode(this.node)},l.createEnemyBullet=function(e){var t=p.instance.getNode(this.bullet,this._gameManager.bulletRoot);t.setPosition(e.x,e.y,e.z+4),t.getComponent(g).show(.6,!0)},l.show=function(e,t){this._speed=t,this._gameManager=e,this._curCreateBulletTime=this.createBulletTime},l.onEnable=function(){this.getComponent(u).on("onTriggerEnter",this._collisionEnter,this)},l.onDisable=function(){this.getComponent(u).off("onTriggerEnter",this._collisionEnter,this)},l._collisionEnter=function(e){var t=e.otherCollider.getGroup(),n=h.CollisionGroup,i=n.USER,o=n.USER_BULLET;t!==i&&t!==o||(p.instance.putNode(this.node),this._gameManager.changeCore(),this._gameManager.playAudioEffect("enemy"))},t}(c)).prototype,"bullet",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=_))||d));l._RF.pop()}}}));

System.register("chunks:///_virtual/MovingGameBg.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(i){"use strict";var t,n,e,o,s,r,g,a,u;return{setters:[function(i){t=i.applyDecoratedDescriptor,n=i.inheritsLoose,e=i.initializerDefineProperty,o=i.assertThisInitialized,s=i.defineProperty},function(i){r=i.cclegacy,g=i._decorator,a=i.Node,u=i.Component}],execute:function(){var c,p,b,h,l,f,v;r._RF.push({},"de710hQ2xZC8aiqCcw2YALP","MovingGameBg",void 0);var d=g.ccclass,_=g.property;i("MovingGameBg",(c=d("MovingGameBg"),p=_(a),b=_(a),c((f=t((l=function(i){function t(){for(var t,n=arguments.length,r=new Array(n),g=0;g<n;g++)r[g]=arguments[g];return t=i.call.apply(i,[this].concat(r))||this,e(o(t),"bg01",f,o(t)),e(o(t),"bg02",v,o(t)),s(o(t),"_speed",10),s(o(t),"_bgMovingRange",90),t}n(t,i);var r=t.prototype;return r.start=function(){this.init()},r.init=function(){this.bg01.setPosition(0,-10,0),this.bg02.setPosition(0,-10,-this._bgMovingRange)},r.update=function(i){this.updateBackgroundPosition(i)},r.updateBackgroundPosition=function(i){this.bg01.setPosition(0,-10,this.bg01.position.z+i*this._speed),this.bg02.setPosition(0,-10,this.bg02.position.z+i*this._speed),this.bg01.position.z>this._bgMovingRange?this.bg01.setPosition(0,-10,this.bg02.position.z-this._bgMovingRange):this.bg02.position.z>this._bgMovingRange&&this.bg02.setPosition(0,-10,this.bg01.position.z-this._bgMovingRange)},t}(u)).prototype,"bg01",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=t(l.prototype,"bg02",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),h=l))||h));r._RF.pop()}}}));

System.register("chunks:///_virtual/PoolManager.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,n,o,i,a,c;return{setters:[function(t){e=t.defineProperty,n=t.createClass},function(t){o=t.cclegacy,i=t._decorator,a=t.instantiate,c=t.NodePool}],execute:function(){var r,s,l;o._RF.push({},"e76b8Ftv5ZKo6ytGO2acvSl","PoolManager",void 0);var u=i.ccclass;i.property,t("PoolManager",u("PoolManager")((l=s=function(){function t(){e(this,"_dictPool",{})}var o=t.prototype;return o.getNode=function(t,e){var n=t.data.name,o=null,i=this._dictPool[n];return i?o=(null==i?void 0:i.size())>0?i.get():a(t):(this._dictPool[n]=new c,o=a(t)),o.parent=e,o.active=!0,o},o.putNode=function(t){var e=t.name;t.parent=null,this._dictPool[e]||(this._dictPool[e]=new c),this._dictPool[e].put(t)},n(t,null,[{key:"instance",get:function(){return this._instance||(this._instance=new t),this._instance}}]),t}(),e(s,"_instance",void 0),r=l))||r);o._RF.pop()}}}));

System.register("chunks:///_virtual/Bullet.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./PoolManager.ts"],(function(t){"use strict";var e,n,o,i,s,r,l,c;return{setters:[function(t){e=t.inheritsLoose,n=t.defineProperty,o=t.assertThisInitialized},function(t){i=t.cclegacy,s=t._decorator,r=t.Collider,l=t.Component},function(t){c=t.PoolManager}],execute:function(){var u;i._RF.push({},"f7745I0rWRPGqcbhQX8DT7Z","Bullet",void 0);var a=s.ccclass;s.property,t("Bullet",a("Bullet")(u=function(t){function i(){for(var e,i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return e=t.call.apply(t,[this].concat(s))||this,n(o(e),"_speed",0),n(o(e),"_isEnemyBullet",!1),e}e(i,t);var s=i.prototype;return s.start=function(){},s.update=function(t){var e=this.node.position,n=0;n=this._isEnemyBullet?e.z+this._speed:e.z-this._speed,this.node.setPosition(e.x,e.y,n),(n<-60||n>60)&&c.instance.putNode(this.node)},s.show=function(t,e){void 0===e&&(e=!1),this._speed=t,this._isEnemyBullet=e},s.onEnable=function(){this.getComponent(r).on("onTriggerEnter",this._collisionEnter,this)},s.onDisable=function(){this.getComponent(r).off("onTriggerEnter",this._collisionEnter,this)},s._collisionEnter=function(t){c.instance.putNode(this.node)},i}(l))||u);i._RF.pop()}}}));

System.register("chunks:///_virtual/Test.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var o,e,n,s,i,r,c;return{setters:[function(t){o=t.inheritsLoose},function(t){e=t.cclegacy,n=t._decorator,s=t.SystemEvent,i=t.systemEvent,r=t.KeyCode,c=t.Component}],execute:function(){var p;e._RF.push({},"fe2fcnmYsNAh7voDRQQ2cPo","Test",void 0);var h=n.ccclass;n.property,t("Test",h("Test")(p=function(t){function e(){return t.apply(this,arguments)||this}o(e,t);var n=e.prototype;return n.start=function(){this.node.on(s.EventType.TOUCH_START,(function(t){console.log(t)})),i.on(s.EventType.KEY_DOWN,this.listenerKeyboard,this)},n.listenerKeyboard=function(t){var o=t.keyCode;o===r.KEY_W?this.node.setPosition(this.node.position.x,this.node.position.y+10):o===r.KEY_S?this.node.setPosition(this.node.position.x,this.node.position.y-10):o===r.KEY_A?this.node.setPosition(this.node.position.x-10,this.node.position.y):o===r.KEY_D&&this.node.setPosition(this.node.position.x+10,this.node.position.y)},e}(c))||p);e._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./AudioManager.ts","./Constants.ts","./PoolManager.ts","./Bullet.ts","./EnemyPlane.ts","./UserPlane.ts","./GameManager.ts","./UIMain.ts","./MovingGameBg.ts","./Test.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});