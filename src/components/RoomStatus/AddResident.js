import axios from 'axios';
import env from '../../env';
// import { useState } from 'react';
import { Row, Container, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { useForm } from 'react-hook-form';

const AddResident = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = async (data) => {
    await axios.post(
      `${env.url}api/room/${props.match.params.buildingid}/${props.match.params.roomid}`,
      data
    );
    console.log(data);
    reset();
  };

  return (
    <>
      <h1>
        เพิ่มผู้เช่า <i className="fas fa-user-plus"></i>
      </h1>
      <Container style={{ marginBottom: '5%' }}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Container style={{ maxWidth: '800px' }}>
            <h3>ข้อมูลส่วนตัว</h3>
            <Container
              className="py-4 rounded mb-3"
              style={{ backgroundColor: '#EAE7E2' }}
            >
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>ชื่อ</Form.Label>
                    <Form.Control
                      name="fName"
                      type="text"
                      placeholder="สมศรี"
                      {...register('fName', { required: 'โปรดกรอกชื่อจริง' })}
                      onKeyUp={() => {
                        trigger('fName');
                      }}
                    />
                    {errors.fName && (
                      <small className="text-danger">
                        {errors.fName.message}
                      </small>
                    )}
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>นามสกุล</Form.Label>
                    <Form.Control
                      name="lName"
                      type="text"
                      placeholder="โชคดี"
                      {...register('lName', { required: 'โปรดกรอกนามสกุล' })}
                      onKeyUp={() => {
                        trigger('lName');
                      }}
                    />
                    {errors.lName && (
                      <small className="text-danger">
                        {errors.lName.message}
                      </small>
                    )}
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>วันเกิด</Form.Label>
                    <Form.Control
                      name="dateOfBirth"
                      type="date"
                      {...register('dateOfBirth', {
                        required: 'โปรดกรอกวัน/เดือน/ปี เกิด',
                      })}
                      onKeyUp={() => {
                        trigger('dateOfBirth');
                      }}
                    />
                    {errors.dateOfBirth && (
                      <small className="text-danger">
                        {errors.dateOfBirth.message}
                      </small>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>รหัสบัตรประชาชน</Form.Label>
                    <Form.Control
                      name="idCardNo"
                      type="text"
                      placeholder="รหัสบัตรประชาชน 13 หลัก"
                      className={`form-control ${errors.idCardNo && 'invalid'}`}
                      {...register('idCardNo', {
                        required: 'โปรดกรอกรหัสบัตรประชาชน',
                        minLength: {
                          value: 13,
                          message: 'รหัสบัตรประชาชนควรมี 13 หลัก',
                        },
                        maxLength: {
                          value: 13,
                          message: 'รหัสบัตรประชาชนควรมี 13 หลัก',
                        },
                      })}
                      onKeyUp={() => {
                        trigger('idCardNo');
                      }}
                    />
                    {errors.idCardNo && (
                      <small className="text-danger">
                        {errors.idCardNo.message}
                      </small>
                    )}
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>เบอร์โทรศัพท์</Form.Label>
                    <Form.Control
                      name="telNo"
                      type="text"
                      placeholder="0xx-xxx-xxxx"
                      className={`form-control ${errors.telNo && 'invalid'}`}
                      {...register('telNo', {
                        required: 'โปรดกรอกเบอร์โทรศัพท์',
                        pattern: {
                          value:
                            /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                          message: 'เบอร์โทรศัพท์',
                        },
                      })}
                      onKeyUp={() => {
                        trigger('telNo');
                      }}
                    />
                    {errors.telNo && (
                      <small className="text-danger">
                        {errors.telNo.message}
                      </small>
                    )}
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>เพศ</Form.Label>
                    <Form.Select
                      name="gender"
                      {...register('gender', {
                        required: 'โปรดกรอกเพศ',
                      })}
                      onKeyUp={() => {
                        trigger('gender');
                      }}
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
                      style={{ maxWidth: '800px', padding: '30px' }}
                      name="address"
                      type="text"
                      placeholder="126/54 ซอยบางบอน 5 ซอย 7 ถนนบางบอน 3 แขวงบางบอน​ เขต​บางบอน​ กรุงเทพ​มหานคร​ 10150"
                      {...register('address', {
                        required: 'โปรดกรอกที่อยู่ปัจจุบัน',
                      })}
                      onKeyUp={() => {
                        trigger('address');
                      }}
                    />
                    {errors.address && (
                      <small className="text-danger">
                        {errors.address.message}
                      </small>
                    )}
                  </Form.Group>
                </Col>
              </Row>
            </Container>
          </Container>
          <Container style={{ maxWidth: '800px', marginTop: '3%' }}>
            <h3>ข้อมูลการเช่าพัก</h3>

            <Container
              className="py-4 rounded mb-3"
              style={{ backgroundColor: '#EAE7E2' }}
            >
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>วันเริ่มสัญญา</Form.Label>
                    <Form.Control
                      name="startDate"
                      type="date"
                      {...register('startDate', {
                        required: 'โปรดกรอกวันเริ่มสัญญา',
                      })}
                      onKeyUp={() => {
                        trigger('startDate');
                      }}
                    />
                    {errors.startDate && (
                      <small className="text-danger">
                        {errors.startDate.message}
                      </small>
                    )}
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>วันสิ้นสุดสัญญา</Form.Label>
                    <Form.Control
                      name="endDate"
                      type="date"
                      {...register('endDate', {
                        required: 'โปรดกรอกวันสิ้นสุดสัญญา',
                      })}
                      onKeyUp={() => {
                        trigger('endDate');
                      }}
                    />
                    {errors.endDate && (
                      <small className="text-danger">
                        {errors.endDate.message}
                      </small>
                    )}
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>วันที่เริ่มเข้าพัก</Form.Label>
                    <Form.Control
                      name="checkInDate"
                      type="date"
                      {...register('checkInDate', {
                        required: 'โปรดกรอกวันที่เริ่มเข้าพัก',
                      })}
                      onKeyUp={() => {
                        trigger('checkInDate');
                      }}
                    />
                    {errors.checkInDate && (
                      <small className="text-danger">
                        {errors.checkInDate.message}
                      </small>
                    )}
                  </Form.Group>
                </Col>
              </Row>
            </Container>
            <Row style={{ marginTop: '5%' }}>
              <Col>
                <Link to="/all-room/120000001">
                  <Button id="btn-save">ย้อนกลับ</Button>
                </Link>
              </Col>
              <Col>
                <Button id="btn-save" type="submit" style={{ float: 'right' }}>
                  ตกลง
                </Button>
              </Col>
            </Row>
          </Container>
        </Form>
      </Container>
    </>
  );
};

export default withRouter(AddResident);
