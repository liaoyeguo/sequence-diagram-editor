import React, { Component } from "react";
import Sketch from "react-p5";
import p5Types from "p5";
import Participant from "./diagrams/Participant";

export default class App extends Component {
  setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(
      canvasParentRef
    );
    // p5.frameRate(this.fr);
    // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
  };
  draw = (p5: p5Types) => {
    p5.background("#eee");
    // p5.fill(234, 31, 81);
    // p5.noStroke();
    // p5.rect(50, 50, 250, 250);
    // p5.fill(255);
    // p5.textStyle(p5.NORMAL);
    p5.textSize(16);
    // p5.text("p5*", 60, 250);
    const p = new Participant({
      name: "opphkdoakow",
      position: p5.createVector(p5.width / 2, p5.height / 2)
    });
    p.draw(p5);
  };

  render() {
    return <Sketch setup={this.setup as any} draw={this.draw as any} />;
  }
}
