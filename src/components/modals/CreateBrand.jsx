import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createBrand } from "../../http/DeviceAPI";

const CreateBrand = ({ show, onHide }) => {
  const [value, setValue] = useState("");
  const addBrand = () => {
    createBrand({ name: value }).then((data) => {
      setValue("");
      onHide();
    });
  };
  return (
    <Modal size={"lg"} centered show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Добавить тип</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control value={value} placeholder="Введите название типа" onChange={(e) => setValue(e.target.value)} />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={"outline-danger"} onClick={onHide}>
          Закрыть
        </Button>
        <Button variant={"outline-success"} onClick={addBrand}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand;
