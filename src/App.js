import React,{useState} from 'react'
import Chart from './component/Chart'
import Radial from './component/Radial'
import Sidebar from './component/Sidebar'
import Map from './component/Map'
import data from './data.json'

export default function App (){
    const [Toggle, setToggle] = useState(false)
    const onToggle = () =>{
        setToggle(true)
    }
    const onClose = () =>{
        setToggle(false)
    }
    console.log(data.stock.daily_vistor)
    return (
        <div className="container-fluid h100">
        <div className="row p-0 h100">
            <Sidebar isOpen={Toggle} onClose={onClose}/>
            <div className="col mainbody">
                <div className="topbar">
                    <div className="blocks he">
                        <button onClick={onToggle}>
                            <img alt="" src="./assets/images/ham.png" alt=""/>
                        </button>
                    </div>
                    <div className="blocks">
                        <a>
                            <img alt="" src="./assets/images/rr1.png" alt=""/>
                        </a>
                    </div>
                    <div className="blocks">
                        <a>
                            <img alt="" src="./assets/images/folder-1.png" alt=""/>
                        </a>
                    </div>
                    <div className="blocks">
                        <a>
                            <img alt="" src="./assets/images/settings-2.png" alt=""/>
                        </a>
                    </div>
                    <div className="blocked">
                        <form className="search">
                            <input type="text" name="" id="" placeholder="Type something here"/>
                            <button><img alt="" src="./assets/images/zoom-out.png"/></button>
                        </form>
                    </div>
                    <div className="blocks">
                        <a>
                            <img alt="" src="./assets/images/upload.png" alt=""/>
                        </a>
                    </div>
                    <div className="blocks">
                        <a>
                            <img alt="" src="./assets/images/envelope.png" alt=""/>
                        </a>
                    </div>
                    <div className="blocks">
                        <a>
                            <img alt="" src="./assets/images/planet-earth.png" alt=""/>
                        </a>
                    </div>
                    <div className="flex-grow-1 hg"></div>
                    <div className="profile_blocks">
                        <div className="row m-0 p-0">
                            <div className="col dp_block" style={{background: 'url(https://s3.amazonaws.com/uifaces/faces/twitter/vista/128.jpg)'}}>

                            </div>
                            <div className="col py-2 d-none d-md-block" >
                                <p className="pink_grad f-14 m-0"><b>{data.name}</b></p>
                                <p className="nametag ">{data.role}</p>
                            </div>
                            <div className="col-2 py-3 d-none d-md-block">
                                <button><img alt="" src="./assets/images/ham.png"/></button>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="stock">
                    <div className="row p-0 m-0">
                        <div className="col block">
                            <p className="ptitle">Daily Visitors</p>
                            <h2 className="pink_grad">{data.stock.daily_vistor}</h2>
                            <p className="point"><img alt="" src="./assets/images/up.png" />1020 <img alt="" src="./assets/images/down.png"/>1020</p>
                            <div className="data">
                                
                            </div>                            
                        </div>
                        <div className="col block">
                            <p className="ptitle">Daily Customers</p>
                                <h2 className="pink_grad">{data.stock.daily_customer}</h2>
                            <p className="point"><img alt="" src="./assets/images/up.png" />1020 <img alt="" src="./assets/images/down.png"/>1020</p>
                            <div className="data">
                                
                            </div>                            
                        </div>
                        <div className="col block">
                            <p className="ptitle">Daily Orders</p>
                                <h2 className="pink_grad">{data.stock.daily_order}</h2>
                            <p className="point"><img alt="" src="./assets/images/up.png" />1020 <img alt="" src="./assets/images/down.png"/>1020</p>
                            <div className="data">
                                
                            </div>                            
                        </div>
                        <div className="col block">
                            <p className="ptitle">Daily Sales</p>
                                <h2 className="pink_grad">{data.stock.daily_sales}</h2>
                            <p className="point"><img alt="" src="./assets/images/up.png" />1020 <img alt="" src="./assets/images/down.png"/>1020</p>
                            <div className="data">
                                
                            </div>                            
                        </div>
                        <div className="col block">
                            <p className="ptitle">Daily Shipments</p>
                                <h2 className="pink_grad">{data.stock.daily_shipment}</h2>
                            <p className="point"><img alt="" src="./assets/images/up.png" />1020 <img alt="" src="./assets/images/down.png"/>1020</p>
                            <div className="data">
                                
                            </div>                            
                        </div>
                        <div className="col block">
                            <div className="data">
                                <p className="ptitle">Daily Revenues</p>
                                <h2 className="pink_grad">{data.stock.daily_revenue}</h2>
                                <p className="point"><img alt="" src="./assets/images/up.png" />1020 <img alt="" src="./assets/images/down.png"/>1020</p>
                            </div>                            
                        </div>
                        <div className="col block">
                            <div className="data">
                                <p className="ptitle">Daily Reviews</p>
                                <h2 className="pink_grad">{data.stock.daily_review}</h2>
                                <p className="point"><img alt="" src="./assets/images/up.png" />1020 <img alt="" src="./assets/images/down.png"/>1020</p>
                            </div>                            
                        </div>
                        <div className="col block d-flex align-items-center">
                            <a href="#" className="pink_grad f-14">+ Add Stactics</a>                           
                        </div>                       
                    </div>
                </div>
                <div className="container-fluid w3 p-0 ">
                    <div className="row p-0 m-0 h100">
                        <div className="col mainbar p-2">
                            <div className="row m-0 p-0">
                                <div className="col-lg-8 col-md-6 col-sm-12 p-2">
                                    <div className="maincards">
                                        <p className="titlelabel">Monthly Revenue Progress</p>
                                        <Chart data={data.graph_data}/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 p-2">
                                    <div className="maincards text-center">
                                        <p className="titlelabel">Revenue Per Hour</p>
                                        <Radial/>
                                    </div>
                                </div>
                            </div>
                            <div className="row m-0 p-0">
                                <div className="col-lg-6 col-md-6 col-sm-12 p-2">
                                    <div className="maincards">
                                        <p className="titlelabel">Customer Feeds</p>
                                        <div className="row msg">
                                            <div className="col prof_user">
                                                <div className="prof_lier" style={{background: `url(https://s3.amazonaws.com/uifaces/faces/twitter/mlane/128.jpg)`}}>

                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="message">
                                                    <b>Sophie Turner</b> is simply dummy text of the printing and 
                                                    typesetting industry. Lorem Ipsum has been the industry's
                                                    standard dummy text ever since the 1500s, when an unknown                                                        
                                                </div>
                                                <div className="reply">
                                                    <div className="message mt-3">
                                                        <b>Sophie Turner</b> is simply dummy text of the printing and 
                                                        typesetting industry. Lorem Ipsum has been the industry's
                                                        standard dummy text ever since the 1500s, when an unknown                                                        
                                                    </div>
                                                    <div className="message mt-3">
                                                        <b>Sophie Turner</b> is simply dummy text of the printing and 
                                                        typesetting industry. Lorem Ipsum has been the industry's
                                                        standard dummy text ever since the 1500s, when an unknown                                                        
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="row msg">
                                            <div className="col prof_user">
                                                <div className="prof_lier" style={{background: 'url(https://s3.amazonaws.com/uifaces/faces/twitter/vista/128.jpg)'}}>

                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="message">
                                                    <b>Sophie Turner</b> is simply dummy text of the printing and 
                                                    typesetting industry. Lorem Ipsum has been the industry's
                                                    standard dummy text ever since the 1500s, when an unknown                                                        
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 p-0">
                                    <div className="maincards m-2">
                                        <p className="titlelabel">Todays Task</p>
                                        <table className="table table-striped tw">
                                            <tbody>
                                                <tr>
                                                    <th scope="row bx">
                                                        <div className="round">
                                                            <input type="checkbox" name="name[]" id="1" value="1"/>
                                                            <label for="1"></label>
                                                        </div>
                                                    </th>
                                                    <td className="pink_grad bx" style={{fontWeight: '900'}}>Mark</td>
                                                    <td className="dx">Otto</td>
                                                    <td className="bx">1:24 PM</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row bx">
                                                        <div className="round">
                                                            <input type="checkbox" name="name[]" id="2" value="2"/>
                                                            <label for="2"></label>
                                                        </div>
                                                    </th>
                                                    <td className="pink_grad bx" style={{fontWeight: '900'}}>Jacob</td>
                                                    <td className="dx">Thornton</td>
                                                    <td className="bx">1:24 PM</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row bx">
                                                        <div className="round">
                                                            <input type="checkbox" name="name[]" id="3" value="3"/>
                                                            <label for="3"></label>
                                                        </div>
                                                    </th>
                                                    <td className="pink_grad bx" style={{fontWeight: '900'}}>Larry</td>
                                                    <td className="dx">the Bird</td>
                                                    <td className="bx">1:24 PM</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row bx">
                                                        <div className="round">
                                                            <input type="checkbox" name="name[]" id="4" value="4"/>
                                                            <label for="4"></label>
                                                        </div>
                                                    </th>
                                                    <td className="pink_grad bx" style={{fontWeight: '900'}}>Larry</td>
                                                    <td className="dx">the Bird</td>
                                                    <td className="bx">1:24 PM</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="row m-0 p-0">
                                        
                                        
                                        <div className="col-lg-6 col-md-12 col-sm-12 p-2">
                                            <div className="maincards text-center">
                                                <p className="titlelabel">Shipments</p>
                                                <Map/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col rightbar p-0 d-lg-block d-none">
                            <div className="row m-0 p-0 bgg">
                                <div className="col-4 d-flex align-items-center justify-content-center selected">
                                    <img alt="" src="./assets/images/users.png"/>
                                </div>
                                <div className="col-4 d-flex align-items-center justify-content-center">
                                    <img alt="" src="./assets/images/chat.png"/>
                                </div>
                                <div className="col-4 d-flex align-items-center justify-content-center">
                                    <img alt="" src="./assets/images/like.png"/>
                                </div>
                            </div>
                            {
                                data.chat.map(item =>(
                                    <>
                                        <div className="row p-0 mx-0 my-3">
                                            <div className="col prof_user">
                                                <div className="prof_lier" style={{background : `url(${item.image})`}}></div>
                                            </div>
                                            <div className="col-7">
                                                <p className="namelable">{item.name}</p>
                                                <p className="nametag">{item.role}</p>
                                            </div>
                                            <div className="col py-2 px-2">
                                                <button className="text-center"><img alt="" src="./assets/images/chats.png"/></button>
                                            </div>
                                        </div>
                                        <hr className="my-1 mx-3"/>
                                    </>
                                ))
                            }
                            
                            
                            <div className="row bg-grey">
                                <div className="px-1 col-8">
                                    <input type="text" name="" id=""/>
                                </div>
                                <div className="px-1 col">
                                    <button><img alt="" src="./assets/images/zoom-out.png"/></button>
                                </div>
                                <div className="px-1 col">
                                    <button><img alt="" src="./assets/images/edit.png"/></button>
                                </div>
                            </div>
                            <p className="titlelabel text-center mt-3">Featured Companys</p>
                            <div className="row m-3">
                                <div className="col-4 my-2">
                                    <img alt="" src="assets/images/p1.png"/>
                                </div>
                                <div className="col-4 my-2">
                                    <img alt="" src="assets/images/p2.png"/>
                                </div>
                                <div className="col-4 my-2">
                                    <img alt="" src="assets/images/p3.png"/>
                                </div>
                                <div className="col-4 my-2">
                                    <img alt="" src="assets/images/p4.png"/>
                                </div>
                                <div className="col-4 my-2">
                                    <img alt="" src="assets/images/p5.png"/>
                                </div>
                                <div className="col-4 my-2">
                                    <img alt="" src="assets/images/p6.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    )
}