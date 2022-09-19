import React, {} from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { memo } from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    paper1: {
      color: '#FF0000',
      fontSize: 12,
      fontWeight: 'bold',
      borderRadius:'5px',
      paddingLeft: '10px',
      width:'auto',
      height:'auto',
    },
    paper2: {
      color: '#33FFFF',
      fontSize: 12,
      fontWeight: 'bold',
      borderRadius:'5px',
      paddingLeft: '5px',
      width:'auto',
      height:'auto',
    },
    paper3: {
      color: '#FF6699',
      fontSize: 12,
      fontWeight: 'bold',
      borderRadius:'5px',
      paddingLeft: '5px',
      width:'auto',
      height:'auto',
    },
    paper4: {
      color: '#33CCCC',
      fontSize: 12,
      fontWeight: 'bold',
      borderRadius:'5px',
      paddingLeft: '5px',
      width:'auto',
      height:'auto',
    },
    paper5: {
      color: '#0066FF',
      fontSize: 12,
      fontWeight: 'bold',
      borderRadius:'5px',
      paddingLeft: '5px',
      width:'auto',
      height:'auto',
    },
    paper6: {
      color: '#CC33CC',
      fontSize: 12,
      fontWeight: 'bold',
      borderRadius:'5px',
      paddingLeft: '5px',
      width:'auto',
      height:'auto',
    },
    paper7: {
      color: '#FFCC33',
      fontSize: 12,
      fontWeight: 'bold',
      borderRadius:'5px',
      paddingLeft: '5px',
      width:'auto',
      height:'auto',
    },
    paper8: {
      color: '#0000FF',
      fontSize: 12,
      fontWeight: 'bold',
      borderRadius:'5px',
      paddingLeft: '5px',
      width:'auto',
      height:'auto',
    },
    textStyle: {
      paddingTop: '2px',
      paddingBottom:'2px',
    }
  }),
);

const CityGrid = ({handelHover, itemId}) => {
  const classes = useStyles()

  return ( 
    <div class='row' style={{ display:'flex'}}>
        <div class="column" style={{ marginRight:'15px' }}>
          <div id='1' class={classes.paper1} style={(handelHover===true  && itemId===1) ? { backgroundColor:'yellow', } : {}}>
            <span>
             <p class={classes.textStyle}>01 - Hà Nội</p>
            </span> 
          </div>
          <div id='2' class={classes.paper1} style={(handelHover===true && itemId===2) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>02 - Vĩnh Phúc</p>
          </div>
          <div id='3' class={classes.paper1} style={(handelHover===true && itemId===3) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>03 - Bắc Ninh</p>
          </div>
          <div id='4' class={classes.paper1} style={(handelHover===true && itemId===4) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>04 - Hưng Yên</p>
          </div>
          <div id='5' class={classes.paper1} style={(handelHover===true && itemId===5) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>05 - Hà Nam</p>
          </div>
          <div id='6' class={classes.paper1} style={(handelHover===true && itemId===6) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>06 - Hải Dương</p>
          </div>
          <div id='7' class={classes.paper1} style={(handelHover===true && itemId===7) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>07 - Hải Phòng</p>
          </div>
          <div id='8' class={classes.paper1} style={(handelHover===true && itemId===8) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>08 - Thái Bình</p>
          </div>
          <div id='9' class={classes.paper1} style={(handelHover===true && itemId===9) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>09 - Nam Định</p>
          </div>
          <div id='10' class={classes.paper1} style={(handelHover===true && itemId===10) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>10 - Ninh Bình</p>
          </div>
          <div style={{ height:'10px' }}></div>
          <div id='11' class={classes.paper2} style={(handelHover===true && itemId===11) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>11 - Lai Châu</p>
          </div>
          <div id='12' class={classes.paper2} style={(handelHover===true && itemId===12) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>12 - Lào Cai</p>
          </div>
          <div id='13' class={classes.paper2} style={(handelHover===true && itemId===13) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>13 - Điện Biên</p>
          </div>
          <div id='14' class={classes.paper2} style={(handelHover===true && itemId===14) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>14 - Yên Bái</p>
          </div>
          <div id='15' class={classes.paper2} style={(handelHover===true && itemId===15) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>15 - Sơn La</p>
          </div>
          <div id='16' class={classes.paper2} style={(handelHover===true && itemId===16) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>16 - Hoà Bình</p>
          </div>
          <div style={{ height:'10px' }}></div>
            <div class={classes.paper3} style={(handelHover===true && itemId===17) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>17 - Hà Giang</p>
            </div>
            <div class={classes.paper3} style={(handelHover===true && itemId===18) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>18 - Cao Bằng</p>
            </div>
            <div class={classes.paper3} style={(handelHover===true && itemId===19) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>19 - Tuyên Quang</p>
            </div>
            <div class={classes.paper3} style={(handelHover===true && itemId===20) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>20 - Bắc Kạn</p>
            </div>
            <div class={classes.paper3} style={(handelHover===true && itemId===21) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>21 - Lạng Sơn</p>
            </div>
            <div class={classes.paper3} style={(handelHover===true && itemId===22) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>22 - Thái Nguyên</p>
            </div>
            <div class={classes.paper3} style={(handelHover===true && itemId===23) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>23 - Bắc Giang</p>
            </div>
            <div class={classes.paper3} style={(handelHover===true && itemId===24) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>24 - Quảng Ninh</p>
            </div>
            <div class={classes.paper3} style={(handelHover===true && itemId===25) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>25 - Phú Thọ</p>
            </div>
        </div>
        
        <div class="column" style={{ marginRight:'15px'}}>
            {/* Group 4 */}
            <div class={classes.paper4} style={(handelHover===true && itemId===26) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>26 - Thanh Hóa</p>
            </div>
            <div class={classes.paper4} style={(handelHover===true && itemId===27) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>27 - Nghệ An</p>
            </div>
            <div class={classes.paper4} style={(handelHover===true && itemId===28) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>28 - Hà Tĩnh</p>
            </div>
            <div class={classes.paper4} style={(handelHover===true && itemId===29) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>29 - Quảng Bình</p>
            </div>
            <div class={classes.paper4} style={(handelHover===true && itemId===30) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>30 - Quảng Trị</p>
            </div>
            <div class={classes.paper4} style={(handelHover===true && itemId===31) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>31 - Thừa Thiên Huế</p>
            </div>
            <div style={{ height:'10px' }}></div>
            <div class={classes.paper5} style={(handelHover===true && itemId===32) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>32 - Đà Nẵng</p>
            </div>
            <div class={classes.paper5} style={(handelHover===true && itemId===33) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>33 - Quảng Ngãi</p>
            </div>
            <div class={classes.paper5} style={(handelHover===true && itemId===34) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>34 - Quảng Nam</p>
            </div>
            <div class={classes.paper5} style={(handelHover===true && itemId===35) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>35 - Bình Định</p>
            </div>
            <div class={classes.paper5} style={(handelHover===true && itemId===36) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>36 - Phú Yên</p>
            </div>
            <div class={classes.paper5} style={(handelHover===true && itemId===37) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>37 - Khánh Hòa</p>
            </div>
            <div class={classes.paper5} style={(handelHover===true && itemId===38) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>38 - Ninh Thuận</p>
            </div>
            <div class={classes.paper5} style={(handelHover===true && itemId===39) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>39 - Bình Thuận</p>
            </div>
            <div style={{ height:'10px' }}></div>
              <div class={classes.paper6} style={(handelHover===true && itemId===40) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>40 - Gia Lai</p>
              </div>
              <div class={classes.paper6} style={(handelHover===true && itemId===41) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>41 - Kon Tum</p>
              </div>
              <div class={classes.paper6} style={(handelHover===true && itemId===42) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>42 - Đắk Lắk</p>
              </div>
              <div class={classes.paper6} style={(handelHover===true && itemId===43) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>43 - Lâm Đồng</p>
              </div>
              <div class={classes.paper6} style={(handelHover===true && itemId===44) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>44 - Đắk Nông</p>
              </div>
        </div>

        <div class="column" style={{ marginRight:'15px'}}>
          {/* Group 7 */}
            <div class={classes.paper7} style={(handelHover===true && itemId===45) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>45 - TP. Hồ Chí Minh</p>
            </div>
            <div class={classes.paper7} style={(handelHover===true && itemId===46) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>46 - Bình Dương</p>
            </div>
            <div class={classes.paper7} style={(handelHover===true && itemId===47) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>47 - Bình Phước</p>
            </div>
            <div class={classes.paper7} style={(handelHover===true && itemId===48) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>48 - Tây Ninh</p>
            </div>
            <div class={classes.paper7} style={(handelHover===true && itemId===49) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>48 - Đồng Nai</p>
            </div>
            <div class={classes.paper7} style={(handelHover===true && itemId===50) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>50 - Bà Rịa - Vũng Tàu</p>
            </div>
          <div style={{ height:'10px' }}></div>
          {/* Group 8 */}
            <div class={classes.paper8} style={(handelHover===true && itemId===51) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>51 - Long An</p>
            </div>
            <div class={classes.paper8} style={(handelHover===true && itemId===52) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>52 - Đồng Tháp</p>
            </div>
            <div class={classes.paper8} style={(handelHover===true && itemId===53) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>53 - Tiền Giang</p>
            </div>
            <div class={classes.paper8} style={(handelHover===true && itemId===54) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>54 - Bến Tre</p>
            </div>
            <div class={classes.paper8} style={(handelHover===true && itemId===55) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>55 - An Giang</p>
            </div>
            <div class={classes.paper8} style={(handelHover===true && itemId===56) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>56 - Cần Thơ</p>
            </div>
            <div class={classes.paper8} style={(handelHover===true && itemId===57) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>57 - Vĩnh Long</p>
            </div>
            <div class={classes.paper8} style={(handelHover===true && itemId===58) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>58 - Trà Vinh</p>
            </div>
            <div class={classes.paper8} style={(handelHover===true && (itemId===59 || itemId===64)) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>59 - Kiên Giang</p>
            </div>
            <div class={classes.paper8} style={(handelHover===true && itemId===60) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>60 - Hậu Giang</p>
            </div>
            <div class={classes.paper8} style={(handelHover===true && itemId===61) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>61 - Sóc Trăng</p>
            </div>
            <div class={classes.paper8} style={(handelHover===true && itemId===62) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>62 - Bạc Liêu</p>
            </div>
            <div class={classes.paper8} style={(handelHover===true && itemId===63) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>63 - Cà Mau</p>
            </div>
        </div>
    </div>
  );
}

export default memo(CityGrid);