import p5Types from "p5";

enum ParticipantType {
  PARTICIPANT = "participant",
  ACTOR = "actor"
}
export default class Participant {
  name: string;
  type: ParticipantType;
  position: p5Types.Vector;

  constructor(props: {
    name?: string;
    type?: ParticipantType;
    position: p5Types.Vector;
  }) {
    this.name = props.name || "";
    this.type = props.type ?? ParticipantType.PARTICIPANT;
    this.position = props.position;
  }

  draw(p5: p5Types) {
    p5.push();

    const fontSize = 16;
    const originX = this.position.x / 2;
    const originY = this.position.y / 2;
    const textWidth = p5.textWidth(this.name);
    const paddingX = 20;
    const paddingY = 20;
    const w = textWidth + paddingX * 2;
    const h = fontSize + paddingY * 2;

    // 绘制文字
    p5.textSize(fontSize);
    p5.fill(0);
    p5.textAlign(p5.CENTER, p5.CENTER);
    p5.text(this.name, originX, originY);

    // 绘制bbox
    p5.rectMode(p5.CENTER);
    p5.fill(255, 0);
    p5.rect(originX, originY, w, h);

    p5.pop();
  }
}
