import React, { Component } from 'react';
import { Pagination,Drawer, List, NavBar, Icon } from 'antd-mobile';
 import logo from './logo.svg';
import './App.css';
//引入图片
import p1 from './img/0_01.jpg'
import p2 from './img/0_02_01.jpg'
import p3 from './img/0_02-02.jpg'
import p4 from './img/0_03-01.jpg'
import p5 from './img/0_03_02.jpg'
import p6 from './img/0_04_01.jpg'
import p7 from './img/0_04-02.jpg'
import p9 from './img/0_05_01.jpg'
import p8 from './img/0_05-02.jpg'
import p10 from './img/0_06_01.jpg'
import p11 from './img/0_06-02.jpg'
import p12 from './img/0_07_01.jpg'
import p13 from './img/0_07-02.jpg'
import p14 from './img/0_08-01.jpg'
import p15 from './img/0_08_02.jpg'
import p16 from './img/0_09_01.jpg'
import p17 from './img/0_09-02.jpg'
import p18 from './img/0_10-01.jpg'
import p19 from './img/0_10_02.jpg'
import p20 from './img/0_11_01.jpg'
import p21 from './img/0_11_02.jpg'
import p22 from './img/0_12_01.jpg'
import p23 from './img/0_12_02.jpg'
import p24 from './img/0_13_01.jpg'
import p25 from './img/0_13_02.jpg'
import p26 from './img/0_14_01.jpg'
import p27 from './img/0_14_02.jpg'
import p28 from './img/0_15_01.jpg'
import p29 from './img/0_15_02.jpg'
import p30 from './img/0_16_01.jpg'
import p31 from './img/0_16_02.jpg'
import p32 from './img/0_17_01.jpg'
import p33 from './img/0_17_02.jpg'
import p34 from './img/0_18_01.jpg'
import p35 from './img/0_18_02.jpg'
import p36 from './img/0_19_01.jpg'
import p37 from './img/0_19_02.jpg'
import p38 from './img/0_20_01.jpg'
import p39 from './img/0_20_02.jpg'
import p40 from './img/0_21_01.jpg'
import p41 from './img/0_21_02.jpg'
import p42 from './img/0_22_01.jpg'
import p43 from './img/0_22_02.jpg'
import p44 from './img/0_23_01.jpg'
import p45 from './img/0_23_02.jpg'
import p46 from './img/0_24_01.jpg'
import p47 from './img/0_24_02.jpg'
import p48 from './img/0_25_01.jpg'
import p49 from './img/0_25_02.jpg'
import p50 from './img/0_26_01.jpg'
import p51 from './img/0_26_02.jpg'
import p52 from './img/0_27_01.jpg'
import p53 from './img/0_27_02.jpg'
import p54 from './img/0_28_01.jpg'
import p55 from './img/0_28_02.jpg'
import p56 from './img/0_29_01.jpg'
import p57 from './img/0_29_02.jpg'
import p58 from './img/0_30_01.jpg'
import p59 from './img/0_30_02.jpg'
import p60 from './img/0_31_01.jpg'
import p61 from './img/0_31_02.jpg'








const imgUrl=Array.from([
    p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,
    p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,
    p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,
    p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,
    p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,
    p51,p52,p53,p54,p55,p56,p57,p58,p59,p60,
    p61
  ]);
const pageArr=[
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,
    28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,
    54,55,56,57,58,59,60,61
];

class App extends Component {
    state = {
        open: false,
        currentPage:0
    }
    onOpenChange = (...args) => {
        console.log(args);
        this.setState({ open: !this.state.open });
    }
    onShowImage=(...args)=>{

        console.log(args);

        //下一页
        if(args[0]==='add'){
            //校验数值是否越界
            if(this.state.currentPage+1>60){
                this.setState({currentPage:this.state.currentPage})
            }else {
                this.setState({currentPage:this.state.currentPage+1})
            }
        //上一页
        }else if(args[0]==='reduce'){
            //校验数值是否越界
            if(this.state.currentPage-1<0){
                this.setState({currentPage:this.state.currentPage})
            }else {
                this.setState({currentPage:this.state.currentPage-1})
            }
        //点击目录
        } else if(!isNaN(args[0])){

          this.setState({currentPage:args[0]});
        }else {

        }
    }

  render() {
      const sidebar = (<List className="Side-List">
          {pageArr.map((i, index) => {
              if (index === 0) {
                  return (<List.Item key={index}
                                     thumb={logo}
                                     className="firstMenu"
                                     multipleLine
                                     onClick={this.onShowImage.bind(this,index)}
                  >封面</List.Item>);
              }
              else  if(index===6){
                  return (<List.Item key={index}
                                     onClick={this.onShowImage.bind(this,index)}
                                     thumb={logo}
                                     className="firstMenu"
                  >引言</List.Item>);
              }else  if(index===8){
                  return (<List.Item key={index}
                                     onClick={this.onShowImage.bind(this,index)}
                                     thumb={logo}
                                     className="firstMenu"
                  >目录</List.Item>);
              }
              else  if(index===12){
                  return (<List.Item key={index}
                                     onClick={this.onShowImage.bind(this,index)}
                                     thumb={logo}
                                     className="firstMenu"
                  >第一篇 我们的威高</List.Item>);
              }
              else  if(index===15){
                  return (<List.Item key={index}
                                     onClick={this.onShowImage.bind(this,index)}
                                     thumb={logo}
                                     className="firstMenu"
                  >第二篇 核心理念</List.Item>);
              }else  if(index===20){
                  return (<List.Item key={index}
                                     onClick={this.onShowImage.bind(this,index)}
                                     thumb={logo}
                                     className="firstMenu"
                  >第三篇 共产党员十大表率</List.Item>);
              }else  if(index===24){
                  return (<List.Item key={index}
                                     onClick={this.onShowImage.bind(this,index)}
                                     thumb={logo}
                                     className="firstMenu"
                  >第四篇 领导干部应具备的能力</List.Item>);
              }else  if(index===27){
                  return (<List.Item key={index}
                                     onClick={this.onShowImage.bind(this,index)}
                                     thumb={logo}
                                     className="firstMenu"
                  >第五篇 领导干部操守</List.Item>);
              }
              else  if(index===31){
                  return (<List.Item key={index}
                                     onClick={this.onShowImage.bind(this,index)}
                                     thumb={logo}
                                     className="firstMenu"
                  >第六篇 威高十条</List.Item>);
              }else  if(index===33){
                  return (<List.Item key={index}
                                     onClick={this.onShowImage.bind(this,index)}
                                     thumb={logo}
                                     className="firstMenu"
                  >第七篇 道德准则--八荣八耻</List.Item>);
              }else  if(index===35){
                  return (<List.Item key={index}
                                     onClick={this.onShowImage.bind(this,index)}
                                     thumb={logo}
                                     className="firstMenu"
                  >第八篇 改进领导干部八大作风</List.Item>);
              }else  if(index===37){
                  return (<List.Item key={index}
                                     onClick={this.onShowImage.bind(this,index)}
                                     thumb={logo}
                                     className="firstMenu"
                  >第九篇 员工行为准则</List.Item>);
              }else  if(index===43){
                  return (<List.Item key={index}
                                     onClick={this.onShowImage.bind(this,index)}
                                     thumb={logo}
                                     className="firstMenu"
                  >第十篇 销售人员行为准则</List.Item>);
              }else  if(index===47){
                  return (<List.Item key={index}
                                     onClick={this.onShowImage.bind(this,index)}
                                     thumb={logo}
                                     className="firstMenu"
                  >第十一篇 威高形象</List.Item>);
              }else  if(index===49){
                  return (<List.Item key={index}
                                     onClick={this.onShowImage.bind(this,index)}
                                     thumb={logo}
                                     className="firstMenu"
                  >第十二篇 威高大事记</List.Item>);
              }else  if(index===55){
                  return (<List.Item key={index}
                                     onClick={this.onShowImage.bind(this,index)}
                                     thumb={logo}
                                     className="firstMenu"
                  >第十三篇 威高之歌</List.Item>);
              }else  if(index===56){
                  return (<List.Item key={index}
                                     onClick={this.onShowImage.bind(this,index)}
                                     thumb={logo}
                                     className="firstMenu"
                  >结束语</List.Item>);
              }



              // return (<List.Item key={index}
              //                    onClick={this.onShowImage.bind(this,index)}
              //                    thumb={logo}
              //                    className="secondMenu"
              // >................... {index}</List.Item>);
          })}
      </List>);
    return (
      <div className="App">
          <div>
              <NavBar className="App-Nav" icon={<Icon type="ellipsis" />} onLeftClick={this.onOpenChange}>威高手册</NavBar>
              <Drawer
                  className="my-drawer"
                  style={{ minHeight: document.documentElement.clientHeight }}
                  enableDragHandle
                  contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop:0 }}
                  sidebar={sidebar}
                  open={this.state.open}
                  onOpenChange={this.onOpenChange}
              >

                <div className="img-relative">
                    <img src={imgUrl[this.state.currentPage]} alt="暂无图片" className="Page-Image" onClick={this.onShowImage.bind(this)}/>
                    <div className="pagination-container" >
                        <Pagination total={61}
                                    className="custom-pagination-with-icon"
                                    current={this.state.currentPage+1}
                                    locale={{
                                        prevText: (<span className="arrow-align" onClick={this.onShowImage.bind(this,'reduce')}><Icon type="left" />上一页</span>),
                                        nextText: (<span className="arrow-align" onClick={this.onShowImage.bind(this,'add')}>下一页<Icon type="right" /></span>),
                                    }}
                        />
                    </div>
                </div>

              </Drawer>

          </div>
      </div>
    );
  }




}

export default App;
