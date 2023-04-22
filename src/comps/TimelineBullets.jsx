import { Timeline } from "flowbite-react";
export default function Bullets(props) {
  return (
    <Timeline>
      {props.points.map((bullet) => (
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Body>{bullet}</Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}
