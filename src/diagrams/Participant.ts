import p5Types from "p5";

enum ParticipantType {
  PARTICIPANT = "participant",
  ACTOR = "actor",
}
export default class Participant {
  name: string;
  type: ParticipantType;
  position: p5Types.Vector;
  paddingX = 20;
  paddingY = 20;
  fontSize = 16;
  constructor(props: {
    name?: string;
    type?: ParticipantType;
    position: p5Types.Vector;
  }) {
    this.name = props.name || "";
    this.type = props.type ?? ParticipantType.PARTICIPANT;
    this.position = props.position;
  }
  getBoundingBox(p5: p5Types) {
    const textWidth = p5.textWidth(this.name);
    const width = textWidth + this.paddingX * 2;
    const height = this.fontSize + this.paddingY * 2;
    return {
      width,
      height,
    };
  }

  drawBoundingBox(p5: p5Types) {
    const { width, height } = this.getBoundingBox(p5);
    p5.push();
    p5.fill(255, 0);
    p5.stroke(255, 0, 0, 255);
    p5.rect(this.position.x, this.position.y, width, height);
    p5.pop();
  }

  draw(p5: p5Types) {
    p5.push();

    const textWidth = p5.textWidth(this.name);
    const w = textWidth + this.paddingX * 2;
    const h = this.fontSize + this.paddingY * 2;

    const originX = this.position.x + w / 2;
    const originY = this.position.y + h / 2;

    p5.translate(originX, originY);

    // 绘制生命线
    p5.line(0, h / 2, 0, 800);

    // 绘制bbox
    p5.fill(255, 0);
    p5.rect(-w / 2, -h / 2, w, h);

    // 绘制文字
    p5.textSize(this.fontSize);
    p5.fill(0);
    p5.textAlign(p5.CENTER, p5.CENTER);
    p5.text(this.name, 0, 0);

    p5.pop();
  }

  drawName() {}
}
