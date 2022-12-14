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
             <p class={classes.textStyle}>01 - H?? N???i</p>
            </span> 
          </div>
          <div id='2' class={classes.paper1} style={(handelHover===true && itemId===2) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>02 - V??nh Ph??c</p>
          </div>
          <div id='3' class={classes.paper1} style={(handelHover===true && itemId===3) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>03 - B???c Ninh</p>
          </div>
          <div id='4' class={classes.paper1} style={(handelHover===true && itemId===4) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>04 - H??ng Y??n</p>
          </div>
          <div id='5' class={classes.paper1} style={(handelHover===true && itemId===5) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>05 - H?? Nam</p>
          </div>
          <div id='6' class={classes.paper1} style={(handelHover===true && itemId===6) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>06 - H???i D????ng</p>
          </div>
          <div id='7' class={classes.paper1} style={(handelHover===true && itemId===7) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>07 - H???i Ph??ng</p>
          </div>
          <div id='8' class={classes.paper1} style={(handelHover===true && itemId===8) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>08 - Th??i B??nh</p>
          </div>
          <div id='9' class={classes.paper1} style={(handelHover===true && itemId===9) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>09 - Nam ?????nh</p>
          </div>
          <div id='10' class={classes.paper1} style={(handelHover===true && itemId===10) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>10 - Ninh B??nh</p>
          </div>
          <div style={{ height:'10px' }}></div>
          <div id='11' class={classes.paper2} style={(handelHover===true && itemId===11) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>11 - Lai Ch??u</p>
          </div>
          <div id='12' class={classes.paper2} style={(handelHover===true && itemId===12) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>12 - L??o Cai</p>
          </div>
          <div id='13' class={classes.paper2} style={(handelHover===true && itemId===13) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>13 - ??i???n Bi??n</p>
          </div>
          <div id='14' class={classes.paper2} style={(handelHover===true && itemId===14) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>14 - Y??n B??i</p>
          </div>
          <div id='15' class={classes.paper2} style={(handelHover===true && itemId===15) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>15 - S??n La</p>
          </div>
          <div id='16' class={classes.paper2} style={(handelHover===true && itemId===16) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>16 - Ho?? B??nh</p>
          </div>
          <div style={{ height:'10px' }}></div>
            <div class={classes.paper3} style={(handelHover===true && itemId===17) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>17 - H?? Giang</p>
            </div>
            <div class={classes.paper3} style={(handelHover===true && itemId===18) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>18 - Cao B???ng</p>
            </div>
            <div class={classes.paper3} style={(handelHover===true && itemId===19) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>19 - Tuy??n Quang</p>
            </div>
            <div class={classes.paper3} style={(handelHover===true && itemId===20) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>20 - B???c K???n</p>
            </div>
            <div class={classes.paper3} style={(handelHover===true && itemId===21) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>21 - L???ng S??n</p>
            </div>
            <div class={classes.paper3} style={(handelHover===true && itemId===22) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>22 - Th??i Nguy??n</p>
            </div>
            <div class={classes.paper3} style={(handelHover===true && itemId===23) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>23 - B???c Giang</p>
            </div>
            <div class={classes.paper3} style={(handelHover===true && itemId===24) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>24 - Qu???ng Ninh</p>
            </div>
            <div class={classes.paper3} style={(handelHover===true && itemId===25) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>25 - Ph?? Th???</p>
            </div>
        </div>
        
        <div class="column" style={{ marginRight:'15px'}}>
            {/* Group 4 */}
            <div class={classes.paper4} style={(handelHover===true && itemId===26) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>26 - Thanh H??a</p>
            </div>
            <div class={classes.paper4} style={(handelHover===true && itemId===27) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>27 - Ngh??? An</p>
            </div>
            <div class={classes.paper4} style={(handelHover===true && itemId===28) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>28 - H?? T??nh</p>
            </div>
            <div class={classes.paper4} style={(handelHover===true && itemId===29) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>29 - Qu???ng B??nh</p>
            </div>
            <div class={classes.paper4} style={(handelHover===true && itemId===30) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>30 - Qu???ng Tr???</p>
            </div>
            <div class={classes.paper4} style={(handelHover===true && itemId===31) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>31 - Th???a Thi??n Hu???</p>
            </div>
            <div style={{ height:'10px' }}></div>
            <div class={classes.paper5} style={(handelHover===true && itemId===32) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>32 - ???? N???ng</p>
            </div>
            <div class={classes.paper5} style={(handelHover===true && itemId===33) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>33 - Qu???ng Ng??i</p>
            </div>
            <div class={classes.paper5} style={(handelHover===true && itemId===34) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>34 - Qu???ng Nam</p>
            </div>
            <div class={classes.paper5} style={(handelHover===true && itemId===35) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>35 - B??nh ?????nh</p>
            </div>
            <div class={classes.paper5} style={(handelHover===true && itemId===36) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>36 - Ph?? Y??n</p>
            </div>
            <div class={classes.paper5} style={(handelHover===true && itemId===37) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>37 - Kh??nh H??a</p>
            </div>
            <div class={classes.paper5} style={(handelHover===true && itemId===38) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>38 - Ninh Thu???n</p>
            </div>
            <div class={classes.paper5} style={(handelHover===true && itemId===39) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>39 - B??nh Thu???n</p>
            </div>
            <div style={{ height:'10px' }}></div>
              <div class={classes.paper6} style={(handelHover===true && itemId===40) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>40 - Gia Lai</p>
              </div>
              <div class={classes.paper6} style={(handelHover===true && itemId===41) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>41 - Kon Tum</p>
              </div>
              <div class={classes.paper6} style={(handelHover===true && itemId===42) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>42 - ?????k L???k</p>
              </div>
              <div class={classes.paper6} style={(handelHover===true && itemId===43) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>43 - L??m ?????ng</p>
              </div>
              <div class={classes.paper6} style={(handelHover===true && itemId===44) ? { backgroundColor:'yellow', } : {}}>
                <p class={classes.textStyle}>44 - ?????k N??ng</p>
              </div>
        </div>

        <div class="column" style={{ marginRight:'15px'}}>
          {/* Group 7 */}
            <div class={classes.paper7} style={(handelHover===true && itemId===45) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>45 - TP. H??? Ch?? Minh</p>
            </div>
            <div class={classes.paper7} style={(handelHover===true && itemId===46) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>46 - B??nh D????ng</p>
            </div>
            <div class={classes.paper7} style={(handelHover===true && itemId===47) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>47 - B??nh Ph?????c</p>
            </div>
            <div class={classes.paper7} style={(handelHover===true && itemId===48) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>48 - T??y Ninh</p>
            </div>
            <div class={classes.paper7} style={(handelHover===true && itemId===49) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>48 - ?????ng Nai</p>
            </div>
            <div class={classes.paper7} style={(handelHover===true && itemId===50) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>50 - B?? R???a - V??ng T??u</p>
            </div>
          <div style={{ height:'10px' }}></div>
          {/* Group 8 */}
            <div class={classes.paper8} style={(handelHover===true && itemId===51) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>51 - Long An</p>
            </div>
            <div class={classes.paper8} style={(handelHover===true && itemId===52) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>52 - ?????ng Th??p</p>
            </div>
            <div class={classes.paper8} style={(handelHover===true && itemId===53) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>53 - Ti???n Giang</p>
            </div>
            <div class={classes.paper8} style={(handelHover===true && itemId===54) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>54 - B???n Tre</p>
            </div>
            <div class={classes.paper8} style={(handelHover===true && itemId===55) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>55 - An Giang</p>
            </div>
            <div class={classes.paper8} style={(handelHover===true && itemId===56) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>56 - C???n Th??</p>
            </div>
            <div class={classes.paper8} style={(handelHover===true && itemId===57) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>57 - V??nh Long</p>
            </div>
            <div class={classes.paper8} style={(handelHover===true && itemId===58) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>58 - Tr?? Vinh</p>
            </div>
            <div class={classes.paper8} style={(handelHover===true && (itemId===59 || itemId===64)) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>59 - Ki??n Giang</p>
            </div>
            <div class={classes.paper8} style={(handelHover===true && itemId===60) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>60 - H???u Giang</p>
            </div>
            <div class={classes.paper8} style={(handelHover===true && itemId===61) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>61 - S??c Tr??ng</p>
            </div>
            <div class={classes.paper8} style={(handelHover===true && itemId===62) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>62 - B???c Li??u</p>
            </div>
            <div class={classes.paper8} style={(handelHover===true && itemId===63) ? { backgroundColor:'yellow', } : {}}>
              <p class={classes.textStyle}>63 - C?? Mau</p>
            </div>
        </div>
    </div>
  );
}

export default memo(CityGrid);