import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import env from '../../env';
// import { Redirect } from 'react-router';
// import { useHistory } from 'react-router';

const AdminProfile = (props) => {
  // const history = useHistory();
  //   useEffect(() => {
  //     if (props.roleId !== 0) {
  //       window.alert('คุณไม่มีสิทธิ์ในการเข้าถึง โปรดเข้าสู่ระบบ');
  //       <Redirect to="/login" />;
  //     }
  //   }, []);
  const [userProfile, setUserProfile] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const userData = await axios.get(
          `${env.url}api/user/info/${props.userId}`
        );
        setUserProfile(userData.data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    getUserProfile();
  }, [props.userId]);
  console.log(userProfile);

  if (loading) {
    return <h2 className="text-center fs-3 mt-5">Loading...</h2>;
  }
  return (
    <>
      <h1>
        ข้อมูลส่วนตัว <i className="fas fa-user-circle"></i>
      </h1>
      <Container>
        <Container
          className="w-75 p-3 mb-3 mt-3 rounded"
          style={{ backgroundColor: '#EAE7E2' }}
        >
          <Container>
            <Row>
              <Col>
                <p className="fw-bold">ชื่อ</p>
              </Col>
              <Col>
                <p>{userProfile.FNAME}</p>
              </Col>
              <Col>
                <p className="fw-bold">นามสกุล</p>
              </Col>
              <Col>
                <Col>
                  <p>{userProfile.LNAME}</p>
                </Col>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="fw-bold">วันเกิด</p>
              </Col>
              <Col>
                <p>{userProfile.DATEOFBIRTH}</p>
              </Col>
              <Col>
                <p className="fw-bold">เบอร์โทรศัพท์</p>
              </Col>
              <Col>
                <p>{userProfile.TELNO}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="fw-bold">อีเมล</p>
              </Col>
              <Col>
                <p>{userProfile.EMAIL}</p>
              </Col>
              <Col></Col>
              <Col></Col>
            </Row>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default AdminProfile;