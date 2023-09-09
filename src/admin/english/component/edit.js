import React, { useState } from 'react';
import {  Modal, Row, Col, Form,Input } from 'antd';


import './index.css';


const { TextArea } = Input;

const Edit = () => {
  const [formLayout] = useState('horizontal');
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [ProductImage,setProductImage] = useState(true);
  const [previewImageSrc, setPreviewImageSrc] = useState('');

  const handleChangeImage = async (e, data) => {
    setPreviewImageSrc(URL.createObjectURL(e.target.files[0])); 
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal open={isModalOpen} onCancel={handleCancel}
           width={1000}
      >
        <div className="model-title">
            <span>Chỉnh sửa từ vựng tiếng anh</span>
        </div>
        <hr />
        <Row>
            <Col span={12}>
                <Form
                    layout="vertical"
                    autoComplete="off"
                >
                    <Form.Item className="item-design">
                        <div layout="vertical" autoComplete="off">
                            <div className="label-title">
                                <label>Từ vựng (Tiếng Việt)</label>
                            </div>
                            <div className="label-info-company">
                                <input className="info-input"  />
                            </div>
                        </div>
                    </Form.Item>
                    <Form.Item className="item-design">
                        <div layout="vertical" autoComplete="off">
                            <div className="label-title">
                                <label>Câu ví dụ (Tiếng Việt)</label>
                            </div>
                            <div className="label-info-company">
                                <input className="info-input" />
                            </div>
                        </div>
                    </Form.Item>
                    <Form.Item className="item-design">
                        <div layout="vertical" autoComplete="off">
                            <div className="label-title">
                                <label>Từ vựng (Tiếng Anh)</label>
                            </div>
                            <div className="label-info-company">
                                <input className="info-input" />
                            </div>
                        </div>
                    </Form.Item>
                    <Form.Item className="item-design">
                        <div layout="vertical" autoComplete="off">
                            <div className="label-title">
                                <label>Câu ví dụ (Tiếng Anh)</label>
                            </div>
                            <div className="label-info-company">
                                <input className="info-input" />
                            </div>
                        </div>
                    </Form.Item>
                </Form>
            </Col> 
            <Col span={12}>
                    <div className="layout-content">
                        <div className="layout-info-image">
                           <div className="member__main_info_item">
                              <label htmlFor="clientImage" className='image-center'>
                                  <img
                                        className="core__img"
                                        
                                        alt=""
                                        style={{width:150, height: 100}}
                                  />
                              </label>
                              <div className='image-center-choose'   >                
                                  <label htmlFor="clientImage" className="custom-file-upload">
                                    <input
                                      onChange={e => handleChangeImage(e)}
                                      id="clientImage"
                                      type="file"
                                      name="client_logo"
                                      accept=".png, .jpeg, .jpg"
                                  />
                                  </label>           
                              </div>
                            </div> 
                        </div>
                    </div>
                    <Form.Item className="item-design">
                      <div layout="vertical" autoComplete="off">
                          <div className="label-title">
                              <label>Câu hỏi (Tiếng Anh)</label>
                          </div>
                          <div className="label-info-company">
                              <input className="info-input" />
                          </div>
                      </div>
                    </Form.Item>
                    <Form.Item className="item-design">
                        <div layout="vertical" autoComplete="off">
                            <div className="label-title">
                                <label>Câu trả lời (Tiếng Anh)</label>
                            </div>
                            <div className="label-info-company">
                                <input className="info-input" />
                            </div>
                        </div>
                    </Form.Item>
              </Col>
          </Row>
          <Form>
              <Form.Item className="item-design">
                  <div layout="vertical" autoComplete="off">
                      <div className="label-title">
                          <label>Link website tham khảo</label>
                      </div>
                      <div className="label-info-company">
                          <input className="info-input" />
                      </div>
                  </div>
              </Form.Item>   
          </Form>
          <Form>
              <Form.Item className="item-design">
                  <div layout="vertical" autoComplete="off">
                      <div className="label-title">
                          <label>Nội dung (Tiếng Việt)</label>
                      </div>
                      <div className="label-info-company">
                          <TextArea rows={7} />
                      </div>
                  </div>
              </Form.Item>   
          </Form>
          <Form>
              <Form.Item className="item-design">
                  <div layout="vertical" autoComplete="off">
                      <div className="label-title">
                          <label>Nội dung (Tiếng Anh)</label>
                      </div>
                      <div className="label-info-company">
                          <TextArea rows={7} />
                      </div>
                  </div>
              </Form.Item>   
          </Form>
          <hr />
            <div className="form-info-btn">
                <div className="btn-create-company">
                    <button className="btn-create">Save change</button>
                </div>
                <div className="btn-create-company">
                    <button className="btn-cancel" onClick={handleCancel}>Close</button>
                </div>
            </div>
      </Modal>
    </>
  );
};
export default Edit;