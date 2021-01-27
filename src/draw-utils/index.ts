import p5 from "p5";
import p5Types from "p5";

export const arrow = (
  p5: p5Types,
  position: p5.Vector,
  direction?: p5.Vector
) => {
  p5.push();

  p5.translate(position);

  p5.pop();
};
