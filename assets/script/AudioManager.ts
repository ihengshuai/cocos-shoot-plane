import { _decorator, AudioClip, AudioSource, Component } from "cc";
const { ccclass, property } = _decorator;

@ccclass("AudioManager")
export class AudioManager extends Component {
  @property([AudioClip])
  audioList: AudioClip[] = [];

  audioDict: Record<string, AudioClip> = {};
  audioSource: AudioSource = null;

  protected start(): void {
    for (let i = 0; i < this.audioList.length; i++) {
      let audio = this.audioList[i];
      this.audioDict[audio.name] = audio;
    }

    this.audioSource = this.getComponent(AudioSource);
  }

  playAudio(name: string, volume = 1) {
    let audio = this.audioDict[name];
    if (audio) {
      this.audioSource.playOneShot(audio, volume);
    }
  }
}
