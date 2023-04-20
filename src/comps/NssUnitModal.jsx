import { Modal, Button } from "flowbite-react";
import React, { useState } from "react";
export default function UnitModal(props) {
  const [show, setShow] = useState(false);
  const onClick = () => setShow(true);
  const onClose = () => setShow(false);

  return (
    <React.Fragment>
      <div className="w-fit m-auto cursor-pointer p-3 text-[#37316f] bg-blue-200 border-blue-400 border-2 border-solid" onClick={onClick}>View Unit Members</div>
      <Modal size={"5xl"} dismissible={true} show={show} onClose={onClose}>
        <Modal.Header>UNIT MEMBERS</Modal.Header>
        <Modal.Body>
          <div className="flex flex-col items-center md:flex-row flex-wrap max-h-96 overflow-auto">
            {props.members.map((member) => (
              <div className="m-2 p-2 text-center w-5/6 md:h-14 md:w-52 max-w-xs rounded-lg bg-gray-200 bg-opacity-50">
                <div className="text-sm">{member.name}</div>
                <div className="text-xs">{member.rollNo}</div>
              </div>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button href="https://google.co.in" rel="noreferrer" target="__blank">Apply For NSS Unit, JGEC</Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}
