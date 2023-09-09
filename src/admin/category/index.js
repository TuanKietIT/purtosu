

import  './index.css';
import { 
    FormOutlined,
    DeleteOutlined,
    VerticalAlignBottomOutlined
} from '@ant-design/icons';



import SideBar from '../layout/Sidebar.js'
import NavBar from '../layout/Navbar.js';


const Category = () => {
    return (
       <div className="container"> 
           <SideBar/>
           <main>
               <NavBar/>
                <h1>OverView</h1>
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
                <div className="container-fluid">
                     <div className="col-lg-12">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <input type="hidden" name="id" />
                                    <div className="form-group">
                                        <label className="control-label">Tên Danh mục</label>
                                        <input type="text" className="form-control" name="name" v-model="category.name"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label">Mô tả danh mục</label>
                                        <textarea name="address" id="address" cols="30" rows="4" className="form-control" v-model="category.desc"></textarea>
                                    </div>
                                </div>
                                        
                                <div className="card-footer">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <button className="btn-save" v-if="showCreate"> Save</button>
                                            <button className="btn-save" v-if="showUpdate" > update</button>
                                            <button className="btn-cancel" type="button"> Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">
                                    <b>Danh sách danh mục</b>
                                </div>
                                <div className="card-body">
                                    <table className="table table-bordered ">
                                        <thead>
                                            <tr>
                                                <th className="text-center">Stt</th>
                                                <th className="text-center">Mô tả</th>
                                                <th className="text-center">Chức năng</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-center">2</td>
                                                <td className="name-category">
                                                    <p className='name-category-tile'>Name: <b className='name-category-a'>aaaaaaaaaaaaaaaaaaaaaaaaaaaaas</b></p>
                                                </td>
                                                <td className="text-center">
                                                    <button className="edit_supplier" type="button" >
                                                       <FormOutlined  className="btn-category-edit"/>
                                                    </button>
                                                    <button className="btn_delete" type="button" >
                                                        <DeleteOutlined className="btn-category-delete"/>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">2</td>
                                                <td className="name-category">
                                                    <p className='name-category-tile'>Name: <b className='name-category-a'>aaaaaaaaaaaaaaaaaaaaaaaaaaaaas</b></p>
                                                </td>
                                                <td className="text-center">
                                                    <button className="edit_supplier" type="button" >
                                                       <FormOutlined  className="btn-category-edit"/>
                                                    </button>
                                                    <button className="btn_delete" type="button" >
                                                        <DeleteOutlined className="btn-category-delete"/>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">2</td>
                                                <td className="name-category">
                                                    <p className='name-category-tile'>Name: <b className='name-category-a'>aaaaaaaaaaaaaaaaaaaaaaaaaaaaas</b></p>
                                                </td>
                                                <td className="text-center">
                                                    <button className="edit_supplier" type="button" >
                                                       <FormOutlined  className="btn-category-edit"/>
                                                    </button>
                                                    <button className="btn_delete" type="button" >
                                                        <DeleteOutlined className="btn-category-delete"/>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">2</td>
                                                <td className="name-category">
                                                    <p className='name-category-tile'>Name: <b className='name-category-a'>aaaaaaaaaaaaaaaaaaaaaaaaaaaaas</b></p>
                                                </td>
                                                <td className="text-center">
                                                    <button className="edit_supplier" type="button" >
                                                       <FormOutlined  className="btn-category-edit"/>
                                                    </button>
                                                    <button className="btn_delete" type="button" >
                                                        <DeleteOutlined className="btn-category-delete"/>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">2</td>
                                                <td className="name-category">
                                                    <p className='name-category-tile'>Name: <b className='name-category-a'>aaaaaaaaaaaaaaaaaaaaaaaaaaaaas</b></p>
                                                </td>
                                                <td className="text-center">
                                                    <button className="edit_supplier" type="button" >
                                                       <FormOutlined  className="btn-category-edit"/>
                                                    </button>
                                                    <button className="btn_delete" type="button" >
                                                        <DeleteOutlined className="btn-category-delete"/>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">2</td>
                                                <td className="name-category">
                                                    <p className='name-category-tile'>Name: <b className='name-category-a'>aaaaaaaaaaaaaaaaaaaaaaaaaaaaas</b></p>
                                                </td>
                                                <td className="text-center">
                                                    <button className="edit_supplier" type="button" >
                                                       <FormOutlined  className="btn-category-edit"/>
                                                    </button>
                                                    <button className="btn_delete" type="button" >
                                                        <DeleteOutlined className="btn-category-delete"/>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">2</td>
                                                <td className="name-category">
                                                    <p className='name-category-tile'>Name: <b className='name-category-a'>aaaaaaaaaaaaaaaaaaaaaaaaaaaaas</b></p>
                                                </td>
                                                <td className="text-center">
                                                    <button className="edit_supplier" type="button" >
                                                       <FormOutlined  className="btn-category-edit"/>
                                                    </button>
                                                    <button className="btn_delete" type="button" >
                                                        <DeleteOutlined className="btn-category-delete"/>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">2</td>
                                                <td className="name-category">
                                                    <p className='name-category-tile'>Name: <b className='name-category-a'>aaaaaaaaaaaaaaaaaaaaaaaaaaaaas</b></p>
                                                </td>
                                                <td className="text-center">
                                                    <button className="edit_supplier" type="button" >
                                                       <FormOutlined  className="btn-category-edit"/>
                                                    </button>
                                                    <button className="btn_delete" type="button" >
                                                        <DeleteOutlined className="btn-category-delete"/>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">2</td>
                                                <td className="name-category">
                                                    <p className='name-category-tile'>Name: <b className='name-category-a'>aaaaaaaaaaaaaaaaaaaaaaaaaaaaas</b></p>
                                                </td>
                                                <td className="text-center">
                                                    <button className="edit_supplier" type="button" >
                                                       <FormOutlined  className="btn-category-edit"/>
                                                    </button>
                                                    <button className="btn_delete" type="button" >
                                                        <DeleteOutlined className="btn-category-delete"/>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">2</td>
                                                <td className="name-category">
                                                    <p className='name-category-tile'>Name: <b className='name-category-a'>aaaaaaaaaaaaaaaaaaaaaaaaaaaaas</b></p>
                                                </td>
                                                <td className="text-center">
                                                    <button className="edit_supplier" type="button" >
                                                       <FormOutlined  className="btn-category-edit"/>
                                                    </button>
                                                    <button className="btn_delete" type="button" >
                                                        <DeleteOutlined className="btn-category-delete"/>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">2</td>
                                                <td className="name-category">
                                                    <p className='name-category-tile'>Name: <b className='name-category-a'>aaaaaaaaaaaaaaaaaaaaaaaaaaaaas</b></p>
                                                </td>
                                                <td className="text-center">
                                                    <button className="edit_supplier" type="button" >
                                                       <FormOutlined  className="btn-category-edit"/>
                                                    </button>
                                                    <button className="btn_delete" type="button" >
                                                        <DeleteOutlined className="btn-category-delete"/>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">2</td>
                                                <td className="name-category">
                                                    <p className='name-category-tile'>Name: <b className='name-category-a'>aaaaaaaaaaaaaaaaaaaaaaaaaaaaas</b></p>
                                                </td>
                                                <td className="text-center">
                                                    <button className="edit_supplier" type="button" >
                                                       <FormOutlined  className="btn-category-edit"/>
                                                    </button>
                                                    <button className="btn_delete" type="button" >
                                                        <DeleteOutlined className="btn-category-delete"/>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="container-pagination">
                                        <div className="pagination">
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>  
                    </div>  
                </div>
        </main>
    </div>
    );
  }
  
  export default Category;
  