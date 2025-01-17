import React, { useState } from "react";
// import { Provinces } from '../../systemdata/Provinces';
function Test() {
  const [form, setForm] = useState([]);

  const prevIsValid = () => {
    if (form.length === 0) {
      return true;
    }
    const someEmpty = form.some(
      (item) => item.buildingname === "" || item.numoffloor === ""
    );

    if (someEmpty) {
      form.map((item, index) => {
        const allPrev = [...form];

        if (form[index].buildingname === "") {
          allPrev[index].errors.buildingname = "Buildingname is required";
        }

        if (form[index].numoffloor === "") {
          allPrev[index].errors.numoffloor = "Number of floor is required";
        }
        setForm(allPrev);
      });
    }

    return !someEmpty;
  };

  const handleAddLink = (e) => {
    e.preventDefault();
    const inputState = {
      buildingname: "",
      numoffloor: "",

      errors: {
        buildingname: null,
        numoffloor: null,
      },
    };

    if (prevIsValid()) {
      setForm((prev) => [...prev, inputState]);
    }
  };

  const onChange = (index, event) => {
    event.preventDefault();
    event.persist();

    setForm((prev) => {
      return prev.map((item, i) => {
        if (i !== index) {
          return item;
        }

        return {
          ...item,
          [event.target.name]: event.target.value,

          errors: {
            ...item.errors,
            [event.target.name]:
              event.target.value.length > 0
                ? null
                : [event.target.name] + " Is required",
          },
        };
      });
    });
  };

  const handleRemoveField = (e, index) => {
    e.preventDefault();

    setForm((prev) => prev.filter((item) => item !== prev[index]));
  };

  //dynamic roomtype
  const [type, setType] = useState([]);

  const IsValid = () => {
    if (type.length === 0) {
      return true;
    }
    const Empty = type.some(
      (item) => item.roomtype === "" || item.roomprice === ""
    );

    if (Empty) {
      type.map((item, index) => {
        const allPrev = [...type];

        if (type[index].roomtype === "") {
          allPrev[index].errors.roomtype = "Type of room is required";
        }

        if (type[index].roomprice === "") {
          allPrev[index].errors.roomprice = "Price is required";
        }
        setType(allPrev);
      });
    }

    return !Empty;
  };

  const handleAddType = (e) => {
    e.preventDefault();
    const inputState = {
      roomtype: "",
      roomprice: "",

      errors: {
        roomtype: null,
        roomprice: null,
      },
    };

    if (IsValid()) {
      setType((prev) => [...prev, inputState]);
    }
  };

  const onChangeType = (index, event) => {
    event.preventDefault();
    event.persist();

    setType((prev) => {
      return prev.map((item, i) => {
        if (i !== index) {
          return item;
        }

        return {
          ...item,
          [event.target.name]: event.target.value,

          errors: {
            ...item.errors,
            [event.target.name]:
              event.target.value.length > 0
                ? null
                : [event.target.name] + " Is required",
          },
        };
      });
    });
  };
  const handleRemove = (e, index) => {
    e.preventDefault();

    setType((prev) => prev.filter((item) => item !== prev[index]));
  };
  return (
    <div className="container">
      <h1 className="text-center mt-3">ตั้งค่าหอพัก</h1>
      <div className="container">
        <div
          className="card mx-auto"
          style={{ maxWidth: "1200px", width: "90%" }}
        >
          <div className="card-header">
            <p className="h5 fw-bold">ตั้งค่าที่อยู่</p>
          </div>
          <div className="card-body" style={{ backgroundColor: "#EAE7E2" }}>
            <div className="form-group row align-items-center mb-3">
              <label
                for="dormnameth"
                className="col-sm-2 col-md-2 col-form-label"
              >
                ชื่อหอพัก (TH)
              </label>
              <div className="col-sm-10 col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="dormnameth"
                  id="dormnameth"
                  placeholder="ตัวอย่าง: หอพัก อดอมินิส"
                  required
                />
              </div>
            </div>

            <div className="form-group row align-items-center mb-3">
              <label for="dormnameeng" className="col-sm-2 col-form-label">
                ชื่อหอพัก (ENG)
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="dormnameeng"
                  id="dormnameeng"
                  placeholder="ตัวอย่าง: Adorminis Place"
                  required
                />
              </div>
            </div>

            <div className="form-group row align-items-center mb-3">
              <label for="address" className="col-sm-2 col-form-label">
                ที่อยู่
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  id="address"
                  placeholder="บ้านเลขที่/หมู่ที่/ซอย"
                  required
                />
              </div>
            </div>

            <div className="form-group row align-items-center">
              <div className="col-md-6">
                <label for="street" className="col-sm-2 col-form-label">
                  ถนน
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="street"
                  id="street"
                  required
                />
              </div>
              <div className="col-md-6">
                <label for="district" className="col-sm-3 col-form-label">
                  แขวง
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="district"
                  id="district"
                  required
                />
              </div>
            </div>
            <div className="form-group row align-items-center">
              <div className="col-md-6">
                <label for="subdistrict" className="col-sm-2 col-form-label">
                  เขต
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="subdistrict"
                  id="subdistrict"
                  required
                />
              </div>
              <div className="col-md-6">
                <label for="postcode" className="col-sm-3 col-form-label">
                  รหัสไปรษณีย์
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="postcode"
                  id="postcode"
                  required
                />
              </div>
              {/* <div className='col-md-4'>
                        <label for='province' className='col-sm-3 col-form-label'>
                          จังหวัด
                        </label>
                        <select
                          className='form-select'
                          name='province'
                          id='province'
                          value={province}
                          onChange={e => onChange(e)}
                          required
                        >
                          {Provinces.map(item => {
                            return <option value={item.id}>{item.label}</option>;
                          })}
                        </select>
                      </div> */}
            </div>
          </div>
        </div>
        <div
          className="card mx-auto mt-5"
          style={{ maxWidth: "1200px", width: "90%" }}
        >
          <div className="card-header">
            <p className="h5 fw-bold">ตั้งค่าตึก</p>
          </div>

          <div className="card-body" style={{ backgroundColor: "#EAE7E2" }}>
            <div className="row">
              {/* {JSON.stringify(form)} */}
              {form.map((item, index) => (
                <div className="row mt-3" key={`item-${index}`}>
                  <div className="col">
                    <div className="form-group row align-items-center">
                      <label
                        for="buildingname"
                        className="col-sm-3 col-md-2 col-form-label"
                      >
                        ชื่อตึก
                      </label>
                      <div className="col-sm-9 col-md-10">
                        <input
                          type="text"
                          className={
                            item.errors.buildingname
                              ? "form-control  is-invalid"
                              : "form-control"
                          }
                          name="buildingname"
                          id="buildingname"
                          value={item.buildingname}
                          onChange={(e) => onChange(index, e)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group row align-items-center">
                      <label
                        for="numoffloor"
                        className="col-sm-3 col-md-3 col-form-label"
                      >
                        จำนวนชั้น
                      </label>
                      <div className="col-sm-9 col-md-6">
                        <input
                          type="number"
                          className={
                            item.errors.numoffloor
                              ? "form-control  is-invalid"
                              : "form-control"
                          }
                          name="numoffloor"
                          id="numoffloor"
                          value={item.numoffloor}
                          onChange={(e) => onChange(index, e)}
                          min="1"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    className="btn btn-light col-2"
                    onClick={(e) => handleRemoveField(e, index)}
                  >
                    ลบ
                  </button>
                </div>
              ))}
            </div>
            <button
              className="btn btn-primary mt-2  mb-2 col-4"
              onClick={handleAddLink}
            >
              เพิ่มตึก
            </button>
          </div>
        </div>
        <div
          className="card mx-auto mt-5"
          style={{ maxWidth: "1200px", width: "90%" }}
        >
          <div className="card-header">
            <p className="h5 fw-bold">ตั้งค่าหอพัก</p>
          </div>

          <div className="card-body" style={{ backgroundColor: "#EAE7E2" }}>
            <div className="row">
              {/* {JSON.stringify(form)} */}
              {type.map((item, index) => (
                <div className="row mt-3" key={`item-${index}`}>
                  <div className="col">
                    <div className="form-group row align-items-center">
                      <label
                        for="roomtype"
                        className="col-sm-3 col-md-2 col-form-label"
                      >
                        ประเภทห้อง
                      </label>
                      <div className="col-sm-9   col-md-10">
                        <input
                          type="text"
                          className={
                            item.errors.roomtype
                              ? "form-control  is-invalid"
                              : "form-control"
                          }
                          name="roomtype"
                          id="roomtype"
                          value={item.roomtype}
                          onChange={(e) => onChangeType(index, e)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group row align-items-center">
                      <label
                        for="roomprice"
                        className="col-sm-3 col-md-3 col-form-label"
                      >
                        ราคา
                      </label>
                      <div className="col-sm-9 col-md-6">
                        <input
                          type="text"
                          className={
                            item.errors.roomprice
                              ? "form-control  is-invalid"
                              : "form-control"
                          }
                          name="roomprice"
                          id="roomprice"
                          value={item.roomprice}
                          onChange={(e) => onChangeType(index, e)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    className="btn btn-light col-2"
                    onClick={(e) => handleRemove(e, index)}
                  >
                    ลบ
                  </button>
                </div>
              ))}
            </div>
            <button
              className="btn btn-primary mt-2  mb-2 col-4"
              onClick={handleAddType}
            >
              เพิ่มประเภทห้อง
            </button>
          </div>
        </div>

        <div
          className="card mx-auto mt-5 mb-3"
          style={{ maxWidth: "1200px", width: "90%" }}
        >
          <div className="card-header">
            <p className="h5 fw-bold">อื่น ๆ</p>
          </div>
          <div className="card-body" style={{ backgroundColor: "#EAE7E2" }}>
            <div className="row">
              <div className="col">
                <h6 className="fw-bold">ค่าน้ำ</h6>
                <div className="form-group row align-items-center">
                  <label
                    for="WaterPrice"
                    className="col-sm-3 col-md-3 col-form-label"
                  >
                    ราคา/หน่วย
                  </label>
                  <div className="col-sm-9 col-md-9">
                    <input
                      type="text"
                      className="form-control"
                      name="WaterPrice"
                      id="WaterPrice"
                      // value={waterprice}
                      onChange={(e) => onChange(e)}
                      required
                    />
                  </div>
                </div>
                <div className="form-group row align-items-center">
                  <label
                    for="MinWaterUnit"
                    className="col-sm-3 col-md-3 col-form-label"
                  >
                    หน่วยขั้นต่ำ
                  </label>
                  <div className="col-sm-9 col-md-9">
                    <input
                      type="text"
                      className="form-control"
                      name="MinWaterUnit"
                      id="MinWaterUnit"
                      //  value={minwaterunit}
                      onChange={(e) => onChange(e)}
                      required
                    />
                  </div>
                </div>
                <div className="form-group row align-items-center">
                  <label
                    for="input_id_1"
                    className="col-sm-3 col-md-3 col-form-label"
                  >
                    ราคาขั้นต่ำ
                  </label>
                  <div className="col-sm-9 col-md-9">
                    <input
                      type="text"
                      className="form-control"
                      name="input_id_1"
                      id="input_id_1"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="col">
                <h6 className="fw-bold">ค่าไฟ</h6>
                <div className="form-group row align-items-center">
                  <label
                    for="ElectricityPrice"
                    className="col-sm-3 col-md-3 col-form-label"
                  >
                    ราคา/หน่วย
                  </label>
                  <div className="col-sm-9 col-md-9">
                    <input
                      type="text"
                      className="form-control"
                      name="ElectricityPrice"
                      id="ElectricityPrice"
                      // value={electricityprice}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
