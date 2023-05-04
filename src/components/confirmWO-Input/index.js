import React from "react";
import SButton from "../Button";
import { Col, Form, Row } from "react-bootstrap";
import TextInputWithLabel from "../TextInputWithLabel";

function ConfirmWOInput({
  form,
  lists,
  handleChange,
  handleSubmit,
  isLoading,
}) {
  return (
    <Form method="post" className="form-register">
      <Row className="mt-4 mb-4">
        <Col className="ms-2">
          <Form.Label>User</Form.Label>
          <Form.Control
            name="UserRequestId"
            value={form?.UserRequestId}
            type="text"
            onChange={handleChange}
            disabled
            readOnly
          />
        </Col>

        <Col className="me-3">
          <Form.Label>Nama Peralatan</Form.Label>
          <Form.Control
            name="namaBarang"
            value={form?.namaBarang}
            type="text"
            onChange={handleChange}
            disabled
            readOnly
          />
        </Col>
      </Row>

      <Row className="mt-4 mb-4">
        <Col className="ms-2">
          <TextInputWithLabel
            label={"Departement"}
            name="departementId"
            value={""}
            type="text"
            onChange={""}
          />
        </Col>

        <Col className="me-3">
          <Form.Label>Kode Peralatan</Form.Label>
          <Form.Control
            name="KodeBarang"
            value={form?.kodeBarang}
            type="text"
            onChange={handleChange}
            disabled
            readOnly
          />
        </Col>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Permasalahan</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={form?.permasalahan}
          disabled
          readOnly
        />
      </Form.Group>

      <Row className="mt-4">
        <Col className="ms-3">
          <Form.Label>Tindakan :</Form.Label>
        </Col>
        <Col>
          <Form.Check // prettier-ignore
            type={"checkbox"}
            id={``}
            label={`Perbaikan`}
          />
        </Col>

        <Col className="me-3">
          <Form.Check // prettier-ignore
            type={"checkbox"}
            id={``}
            label={`Pergantian`}
          />
        </Col>

        <Col className="me-3">
          <Form.Check // prettier-ignore
            type={"checkbox"}
            id={``}
            label={`Request_Data`}
          />
        </Col>

        <Col className="me-3">
          <Form.Check // prettier-ignore
            type={"checkbox"}
            id={``}
            label={`Others`}
          />
        </Col>
      </Row>
      <Form.Control as="textarea" rows={3} />

      <Form.Group className="mb-4 mt-4">
        <Form.Label>Sparepart yang diganti</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Row className="mt-4 mb-4">
        <Col className="ms-2">
        <Form.Label>Pemohon</Form.Label>
          <Form.Control
            name="departementId"
            value={form?.UserRequestId}
            type="text"
            onChange={handleChange}
            readOnly
            disabled
          />
        </Col>

        <Col className="ms-2">
        <Form.Label>Disetujui</Form.Label>
          <Form.Control
            name="departementId"
            value={form?.UserApproveId}
            type="text"
            onChange={handleChange}
            readOnly
            disabled
          />
        </Col>

        <Col className="ms-2">
          <TextInputWithLabel
            label={"Dikerjakan Oleh"}
            name="departementId"
            value={""}
            type="text"
            onChange={""}
          />
        </Col>

        <Col className="me-3">
          <TextInputWithLabel
            label={"Mengetahui"}
            name="KodeBarang"
            value={""}
            type="text"
            onChange={""}
          />
        </Col>
      </Row>

      <div className="mx-auto w-25 mt-5">
        <SButton
          className="w-100"
          loading={""}
          disabled={""}
          action={""}
          variant="danger"
        >
          Submit
        </SButton>
      </div>
    </Form>
  );
}

export default ConfirmWOInput;
