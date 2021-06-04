import Tabs from "./Tabs";
import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../../../App.css";

export interface VisitScheduler {
  title: string;
  headTitle: string;
  confirm: string;
  cancel: string;
}

const ModalExample = ({
  title,
  headTitle,
  confirm,
  cancel
}: VisitScheduler) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        {title}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          <b>{title}</b>
        </ModalHeader>
        <ModalBody>
          <Tabs />
        </ModalBody>
        <ModalFooter>
          <Button outline color="primary" onClick={toggle}>
            {confirm}
          </Button>
          <Button color="primary" onClick={toggle}>
            {confirm}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
