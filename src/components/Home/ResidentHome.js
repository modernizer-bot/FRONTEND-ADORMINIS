import React, { useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import './ResidentHome.css';
import DormInfo from '../../assets/images/dormitory.png';
import Complain from '../../assets/images/resident-complain.png';
import Billing from '../../assets/images/receipt.png';

const ResidentHome = (props) => {
  const history = useHistory();
  useEffect(() => {
    if (props.roleId !== 0) {
      history.push('/login');
    }
  });

  return (
    <>
      <h1 className="mb-5">
        ยินดีต้อนรับ
        <span className="fs-3 ms-3 fw-normal">
          "{props.userFname} {props.userLname}"
        </span>
      </h1>

      <Row>
        <Col md={3} sm={10} xs={10} className="mb-3 mx-auto">
          <Link to={`/resident/home`} style={{ textDecoration: 'none' }}>
            <Card
              style={{ maxWidth: '20rem', border: 'rounded' }}
              className="mx-auto"
            >
              <Card.Body>
                <Card.Title>
                  <Link to={`/resident/dorm-info`}>
                    <h3 className="mb-3 fw-bold">ข้อมูลหอพัก</h3>
                  </Link>
                </Card.Title>
                <Card.Text>
                  <Col>
                    <img
                      src={DormInfo}
                      alt="Dormitory Information"
                      style={{
                        maxWidth: '10rem',
                        display: 'inline',
                        marginLeft: '50%',
                        transform: 'translateX(-50%)',
                      }}
                    />
                  </Col>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  ตรวจสอบรายละเอียดเพิ่มเติมของหอพัก
                </small>
              </Card.Footer>
            </Card>
          </Link>
        </Col>
        <Col md={3} sm={10} xs={10} className="mb-3 mx-auto">
          <Card
            style={{ maxWidth: '20rem', border: 'rounded' }}
            className="mx-auto"
          >
            <Card.Body>
              <Card.Title>
                <Link to={`/resident/all-bill`}>
                  <h3 className="mb-3 fw-bold">ใบแจ้งหนี้</h3>
                </Link>
              </Card.Title>
              <Card.Text>
                <Col>
                  <img
                    src={Billing}
                    alt="Invoice Information"
                    style={{
                      maxWidth: '10rem',
                      display: 'inline',
                      marginLeft: '50%',
                      transform: 'translateX(-50%)',
                    }}
                  />
                </Col>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                ดูใบแจ้งหนี้เดือนปัจจุบันและย้อนหลัง
              </small>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={3} sm={10} xs={10} className="mb-3 mx-auto">
          <Card
            style={{
              maxWidth: '20rem',
              border: 'rounded',
            }}
            className="mx-auto"
          >
            <Card.Body>
              <Card.Title>
                <Link to={`/resident/complain-request`}>
                  <h3 className="mb-3 fw-bold">แจ้งปัญหา</h3>
                </Link>
              </Card.Title>
              <Card.Text>
                <Col>
                  <img
                    src={Complain}
                    alt="Complain"
                    style={{
                      maxWidth: '10rem',
                      display: 'inline',
                      marginLeft: '50%',
                      transform: 'translateX(-50%)',
                    }}
                  />
                </Col>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                แจ้งปัญหาที่เกิดภายในห้องพักและประวัติการแจ้งปัญหา
              </small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>

      {/* <Container>
        <h1 id="header">หอสำราญ</h1>
        <h3>ห้อง 101</h3>
        <Row>
          <Col>
            <Button variant="success" id="button">
              <p id="dormtext">ข้อมูลหอพัก</p>
              <Row>
                <img
                  src={dorm}
                  alt="Dormitory Information"
                  id="dormimg"
                  className="justify-content-center"
                />
              </Row>
              <Row>
                <p id="dormdesc">ตรวจสอบรายละเอียดเพิ่มเติมของหอพัก</p>
              </Row>
            </Button>
          </Col>
          <Col>
            <Button variant="warning" id="button">
              <p id="dormtext">ใบแจ้งหนี้</p>
              <Row>
                <img
                  src={bill}
                  id="dormimg"
                  alt="Billing"
                  className="justify-content-center"
                />
              </Row>
              <Row>
                <p id="dormdesc">ดูใบแจ้งหนี้เดือนปัจจุบันและย้อนหลัง</p>
              </Row>
            </Button>
          </Col>
          <Col>
            <Button variant="danger" id="button">
              <p id="dormtext">แจ้งปัญหา</p>
              <Row>
                <img
                  src={complain}
                  id="dormimg"
                  alt="Complain"
                  className="justify-content-center"
                />
              </Row>
              <Row>
                <p id="dormdesc">
                  แจ้งปัญหาที่เกิดภายในห้องพักและ ประวัติการแจ้งปัญหา
                </p>
              </Row>
            </Button>
          </Col>
        </Row>
      </Container> */}
    </>
  );
};

export default ResidentHome;
