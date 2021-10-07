import axios from "axios";
import env from "../../env";
import { useState } from "react";
import {
  Row,
  Container,
  Col,
  Form,
  Button,
  Modal,
  FloatingLabel,
} from "react-bootstrap";
import { useHistory } from "react-router";
const AddResident = ({ ...props }) => {
  const [isAddComplete, setAddComplete] = useState(false);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    IDCardNo: "",
    telno: "",
    gender: "",
    email: "",
    startDate: "",
    endDate: "",
    checkinDate: "",
  });
  const {
    fname,
    lname,
    IDCardNo,
    telno,
    DOB,
    gender,
    email,
    startDate,
    endDate,
    checkinDate,
  } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const history = useHistory();

  const addResident = async (e) => {
    console.log(formData);
    isAddComplete(true);
    // await axios.post(`${env.url}addNoCode/:buildingID/:roomID`, {
    //   formData: formData,
    // });
  };

  return (
    <>
      <h1>เพิ่มผู้เช่า</h1>
      <Form>
        <Container style={{ maxWidth: "800px" }}>
          <h3>ข้อมูลส่วนตัว</h3>
          <Container
            className="py-4 rounded mb-3"
            style={{ backgroundColor: "#EAE7E2" }}
          >
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>ชื่อ</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="สมศรี"
                    onChange={(e) => onChange(e)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>นามสกุล</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="โชคดี"
                    onChange={(e) => onChange(e)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>วันเกิด</Form.Label>
                  <Form.Control
                    type="date"
                    onChange={(e) => onChange(e)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>รหัสบัตรประชาชน</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="xxxxxxxxxxxxx"
                    onChange={(e) => onChange(e)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>เบอร์โทรศัพท์</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="0xx-xxx-xxxx"
                    onChange={(e) => onChange(e)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>เพศ</Form.Label>
                  <Form.Select
                    onChange={(e) => onChange(e)}
                    name="gender"
                    value={gender}
                    required
                  >
                    <option defaultValue>เลือกเพศ...</option>
                    <option value="หญิง">หญิง</option>
                    <option value="ชาย">ชาย</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>ที่อยู่</Form.Label>
                  <Form.Control
                    style={{ maxWidth: "800px", padding: "30px" }}
                    type="text"
                    placeholder="126/54 ซอยบางบอน 5 ซอย 7 ถนนบางบอน 3 แขวงบางบอน​ เขต​บางบอน​ 
กรุงเทพ​มหานคร​ 10150"
                    onChange={(e) => onChange(e)}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container style={{ maxWidth: "800px", marginTop: "3%" }}>
          <h3>ข้อมูลการเช่าพัก</h3>

          <Container
            className="py-4 rounded mb-3"
            style={{ backgroundColor: "#EAE7E2" }}
          >
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>วันเริ่มสัญญา</Form.Label>
                  <Form.Control
                    type="date"
                    onChange={(e) => onChange(e)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>วันสิ้นสุดสัญญา</Form.Label>
                  <Form.Control
                    type="date"
                    onChange={(e) => onChange(e)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>วันที่เข้าพัก</Form.Label>
                  <Form.Control
                    type="date"
                    onChange={(e) => onChange(e)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
          </Container>

          <Row>
            <Col>
              <Button
                style={{
                  backgroundColor: "#c7e5f0",
                  marginTop: "5%",
                  marginBottom: "10%",
                  color: "#000",
                }}
              >
                ย้อนกลับ
              </Button>
            </Col>
            <Col>
              <Button
                onClick={() => {
                  addResident();
                }}
                style={{
                  backgroundColor: "#c7e5f0",
                  marginTop: "5%",
                  marginBottom: "10%",
                  color: "#000",
                }}
              >
                ตกลง
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
};

export default AddResident;
