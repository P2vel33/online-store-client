import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import { Context } from "../../index";
import { fetchBrand, fetchDevices, fetchTypes } from "../../http/DeviceAPI";
import { observer } from "mobx-react-lite";

const CreateDevice = observer(({ show, onHide }) => {
  const { device } = useContext(Context);
  const [info, setInfo] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [brand, setBrand] = useState(null);
  const [type, setType] = useState(null);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };
  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const changeInfo = (key, value, number) => {
    setInfo(info.map((i) => (i.number === number ? { ...i, [key]: value } : i)));
  };

  const addDevice = () => {};

  const selectFile = (e) => {
    console.log(e);
  };

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrand().then((data) => device.setBrands(data));
  }, []);

  return (
    <Modal size={"lg"} centered show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Добавить тип</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>{device.selectedType.name ?? "Выберите тип"}</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => (
                <Dropdown.Item key={type.id} onClick={() => device.setSelectedType(type)}>
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>{device.selectedBrand.name ?? "Выберите бренд"}</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((brand) => (
                <Dropdown.Item key={brand.id} onClick={() => device.setSelectedBrand(brand)}>
                  {brand.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            value={name}
            className="mt-3"
            placeholder="Введите название устройства"
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Control
            value={price}
            className="mt-3"
            placeholder="Введите стоимость устройства"
            type="number"
            onChange={(e) => setPrice(+e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Вставьте фото устройства"
            type="file"
            onChange={(e) => selectFile(e)}
          />
          <hr />
          <Button variant={"outline-info"} onClick={addInfo}>
            Добавьте новое свойство
          </Button>
          {info.map((i) => (
            <Row className="mt-4" key={i.number}>
              <Col md={4}>
                <Form.Control
                  value={i.title}
                  onChange={(e) => changeInfo("title", e.target.value, i.number)}
                  placeholder="Введите название характеристики"
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  value={i.description}
                  onChange={(e) => changeInfo("description", e.target.value, i.number)}
                  placeholder="Введите название описание"
                />
              </Col>
              <Col md={4}>
                <Button variant={"outline-danger"} onClick={removeInfo}>
                  Удалить
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={"outline-danger"} onClick={onHide}>
          Закрыть
        </Button>
        <Button variant={"outline-success"} onClick={addDevice}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateDevice;
