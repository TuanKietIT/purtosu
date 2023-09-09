import {React,useState} from 'react';
import  './index.css';
import { 
    FormOutlined,
    DeleteOutlined,
    VerticalAlignBottomOutlined
} from '@ant-design/icons';

import Image from '../assets/images/profile-1.jpg';

import SideBar from '../layout/Sidebar.js'
import NavBar from '../layout/Navbar.js';


const Japanese = () => {
    const [action, setAction] = useState(false);
    const [status] = useState(0);
    const handleAction = () => {
        setAction(!action);
    }

    return (
       <div className="container"> 
           <SideBar/>
           <main>
               <NavBar/>
                <h1>All list Japanese</h1>
                <div className="new-users">
                    <div className='container-category-admin'>
                        <div className='category-admin-search'>
                            <div className='category-admin-select'>
                               <select name="cars" id="cars" className='category-select'>
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            <div className='category-admin-'>
                                <input type='text' className='category-search-input'></input>
                            </div>
                        </div>
                        <div className='category-admin-create'>
                           <button><VerticalAlignBottomOutlined /> Download file</button>
                        </div>
                    </div>
                </div>
                
                <div className="table-english">
                    <div className='list-english'>
                        <div className='list-english-line'>
                            <div className='list-english-id'>
                                <div className='list-english-info'>
                                     <span className='item-name-id'>ID:</span>
                                     <span className='item-id'>1</span>
                                </div>
                            </div>
                            <div className='list-english-item'>
                                <div className='list-english-info'>
                                     <img className='item-image' src={Image} alt="english"/>
                                </div>
                                <div className='list-english-details'>
                                     <span className='name-english'>Bắt đầu quá trình học thoi nào</span>
                                     <h3 className='description-english'>hahhaha</h3>
                                </div>
                            </div>
                            <div className='list-english-status'>
                                 <span></span>
                                 <p>tuankietity@gmail.com</p>
                            </div>
                            <div className='list-english-location'>
                                 <p>09/09/2023</p>
                            </div>
                            {status > 0 ? (
                                <div className='list-english-contact'>
                                    <button className='btn-true'>True</button>
                                </div>
                            ): (
                                <div className='list-english-contact'>
                                    <button className='btn-false'>false</button>
                                </div>
                            )}

                            <div className='list-english-action' onClick={handleAction}>
                               <p></p>
                               <p></p>
                               <p></p>
                               {action && (
                                <div className='list-english-sub-action'>
                                    <div className='list-english-sub'>
                                        <button className="bnt-edit_supplier" type="button" >
                                            <FormOutlined  className="btn-edit"/>
                                        </button>
                                    </div>
                                    <div className='list-english-sub'>
                                        <button className="btn_delete" type="button" >
                                            <DeleteOutlined className="btn-delete_supplier"/>
                                        </button>
                                    </div>
                               </div>
                               )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="table-english">
                    <div className='list-english'>
                        <div className='list-english-line'>
                            <div className='list-english-id'>
                                <div className='list-english-info'>
                                     <span className='item-name-id'>ID:</span>
                                     <span className='item-id'>1</span>
                                </div>
                            </div>
                            <div className='list-english-item'>
                                <div className='list-english-info'>
                                     <img className='item-image' src={Image} alt="english"/>
                                </div>
                                <div className='list-english-details'>
                                     <span className='name-english'>Bắt đầu quá trình học thoi nào</span>
                                     <h3 className='description-english'>hahhaha</h3>
                                </div>
                            </div>
                            <div className='list-english-status'>
                                 <span></span>
                                 <p>tuankietity@gmail.com</p>
                            </div>
                            <div className='list-english-location'>
                                 <p>09/09/2023</p>
                            </div>
                            {status > 0 ? (
                                <div className='list-english-contact'>
                                    <button className='btn-true'>True</button>
                                </div>
                            ): (
                                <div className='list-english-contact'>
                                    <button className='btn-false'>false</button>
                                </div>
                            )}

                            <div className='list-english-action' onClick={handleAction}>
                               <p></p>
                               <p></p>
                               <p></p>
                               {action && (
                                <div className='list-english-sub-action'>
                                    <div className='list-english-sub'>
                                        <button className="bnt-edit_supplier" type="button" >
                                            <FormOutlined  className="btn-edit"/>
                                        </button>
                                    </div>
                                    <div className='list-english-sub'>
                                        <button className="btn_delete" type="button" >
                                            <DeleteOutlined className="btn-delete_supplier"/>
                                        </button>
                                    </div>
                               </div>
                               )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="table-english">
                    <div className='list-english'>
                        <div className='list-english-line'>
                            <div className='list-english-id'>
                                <div className='list-english-info'>
                                     <span className='item-name-id'>ID:</span>
                                     <span className='item-id'>1</span>
                                </div>
                            </div>
                            <div className='list-english-item'>
                                <div className='list-english-info'>
                                     <img className='item-image' src={Image} alt="english"/>
                                </div>
                                <div className='list-english-details'>
                                     <span className='name-english'>Bắt đầu quá trình học thoi nào</span>
                                     <h3 className='description-english'>hahhaha</h3>
                                </div>
                            </div>
                            <div className='list-english-status'>
                                 <span></span>
                                 <p>tuankietity@gmail.com</p>
                            </div>
                            <div className='list-english-location'>
                                 <p>09/09/2023</p>
                            </div>
                            {status > 0 ? (
                                <div className='list-english-contact'>
                                    <button className='btn-true'>True</button>
                                </div>
                            ): (
                                <div className='list-english-contact'>
                                    <button className='btn-false'>false</button>
                                </div>
                            )}

                            <div className='list-english-action' onClick={handleAction}>
                               <p></p>
                               <p></p>
                               <p></p>
                               {action && (
                                <div className='list-english-sub-action'>
                                    <div className='list-english-sub'>
                                        <button className="bnt-edit_supplier" type="button" >
                                            <FormOutlined  className="btn-edit"/>
                                        </button>
                                    </div>
                                    <div className='list-english-sub'>
                                        <button className="btn_delete" type="button" >
                                            <DeleteOutlined className="btn-delete_supplier"/>
                                        </button>
                                    </div>
                               </div>
                               )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="table-english">
                    <div className='list-english'>
                        <div className='list-english-line'>
                            <div className='list-english-id'>
                                <div className='list-english-info'>
                                     <span className='item-name-id'>ID:</span>
                                     <span className='item-id'>1</span>
                                </div>
                            </div>
                            <div className='list-english-item'>
                                <div className='list-english-info'>
                                     <img className='item-image' src={Image} alt="english"/>
                                </div>
                                <div className='list-english-details'>
                                     <span className='name-english'>Bắt đầu quá trình học thoi nào</span>
                                     <h3 className='description-english'>hahhaha</h3>
                                </div>
                            </div>
                            <div className='list-english-status'>
                                 <span></span>
                                 <p>tuankietity@gmail.com</p>
                            </div>
                            <div className='list-english-location'>
                                 <p>09/09/2023</p>
                            </div>
                            {status > 0 ? (
                                <div className='list-english-contact'>
                                    <button className='btn-true'>True</button>
                                </div>
                            ): (
                                <div className='list-english-contact'>
                                    <button className='btn-false'>false</button>
                                </div>
                            )}

                            <div className='list-english-action' onClick={handleAction}>
                               <p></p>
                               <p></p>
                               <p></p>
                               {action && (
                                <div className='list-english-sub-action'>
                                    <div className='list-english-sub'>
                                        <button className="bnt-edit_supplier" type="button" >
                                            <FormOutlined  className="btn-edit"/>
                                        </button>
                                    </div>
                                    <div className='list-english-sub'>
                                        <button className="btn_delete" type="button" >
                                            <DeleteOutlined className="btn-delete_supplier"/>
                                        </button>
                                    </div>
                               </div>
                               )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="table-english">
                    <div className='list-english'>
                        <div className='list-english-line'>
                            <div className='list-english-id'>
                                <div className='list-english-info'>
                                     <span className='item-name-id'>ID:</span>
                                     <span className='item-id'>1</span>
                                </div>
                            </div>
                            <div className='list-english-item'>
                                <div className='list-english-info'>
                                     <img className='item-image' src={Image} alt="english"/>
                                </div>
                                <div className='list-english-details'>
                                     <span className='name-english'>Bắt đầu quá trình học thoi nào</span>
                                     <h3 className='description-english'>hahhaha</h3>
                                </div>
                            </div>
                            <div className='list-english-status'>
                                 <span></span>
                                 <p>tuankietity@gmail.com</p>
                            </div>
                            <div className='list-english-location'>
                                 <p>09/09/2023</p>
                            </div>
                            {status > 0 ? (
                                <div className='list-english-contact'>
                                    <button className='btn-true'>True</button>
                                </div>
                            ): (
                                <div className='list-english-contact'>
                                    <button className='btn-false'>false</button>
                                </div>
                            )}

                            <div className='list-english-action' onClick={handleAction}>
                               <p></p>
                               <p></p>
                               <p></p>
                               {action && (
                                <div className='list-english-sub-action'>
                                    <div className='list-english-sub'>
                                        <button className="bnt-edit_supplier" type="button" >
                                            <FormOutlined  className="btn-edit"/>
                                        </button>
                                    </div>
                                    <div className='list-english-sub'>
                                        <button className="btn_delete" type="button" >
                                            <DeleteOutlined className="btn-delete_supplier"/>
                                        </button>
                                    </div>
                               </div>
                               )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="table-english">
                    <div className='list-english'>
                        <div className='list-english-line'>
                            <div className='list-english-id'>
                                <div className='list-english-info'>
                                     <span className='item-name-id'>ID:</span>
                                     <span className='item-id'>1</span>
                                </div>
                            </div>
                            <div className='list-english-item'>
                                <div className='list-english-info'>
                                     <img className='item-image' src={Image} alt="english"/>
                                </div>
                                <div className='list-english-details'>
                                     <span className='name-english'>Bắt đầu quá trình học thoi nào</span>
                                     <h3 className='description-english'>hahhaha</h3>
                                </div>
                            </div>
                            <div className='list-english-status'>
                                 <span></span>
                                 <p>tuankietity@gmail.com</p>
                            </div>
                            <div className='list-english-location'>
                                 <p>09/09/2023</p>
                            </div>
                            {status > 0 ? (
                                <div className='list-english-contact'>
                                    <button className='btn-true'>True</button>
                                </div>
                            ): (
                                <div className='list-english-contact'>
                                    <button className='btn-false'>false</button>
                                </div>
                            )}

                            <div className='list-english-action' onClick={handleAction}>
                               <p></p>
                               <p></p>
                               <p></p>
                               {action && (
                                <div className='list-english-sub-action'>
                                    <div className='list-english-sub'>
                                        <button className="bnt-edit_supplier" type="button" >
                                            <FormOutlined  className="btn-edit"/>
                                        </button>
                                    </div>
                                    <div className='list-english-sub'>
                                        <button className="btn_delete" type="button" >
                                            <DeleteOutlined className="btn-delete_supplier"/>
                                        </button>
                                    </div>
                               </div>
                               )}
                            </div>
                        </div>
                    </div>
                </div>
                
        </main>
    </div>
    );
  }
  
  export default Japanese;
  