// // // import React from 'react'

// // // function Card(props) {
// // //   let options=props.options;
// // //   let priceOptions=Object.keys(options)
// // //   return (
  
// // //     <div>
// // //           <div className='m-6 '  style={{ "width": "22%"
// // //          }}>
// // //         <div className="card mt-3 d-flex justify-content-space-between" style={{ "width": "18rem", "height": "360px" }}>
// // //           <div style={{ "width": "100%", "maxHeight": "220px" }}>
// // //           <img src={props.imaSrc} className="card-img-top " alt="..." style={{ "width": "18rem", "maxHeight": "220px" ,objectFit: "cover" }} />
// // //           </div>
// // //           <div className="card-body">
// // //             <h5 className="card-title">{props.foodName}</h5>
           
// // //             <div className='container w=100'>
// // //               <select className='m-2 h-100 bg-success rounded'>
// // //                 {
// // //                   Array.from(Array(6), (e,i) => {
// // //                     return (
// // //                       <option key={i + 1} value={i + 1}>{i + 1}</option>
// // //                     )
// // //                   })
// // //                 }
// // //               </select>
// // //               <select className='m-2 h-100 bg-success rounded' >
// // //                {priceOptions.map((data)=>{
// // //                 return <option key={data} value={data}>{data}</option>
// // //                })}
// // //               </select>
// // //               <div className='d-inline h-100 fs-5'>
// // //                 Total Price
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default Card

// // import React from 'react';
// // import {useState} from 'react';
// // import {useDispatchCart,useCart} from './ContextReducer';
// // function Card(props) {
// //   let dispatch=useDispatchCart();
// //   let data=useCart()
// //   let options = props.options;
// //   let priceOptions = Object.keys(options);
// // const [qty,setQty]=useState(1)
// // const [size,setSize]=useState("")
  
// // const handleAddToCart=async()=>{
// //   await dispatch({type:"ADD",id:props.foodItem._id,name: props.foodItem.name,price: props.finalPrice, qty: qty, size: size })
// //   console.log(data)
// // }
// // // function Card(props) {
// // //   const dispatch = useDispatchCart();
// // //   const cartData = useCart();

// // //   const options = props.options;
// // //   const priceOptions = Object.keys(options);
// // //   const [qty, setQty] = useState(1);
// // //   const [size, setSize] = useState("");

// // //   const handleAddToCart = async () => {
// // //     await dispatch({
// // //       type: "ADD",
// // //       id: props.foodItem._id,
// // //       name: props.foodItem.name,
// // //       price: props.finalPrice,
// // //       qty: qty,
// // //       size: size
// // //     });

// // //     console.log(cartData); // Make sure this is where you want to log the data
// // //   }
// // const cardStyle = {
// //   width: '100%',
// //   height: '300px',
// //   display: 'flex',
// //   flexDirection: 'column',
// // };

// // const imageContainerStyle = {
// //   height: '50%',
// //   overflow: 'hidden',
// // };

// // const imageStyle = {
// //   width: '100%',
// //   height: '100%',
// //   objectFit: 'cover',
// // };

   
// //     return (
// //       <div className="d-flex flex-column">
// //         <div className="m-3" style={cardStyle}>
// //           <div className="card mt-3">
// //             <div style={imageContainerStyle}>
// //               <img src={props.imgSrc} className="card-img-top" alt="..." style={imageStyle} />
// //             </div>
  
// //             <div className="card-body">
// //               <h5 className="card-title">{props.foodItem.name}</h5>
// //               <div className="container w-100">
// //                 <select className="m-2 bg-success rounded" onChange={(e) => setQty(e.target.value)}>
// //                   {Array.from(Array(6), (e, i) => (
// //                     <option key={i + 1} value={i + 1}>
// //                       {i + 1}
// //                     </option>
// //                   ))}
// //                 </select>
// //                 <select className="m-2 bg-success rounded" onChange={(e) => setSize(e.target.value)}>
// //                   {props.priceOptions.map((data) => (
// //                     <option key={data} value={data}>
// //                       {data}
// //                     </option>
// //                   ))}
// //                 </select>
// //                 <div className="d-block fs-5">Total Price</div>
// //               </div>
// //               <hr />
// //               <button className="btn btn-success justify-center ms-2" onClick={handleAddToCart}>
// //                 Add to Cart
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }
  
// //   export default Card;
// import React, { useState,useRef,useEffect } from 'react';
// import { useDispatchCart, useCart } from './ContextReducer';

// function Card(props) {
//   const dispatch = useDispatchCart();
//   const data = useCart();
//   const priceRef=useRef(null);
//   const options = props.options;
//   const priceOptions = Object.keys(options);
//   const [qty, setQty] = useState(1);
//   const [size, setSize] = useState(priceOptions[0]);

//   const handleAddToCart = async () => {
//     let food=[]
//     for(const item of data){
//       if(item.id===props.foodItem._id)
//       {
//         food=item;
//         break;
//       }

//     }
//     if(food!=[])
//     {
//       if(food.size==size)
//       {
//         await dispatch({typr:"UPDATE",id:props.foodItem._id,price:finalPrice,qty:qty})
//         return
//       }
//       else if(food.size!=size)
//     {
//       await dispatch({typr:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
//     }
//     }
//     await dispatch({typr:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
    
//     await dispatch({
//       type: "ADD",
//       id: props.foodItem._id,
//       name: props.foodItem.name,
//       price: props.finalPrice,
//       qty: qty,
//       size: size,
//     });
//     // console.log(data);
//   };
//   let finalPrice=qty*parseInt(options[size]);
//   useEffect(()=>{
//     setSize(priceRef.current.value)
//   },[])

//   return (
//     <div className="d-flex flex-column">
//       <div className="m-3" style={{ width: "22%" }}>
//         <div className="card mt-3" style={{ width: "18rem", height: "360px" }}>
//           <div style={{ width: "100%", maxHeight: "220px", overflow: "hidden" }}>
//             <img src={props.imgSrc} className="card-img-top" alt="image here" style={{ width: "18rem", maxHeight: "220px", objectFit: "cover" }} />
//           </div>

//           <div className="card-body">
//             <h5 className="card-title">{props.foodItem.name}</h5>
//             <div className="container w-100">
//               <select className="m-2 h-100 bg-success rounded" onChange={(e) => setQty(e.target.value)}>
//                 {Array.from(Array(6), (e, i) => (
//                   <option key={i + 1} value={i + 1}>
//                     {i + 1}
//                   </option>
//                 ))}
//               </select>
//               <select className="m-2 h-100 bg-success rounded" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
//                 {priceOptions.map((data) => (
//                   <option key={data} value={data}>
//                     {data}
//                   </option>
//                 ))}
//               </select>
//               <div className="d-inline h-100 fs-5">${finalPrice}/-</div>
//             </div>
//             <hr />
//             <button className="btn btn-success justify-center ms-2" onClick={handleAddToCart}>
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Card;

import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatchCart, useCart } from './ContextReducer'
// import { Dropdown, DropdownButton } from 'react-bootstrap';
export default function Card(props) {
  let data = useCart();

  let navigate = useNavigate()
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("")
  const priceRef = useRef();
  // const [btnEnable, setBtnEnable] = useState(false);
  // let totval = 0
  // let price = Object.values(options).map((value) => {
  //   return parseInt(value, 10);
  // });
  let options = props.options;
  let priceOptions = Object.keys(options);
  let foodItem = props.item;
  const dispatch = useDispatchCart();
  const handleClick = () => {
    if (!localStorage.getItem("token")) {
      navigate("/login")
    }
  }
  const handleQty = (e) => {
    setQty(e.target.value);
  }
  const handleOptions = (e) => {
    setSize(e.target.value);
  }
  const handleAddToCart = async () => {
    let food = []
    for (const item of data) {
      if (item.id === foodItem._id) {
        food = item;

        break;
      }
    }
    console.log(food)
    console.log(new Date())
    if (food != []) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty: qty })
        return
      }
      else if (food.size !== size) {
        await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
        console.log("Size different so simply ADD one more to the list")
        return
      }
      return
    }

    await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size })


    // setBtnEnable(true)

  }

  useEffect(() => {
    setSize(priceRef.current.value)
  }, [])

  // useEffect(()=>{
  // checkBtn();
  //   },[data])

  let finalPrice = qty * parseInt(options[size]);   //This is where Price is changing
  // totval += finalPrice;
  // console.log(totval)
  return (
    <div>

      <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
        <img src={props.ImgSrc} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>
          {/* <p className="card-text">This is some random text. This is description.</p> */}
          <div className='container w-100 p-0' style={{ height: "38px" }}>
            <select className="m-2 h-100 w-20 bg-success text-black rounded" style={{ select: "#FF0000" }} onClick={handleClick} onChange={handleQty}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>)
              })}
            </select>
            <select className="m-2 h-100 w-20 bg-success text-black rounded" style={{ select: "#FF0000" }} ref={priceRef} onClick={handleClick} onChange={handleOptions}>
              {priceOptions.map((i) => {
                return <option key={i} value={i}>{i}</option>
              })}
            </select>
            <div className=' d-inline ms-2 h-100 w-20 fs-5' >
              ₹{finalPrice}/-
            </div>
          </div>
          <hr></hr>
          <button className={`btn btn-success justify-center ms-2 `} onClick={handleAddToCart}>Add to Cart</button>
          {/* <button className={`btn btn-danger justify-center ms-2 ${btnEnable ? "" : "disabled"}`} onClick={handleRemoveCart}>Remove</button> */}
        </div>
      </div>
    </div>
  )
}
//
