import React from "react";
import styles from "../../styles/styles";
import CountDown from "./CountDown";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../../redux/actions/cart";
import { toast } from "react-toastify";



const EventCard = ({ active, data }) => {
  const backgroundImage = "https://www.google.com/url?sa=i&url=https%3A%2F%2Flovepik.com%2Fimages%2Fpromotion-background.html&psig=AOvVaw39zn5-643BbanD9LCf4WwX&ust=1698994489136000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCIDVsJDepIIDFQAAAAAdAAAAABAE"
  
  return (
    

<div>
      <div 
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      className="bg-neutral-200 text-white rounded shadow-xl py-5 px-5 w-full h-[200px] flex items-center justify-evenly">
        <div className="flex flex-wrap -mx-3 items-center">
          <div className="w-1/4 px-3 text-center hidden md:block">
          <svg height="150px" width="150px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve">
            <circle style={{ fill: '#E4E7ED' }} cx="256" cy="256" r="256" />
            <path style={{ fill: '#6B7F9E' }} d="M398.792,264.152L188.286,446.915c-13.411,11.702-33.923,10.256-45.494-3.156L51.936,339.098
            c-11.702-13.411-10.256-33.923,3.156-45.494l210.901-183.026c6.574-5.654,14.2-8.284,22.878-7.889l96.51,4.996
            c8.941,0.526,16.436,4.076,22.352,10.782c5.917,6.706,8.678,14.595,8.152,23.536l-6.18,99.928
            c-0.526,8.941-4.207,16.567-11.045,22.352L398.792,264.152z M369.602,179.608c-7.758,6.706-19.46,5.917-26.165-1.841
            c-6.706-7.758-5.917-19.46,1.841-26.165c7.758-6.706,19.46-5.917,26.165,1.841C378.149,161.2,377.36,172.902,369.602,179.608z" />
            <path style={{fill: '#8597B1'}} d="M395.373,258.235L184.867,440.998c-13.411,11.702-33.923,10.256-45.494-3.156L48.518,333.181
        c-11.702-13.411-10.256-33.923,3.156-45.494l210.901-183.026c6.574-5.654,14.2-8.284,22.878-7.889l96.509,4.996
        c8.941,0.526,16.436,4.076,22.352,10.782c5.917,6.706,8.678,14.595,8.152,23.536l-6.18,99.928
        c-0.526,8.941-4.208,16.567-11.045,22.352L395.373,258.235z M366.184,173.691c-7.758,6.706-19.46,5.917-26.165-1.841
        c-6.706-7.758-5.917-19.46,1.841-26.165c7.758-6.706,19.46-5.917,26.165,1.841C374.73,155.283,373.941,166.985,366.184,173.691z"/>
      <path style={{fill:'#ECF0F1'}} d="M381.568,223.786c0.789-0.657,1.315-1.446,1.709-2.104c0.394-0.789,0.526-1.578,0.657-2.63
        l5.128-83.756l0,0c0-1.052,0-1.972-0.263-2.761c-0.263-0.789-0.789-1.578-1.446-2.367c-0.657-0.789-1.446-1.315-2.104-1.709
        c-0.789-0.394-1.578-0.526-2.63-0.657l-80.863-4.207c-1.052,0-1.841,0-2.63,0.263c-0.789,0.263-1.446,0.657-2.235,1.446
        L87.7,305.438l-0.131,0.131c-1.446,1.183-2.235,3.024-2.367,4.733c-0.131,1.709,0.394,3.55,1.578,4.996v0.132l76.129,87.7
        c1.183,1.446,3.024,2.235,4.733,2.367c1.841,0.131,3.682-0.394,4.996-1.709L381.568,223.786z M387.747,223.786
        c-0.657,1.315-1.578,2.498-2.893,3.682L175.926,407.47c-2.498,2.104-5.522,3.024-8.546,2.893c-3.024-0.263-6.048-1.578-8.152-4.076
        L83.23,318.718l0,0c-2.104-2.498-3.024-5.522-2.893-8.546c0.263-2.893,1.446-5.785,3.813-7.889l0,0l0.131-0.131l209.323-180.265
        c1.315-1.052,2.498-1.841,3.945-2.367c1.315-0.526,2.893-0.657,4.47-0.526l80.863,4.207c1.709,0.131,3.156,0.394,4.602,1.052
        c1.315,0.657,2.498,1.578,3.682,2.893c1.183,1.315,1.972,2.63,2.498,3.945c0.526,1.446,0.657,2.893,0.526,4.602l0,0l-5.128,83.756
        c-0.132,1.709-0.526,3.156-1.183,4.602L387.747,223.786z M86.517,315.168l0.131,0.131"/>
      <path style={{fill:'#FFE356'}} d="M371.443,179.871c-11.176,9.598-28.006,8.415-37.605-2.63c-9.598-11.176-8.415-28.006,2.63-37.605
        c11.176-9.598,28.006-8.415,37.604,2.63C383.671,153.442,382.488,170.272,371.443,179.871z M364.869,172.376
        c-6.969,6.048-17.487,5.259-23.536-1.709c-6.048-6.969-5.259-17.487,1.709-23.536c6.969-6.048,17.487-5.259,23.536,1.709
        C372.627,155.809,371.838,166.328,364.869,172.376z"/>
      <g>
        <path style={{fill:'#C6CBD6'}} d="M499.115,175.795c-18.013,13.148-44.442,19.723-69.818,19.723c-28.006,0-54.96-8.021-68.766-23.799
          c-6.048-6.969-9.73-19.854-10.387-28.269c3.419-0.657,6.574-0.526,9.598,0.657c-0.394,8.415,1.841,14.858,7.626,21.563
          c11.965,13.806,36.29,20.643,61.798,20.775c24.719,0,50.227-6.443,66.663-19.723c1.052,3.024,2.104,6.048,3.156,9.072H499.115z
          M419.304,58.905c-2.893,1.972-5.654,4.076-8.415,6.443c-11.834,10.256-24.193,23.141-33.529,36.027l-10.65-0.526
          c10.256-15.384,24.456-30.504,38.13-42.338c2.235-1.972,4.602-3.813,6.969-5.522c2.498,1.972,4.996,3.945,7.363,5.917H419.304z"/>
        <path style={{fill:'#FFFFFF'}} d="M155.152,302.545c3.945,5.259,5.917,9.861,5.917,14.069c-0.131,4.076-1.841,7.495-5.391,10.256
          c-2.235,1.709-4.602,2.63-7.1,2.893c-2.498,0.263-5.259-0.394-7.889-1.972c-2.761-1.578-5.391-4.076-7.889-7.363
          c-2.761-3.55-4.602-6.837-5.654-9.861c-1.052-2.893-1.183-5.654-0.526-8.152c0.789-2.498,2.367-4.733,4.996-6.837
          c1.841-1.446,3.813-2.367,5.785-2.761c1.972-0.394,3.945-0.394,5.917,0.263c1.972,0.657,4.076,1.709,6.048,3.287
          c1.972,1.578,3.945,3.682,6.048,6.311L155.152,302.545z M148.051,307.279c-2.761-3.55-5.128-5.917-6.969-7.1
          c-1.972-1.052-3.813-1.052-5.522,0.263c-1.183,0.92-1.841,1.972-1.841,3.287c-0.131,1.315,0.263,2.893,1.183,4.602
          s2.235,3.813,4.076,6.18c1.841,2.498,3.55,4.339,4.996,5.654c1.446,1.315,2.761,2.104,4.076,2.367
          c1.315,0.263,2.498-0.132,3.682-0.92c1.841-1.315,2.367-3.156,1.709-5.391s-2.498-5.128-5.259-8.941H148.051z M215.108,303.992
          c3.945,5.259,5.917,9.861,5.917,14.069c-0.131,4.076-1.841,7.495-5.391,10.256c-2.235,1.709-4.602,2.63-7.1,2.893
          c-2.63,0.263-5.259-0.394-7.889-1.972c-2.761-1.578-5.391-3.945-7.889-7.363c-4.076-5.391-6.311-10.124-6.574-14.2
          s1.578-7.626,5.522-10.65c1.841-1.446,3.813-2.367,5.654-2.761c1.972-0.394,3.945-0.394,5.917,0.131
          c1.972,0.526,3.945,1.578,6.048,3.156c1.972,1.578,3.945,3.682,6.048,6.311L215.108,303.992z M208.008,308.725
          c-2.761-3.55-4.996-5.917-6.969-6.969c-1.972-1.052-3.682-1.052-5.522,0.263c-1.183,0.92-1.841,1.972-1.972,3.287
          s0.263,2.761,1.183,4.47c0.789,1.709,2.235,3.813,4.076,6.18c2.761,3.682,5.259,6.048,7.232,7.232
          c1.972,1.183,3.813,1.052,5.654-0.263c1.709-1.315,2.367-3.156,1.578-5.391c-0.657-2.235-2.498-5.259-5.259-8.941V308.725z
          M171.456,273.619l11.965,78.496c0.394,2.104,0.131,3.55-0.92,4.339c-0.526,0.394-1.315,0.657-2.235,0.526
          c-0.92-0.131-1.709-0.526-2.235-1.183c-0.394-0.526-0.657-1.446-0.92-2.63l-12.228-79.022c-0.263-1.446-0.394-2.498-0.394-3.287
          s0.394-1.446,1.183-2.104c0.789-0.526,1.446-0.789,2.367-0.657c0.789,0.131,1.578,0.657,2.104,1.446
          c0.394,0.526,0.789,1.972,1.183,4.339L171.456,273.619z M257.709,260.733c2.63,3.419,4.47,6.837,5.654,10.256
          c1.183,3.55,1.709,6.969,1.578,10.387c-0.131,3.419-1.052,6.574-2.63,9.467c-1.578,2.893-3.945,5.522-6.969,7.889
          c-3.024,2.367-6.18,3.813-9.335,4.602c-3.287,0.789-6.574,0.789-9.861,0c-3.287-0.657-6.443-2.104-9.467-4.207
          c-3.024-2.104-5.917-4.865-8.415-8.152c-2.63-3.419-4.47-6.837-5.785-10.387c-1.183-3.55-1.709-6.969-1.578-10.256
          c0.263-3.287,1.052-6.443,2.761-9.335c1.578-2.893,3.945-5.522,6.837-7.889c3.024-2.235,6.18-3.813,9.467-4.602
          s6.574-0.789,9.861-0.131s6.443,2.104,9.467,4.207c3.024,2.104,5.917,4.865,8.415,8.284V260.733z M247.716,268.36
          c-3.55-4.602-7.1-7.495-10.782-8.678c-3.682-1.183-7.1-0.657-10.124,1.709c-1.972,1.446-3.156,3.287-3.813,5.654
          c-0.657,2.235-0.394,4.865,0.394,7.626c0.92,2.893,2.498,5.785,4.733,8.678c2.235,2.893,4.602,5.259,7.1,6.837
          s4.865,2.367,7.232,2.498c2.367,0,4.47-0.657,6.574-2.235c3.024-2.235,4.339-5.391,4.207-9.335s-1.972-8.152-5.522-12.622V268.36z
          M251.661,230.624l2.367-1.841l-2.63-3.419c-2.63-3.55-4.47-6.574-5.259-9.335c-0.789-2.63-0.657-5.128,0.526-7.626
          c1.183-2.367,3.419-4.865,6.574-7.363c5.785-4.47,9.861-4.996,12.36-1.841c0.789,1.052,1.183,2.235,1.183,3.419
          c0,1.183-0.526,2.104-1.315,2.761c-0.394,0.263-1.052,0.657-2.235,1.315c-1.052,0.526-1.972,1.052-2.63,1.578
          c-1.841,1.315-2.498,2.893-2.104,4.47c0.394,1.578,1.446,3.55,3.156,5.785l2.104,2.63l2.367-1.841
          c3.813-2.893,6.706-3.024,8.678-0.394c1.446,1.841,1.841,3.419,1.183,4.602c-0.657,1.315-1.841,2.63-3.55,3.945l-2.367,1.841
          l22.747,29.847c1.709,2.235,2.498,4.207,2.498,6.18c0,1.841-0.789,3.419-2.235,4.47c-1.446,1.052-3.024,1.315-4.865,0.92
          c-1.841-0.394-3.55-1.841-5.259-3.945l-22.747-29.847l-2.761,2.104c-1.446,1.183-2.893,1.578-4.208,1.446
          c-1.446-0.131-2.498-0.789-3.419-1.972c-2.104-2.63-1.446-5.259,1.972-7.889H251.661z M282.954,206.693l2.367-1.841l-2.63-3.419
          c-2.63-3.55-4.47-6.574-5.259-9.335c-0.789-2.63-0.657-5.128,0.526-7.626c1.183-2.367,3.419-4.865,6.574-7.363
          c5.785-4.47,9.861-4.996,12.359-1.841c0.789,1.052,1.183,2.235,1.183,3.419c0,1.183-0.526,2.104-1.315,2.761
          c-0.394,0.263-1.183,0.657-2.235,1.315c-1.052,0.526-1.972,1.052-2.63,1.578c-1.841,1.315-2.498,2.893-2.104,4.47
          c0.394,1.578,1.446,3.55,3.156,5.785l2.104,2.63l2.367-1.841c3.813-2.893,6.706-3.024,8.678-0.394
          c1.446,1.841,1.841,3.419,1.183,4.602c-0.657,1.315-1.841,2.63-3.55,3.945l-2.367,1.841l22.747,29.847
          c1.709,2.235,2.498,4.208,2.498,6.18c0,1.841-0.789,3.419-2.235,4.47c-1.446,1.052-3.024,1.315-4.865,0.92
          c-1.841-0.394-3.55-1.841-5.259-3.945l-22.747-29.847l-2.761,2.104c-1.446,1.183-2.893,1.578-4.207,1.446
          c-1.446-0.131-2.498-0.789-3.419-1.972c-2.104-2.63-1.446-5.259,1.972-7.889H282.954z"/>
      </g>
          </svg>
          </div>
          <div className="w-full sm:w-1/2 md:w-2/4 px-3 text-left">
            <div className="p-5 xl:px-8 md:py-5">
              <h3 className="text-2xl text-[#c23b01]">{data.title}</h3>
              <h5 className="text-xl mb-3">{data.name}</h5>
              <p className="text-sm text-indigo-200">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit...
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 px-3 text-center">
            <div className="p-5 xl:px-8 md:py-5">
              <a
                href="https://codepen.io/ScottWindon"
                className="block w-full py-2 px-4 rounded text-indigo-600 bg-gray-200 hover:bg-white hover:text-gray-900 focus:outline-none transition duration-150 ease-in-out mb-3"
              >
                Find out more?
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>




  );
};

export default EventCard;
