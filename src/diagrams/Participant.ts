enum ParticipantType {
  PARTICIPANT = "participant",
  ACTOR = "actor",
}
export default class Participant {
  name: string;
  type: ParticipantType;

  constructor(props: { name?: string; type?: ParticipantType }) {
    this.name = props.name || "";
    this.type = props.type ?? ParticipantType.PARTICIPANT;
  }

  draw() {}
}
