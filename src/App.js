import React, { useState } from 'react';
import './App.css';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
  Annotation,
} from 'react-simple-maps';
import vnTopo from './data/gadm36_VNM.json';
import paracelIslands from './data/Paracel_Islands.json';
import spratlyIslands from './data/Spratly_Islands.json';
import area from './data/area/area.json';
import { geoCentroid } from "d3-geo";
import FullWidthGrid from './Grid';

const vietnam = [vnTopo, paracelIslands, spratlyIslands];
const valuesArea = JSON.parse(JSON.stringify(area));

function VietNamMap() {
  const [activeId, changeActiveId] = useState(0)
  const [activeAnnotation, changeAnnotation] = useState(0)
  const [onHover, eventHover] = useState(false)
  const [itemId, setItemId] = useState(0)



    return (
      <div class='row' style={{ display:'flex'}}>
        <div class='column' style={{ width:'40%', display:'flex', justifyContent:'flex-end', marginTop:'20px' }}>
          <FullWidthGrid handelHover={onHover} itemId={itemId}/>
        </div>
        <div class='column' style={{ width:'60%' }}>
          <ComposableMap
              projection="geoMercator"
              projectionConfig={{ scale: 2100}}
              style={{
                width: '100%',
                height: '100%',
              }}
            >
              <ZoomableGroup center={[110, 17]}>
              {vietnam.map((geoData) => (
                <Geographies key={geoData.arcs} geography={geoData}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      var color = "#0000FF";
                      var id;
                      var maker_y = 2;
                      var maker_x = 0;
                      var cellStyle;
                      const centroid = geoCentroid(geo);
                      valuesArea.forEach((area) => {
                        if (area.VARNAME_1 === geo.properties["VARNAME_1"]){
                          color = area.color;
                          id = area.id;
                          return;
                        }
                      }   
                      )
                      if(id === 59){
                        maker_y = 3;
                        maker_x = 5;
                      };
                      if(id === 52){
                        maker_x = 2;
                      };
                      if(id === 53){
                        maker_x = -2;
                        maker_y = 1;
                      };
                      if(activeAnnotation!==0){
                        if (activeAnnotation===1 && [17, 18, 19, 20, 21, 22, 23, 24, 25].includes(id)){
                          cellStyle = { fill: "#e6dfd9", stroke: "#212529", strokeWidth: 0.5, outline: 'none' };
                        } else if(activeAnnotation===2 && [16,15,14,12,13,11].includes(id)) {
                          cellStyle = { fill: "#e6dfd9", stroke: "#212529", strokeWidth: 0.5, outline: 'none' };
                        } else if(activeAnnotation===3 && [1,2,3,4,5,6,7,8,9,10].includes(id)){
                          cellStyle = { fill: "#e6dfd9", stroke: "#212529", strokeWidth: 0.5, outline: 'none' };
                        }
                        else if(activeAnnotation===4 && [26,27,28,29,30,31].includes(id)){
                          cellStyle = { fill: "#e6dfd9", stroke: "#212529", strokeWidth: 0.5, outline: 'none' };
                        }
                        else if(activeAnnotation===5 && [40,41,42,43,44].includes(id)){
                          cellStyle = { fill: "#e6dfd9", stroke: "#212529", strokeWidth: 0.5, outline: 'none' };
                        }
                        else if(activeAnnotation===6 && [32,33,34,35,36,37,38,39].includes(id)){
                          cellStyle = { fill: "#e6dfd9", stroke: "#212529", strokeWidth: 0.5, outline: 'none' };
                        }
                        else if(activeAnnotation===7 && [45,46,47,48,49,50].includes(id)){
                          cellStyle = { fill: "#e6dfd9", stroke: "#212529", strokeWidth: 0.5, outline: 'none' };
                        }
                        else if(activeAnnotation===8 && [51,52,53,54,55,56,57,58,59,60,61,62,63].includes(id)){
                          cellStyle = { fill: "#e6dfd9", stroke: "#212529", strokeWidth: 0.5, outline: 'none' };
                        }
                        else if(activeAnnotation===9 && [64].includes(id)){
                          cellStyle = { fill: "#e6dfd9", stroke: "#212529", strokeWidth: 0.5, outline: 'none' };
                        }
                        else {
                          cellStyle = id === activeId ? { fill: "#e6dfd9", stroke: "#212529", strokeWidth: 0.5, outline: 'none' } : { fill: color, stroke: "#212529", strokeWidth: 0.25, outline: 'none' };
                        }
                      }else{
                        cellStyle = id === activeId ? { fill: "#e6dfd9", stroke: "#212529", strokeWidth: 0.5, outline: 'none' } : { fill: color, stroke: "#212529", strokeWidth: 0.25, outline: 'none' };
                      }
                      return (
                      <><Geography
                          id={id}
                          key={geo.rsmKey}
                          geography={geo}

                          onMouseEnter={()=>{
                            changeActiveId(id)
                            eventHover(true)
                            setItemId(id)
                          }}
                          onMouseLeave={() => {
                            changeActiveId(0)
                            eventHover(false)
                            setItemId(0)
                          }}
                          style={{
                            default: cellStyle,

                            hover: cellStyle,
                          }} />
                          <Marker name={area.id} key={area.id} coordinates={centroid}>
                                <text y={maker_y} x={maker_x} textAnchor="middle" style={{ pointerEvents:'none', fontFamily: "system-ui", fill:"#5D5A6D", fontSize:3.5}}>{id!==64 ? id: ""}</text>
                            </Marker>         
                      </>
                    )
                  },
                  )
                  }
                </Geographies>
                )
              )
              }                           
              <Annotation
                subject={[106.39390610260301,20.504133851628154]}
                dx={80}
                dy={5}
                connectorProps={{
                  strokeWidth: 0,
                }}
                onMouseEnter={()=>{
                  changeAnnotation(3)
                }}
                onMouseLeave={
                  () => {
                    changeAnnotation(0)
                  }
                }
              >
              <text
                textAnchor="end" 
                alignmentBaseline="middle"
                style={{fontFamily: "system-ui", fill: "#FF0000", fontSize:6, fontWeight:'bold', cursor: 'pointer'}}>
                {"Đồng bằng sông Hồng"}
              </text>
            </Annotation>
            <Annotation
                subject={[106.0856970928547,22.74476479657169]}
                dx={70}
                dy={5}
                connectorProps={{
                  strokeWidth: 0,
                }}
                onMouseEnter={()=>{
                  changeAnnotation(1)
                }}
                onMouseLeave={
                  () => {
                    changeAnnotation(0)
                  }
                }
              >
              <text 
                textAnchor="end" 
                alignmentBaseline="middle"
                style={{fontFamily: "system-ui", fill: "#FF6699", fontSize:6, fontWeight:'bold', cursor: 'pointer'}}>
                {"Đông Bắc Bộ"}
              </text>
            </Annotation>
            <Annotation
                subject={[104.07122551145818,21.193892230470166]}
                dx={-50}
                dy={-10}
                connectorProps={{
                  strokeWidth: 0,
                }}
                onMouseEnter={()=>{
                  changeAnnotation(2)
                }}
                onMouseLeave={
                  () => {
                    changeAnnotation(0)
                  }
                }
              >
              <text 
                textAnchor="end" 
                alignmentBaseline="middle" 
                style={{fontFamily: "system-ui", fill: "#33FFFF", fontSize:6, fontWeight:'bold', cursor: 'pointer'}}>
                {"Tây Bắc Bộ"}
              </text>
            </Annotation>
            <Annotation
                subject={[106.29488173759256,17.53146478670647]}
                dx={-20}
                dy={0}
                connectorProps={{
                  strokeWidth: 0,
                }}
                onMouseEnter={()=>{
                  changeAnnotation(4)
                }}
                onMouseLeave={
                  () => {
                    changeAnnotation(0)
                  }
                }
              >
              <text 
                textAnchor="end" 
                alignmentBaseline="middle"  
                style={{fontFamily: "system-ui", fill: "#33CCCC", fontSize:6, fontWeight:'bold', cursor: 'pointer'}}>
                {"Bắc Trung Bộ"}
              </text>
            </Annotation>

            <Annotation
                subject={[108.24108851406788,13.797451279355883]}
                dx={-40}
                dy={0}
                connectorProps={{
                  strokeWidth: 0,
                }}
                onMouseEnter={()=>{
                  changeAnnotation(5)
                }}
                onMouseLeave={
                  () => {
                    changeAnnotation(0)
                  }
                }
              >
              <text 
                textAnchor="end" 
                alignmentBaseline="middle" 
                style={{fontFamily: "system-ui", fill: "#CC33CC", fontSize:6, fontWeight:'bold', cursor: 'pointer'}}>
                {"Tây Nguyên"}
              </text>
            </Annotation>
            <Annotation
                subject={[106.16186981540217,11.403441909731908]}
                dx={-15}
                dy={-15}
                connectorProps={{
                  strokeWidth: 0,
                }}
                onMouseEnter={()=>{
                  changeAnnotation(7)
                }}
                onMouseLeave={
                  () => {
                    changeAnnotation(0)
                  }
                }
              >
              <text 
                textAnchor="end" 
                alignmentBaseline="middle" 
                style={{fontFamily: "system-ui", fill: "#FFCC33", fontSize:6, fontWeight:'bold', cursor: 'pointer'}}>
                {"Đông Nam Bộ"}
              </text>
            </Annotation>
            <Annotation
                subject={[104.9432812577976,9.998124365607579]}
                dx={-30}
                dy={8}
                connectorProps={{
                  strokeWidth: 0,
                }}
                onMouseEnter={()=>{
                  changeAnnotation(9)
                }}

                onMouseLeave={
                  () => {
                    changeAnnotation(0)
                  }
                }
              >
              <text 
                textAnchor="end" 
                alignmentBaseline="middle" 
                style={{fontFamily: "system-ui", fill: "#CCCCCC", fontSize:6, fontWeight:'bold', cursor: 'pointer'}}>
                {"Đảo Phú Quốc"}
              </text>
            </Annotation>
            <Annotation
                subject={[106.31779380671576,9.796671897797657]}
                dx={80}
                dy={20}
                connectorProps={{
                  strokeWidth: 0,
                }}
                onMouseEnter={()=>{
                  changeAnnotation(8)
                }}

                onMouseLeave={
                  () => {
                    changeAnnotation(0)
                  }
                }
              >
              <text 
                textAnchor="end" 
                alignmentBaseline="middle" 
                style={{fontFamily: "system-ui", fill: "#0000FF", fontSize:6, fontWeight:'bold', cursor: 'pointer'}}>
                {"Đồng bằng sông cửu Long"}
              </text>
            </Annotation>
            <Annotation
                subject={[109.05979882587009,13.171558153352654]}
                dx={60}
                dy={0}
                connectorProps={{
                  strokeWidth: 0,
                }}
                onMouseEnter={()=>{
                  changeAnnotation(6)
                }}
                onMouseLeave={
                  () => {
                    changeAnnotation(0)
                  }
                }
              >
              <text 
                textAnchor="end" 
                alignmentBaseline="middle" 
                style={{fontFamily: "system-ui", fill: "#0066FF", fontSize:6, fontWeight:'bold', cursor: 'pointer'}}>
                {"Nam Trung Bộ"}
              </text>
            </Annotation>
            <Annotation
                subject={[111.19555664062506,15.779999732971193]}
                dx={40}
                dy={-30}
                connectorProps={{
                  strokeWidth: 0,
                }}
              >
              <text 
                textAnchor="end" 
                alignmentBaseline="middle" 
                style={{fontFamily: "system-ui", fill: "#CCCCCC", fontSize:6, fontWeight:'bold', cursor: 'pointer'}}>
                {"Quần Đảo Hoàng Sa"}
              </text>
            </Annotation>
            <Annotation
                subject={[114.22270202636741,10.178055763244743]}
                dx={40}
                dy={-30}
                connectorProps={{
                  strokeWidth: 0,
                }}
              >
              <text 
                textAnchor="end" 
                alignmentBaseline="middle" 
                style={{fontFamily: "system-ui", fill: "#CCCCCC", fontSize:6, fontWeight:'bold', cursor: 'pointer'}}>
                {"Quần Đảo Trường Sa"}
              </text>
            </Annotation>
              </ZoomableGroup>
            </ComposableMap>
        </div>
      </div>
    );
}


export default VietNamMap;
