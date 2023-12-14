// import React, { useEffect, useState } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import Card from '../components/Card';
// // import Carousel from '../components/Carousel';
// // import Carousel1 from '../components/Carousel';
// import { Container, Button } from 'react-bootstrap';
// function Home() {
//   const [search, setsearch] = useState('');
//   const [foodCat, setfoodCat] = useState([]);
//   const [foodItem, setfoodItem] = useState([]);

//   const loadData = async () => {
//     try {
//       let response = await fetch("http://localhost:5000/api/foodData", {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
//       if (response.ok) {
//         response = await response.json();
//         setfoodItem(response[0]);
//         setfoodCat(response[1]);
//       } else {
//         console.error('Error fetching data:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }

//   useEffect(() => {
//     loadData();
//   }, []);

//   return (
//     <div>
//       <div>
//         <Navbar />
//       </div>
//       <div>
//       <div>
   
   
//    <div className="container">
//    <div className="row justify-content-center">
//      <div className="col-8">
//        <div id="carouselExampleDark" className="carousel carousel-dark slide"style={{ maxWidth: '100%', margin: '0 auto' }}>
      
//      <div className="carousel-indicators">
//        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
//        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
//      </div>
//      <div className="carousel-inner">
//        <div className="carousel-item active" data-bs-interval="10000">
//          <img src="http://source.unsplash.com/random/900x700/?burger" className="d-block w-100" alt="..."style={{ objectFit: 'cover', width: '100%', height: '100%' }}/>
//          <div className="carousel-caption d-none d-md-block">
//            <div>
//            <Container className="mt-5">
//        <div className="d-flex">
//          <input
//            type="search"
//            placeholder="Search"
//            aria-label="Search"
//            className="form-control me-2"
//           value={search}
//           onChange={(e)=>{
//             setsearch(e.target.value)
//           }}
//          />
//          {/* <Button variant="primary">
//            Search
//          </Button> */}
//        </div>
//      </Container>
//            </div>
//            <p>Some representative placeholder content for the first slide.</p>
//          </div>
//        </div>
//        <div className="carousel-item" data-bs-interval="2000">
//          <img src="http://source.unsplash.com/random/900x700/?pizza" className="d-block w-100" alt="..."style={{ objectFit: 'cover', width: '100%', height: '100%' }}/>
//          <div className="carousel-caption d-none d-md-block">
//            <div>
//            <Container className="mt-5">
//        <div className="d-flex">
//          <input
//            type="search"
//            placeholder="Search"
//            aria-label="Search"
//            className="form-control me-2"
//           value={search}
//           onChange={(e)=>{
//             setsearch(e.target.value)
//           }}
//          />
//          {/* <Button variant="primary">
//            Search
//          </Button> */}
//        </div>
//      </Container>
//            </div>
//            <p>Some representative placeholder content for the second slide.</p>
//          </div>
//        </div>
//        <div className="carousel-item">
//          <img src="http://source.unsplash.com/random/900x700/?sandwich" className="d-block w-100" alt="..."style={{ objectFit: 'cover', width: '100%', height: '100%' }}/>
//          <div className="carousel-caption d-none d-md-block">
//          <div>
//            <Container className="mt-5">
//        <div className="d-flex">
//          <input
//            type="search"
//            placeholder="Search"
//            aria-label="Search"
//            className="form-control me-2"
//           value={search}
//           onChange={(e)=>{
//             setsearch(e.target.value)
//           }}
//          />
//          {/* <Button variant="primary">
//            Search
//          </Button> */}
//        </div>
//      </Container>
//            </div>
//            <p>Some representative placeholder content for the third slide.</p>
//          </div>
//        </div>
//      </div>
//      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
//        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//        <span className="visually-hidden">Previous</span>
//      </button>
//      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
//        <span className="carousel-control-next-icon" aria-hidden="true"></span>
//        <span className="visually-hidden">Next</span>
//      </button>
//    </div>
//        </div>
//      </div>
//    </div>
//  </div>
   
//       </div>
//       <div className='w-100%' style={{ maxWidth: '1300px' }}>
//         {foodCat.length > 0 ? (
//           foodCat.map((data) => {
//             return (
//               <div key={data._id}>
//                 <div className="fs-3 m-3">
//                   {data.CategoryName}
//                 </div>
//                 <hr />
//                 <div className='row row-cols-1 row-cols-md-4'>
//                   {foodItem.length > 0 ? (
//                     foodItem
//                       .filter((item) => item.CategoryName === data.CategoryName &&item.name.toLowerCase().includes(search.toLocaleLowerCase()))
//                       .map((filterItems) => {
//                         return (
//                           <div key={filterItems._id} className='col mb-4'>
//                             <Card foodItem={filterItems}
                             
                             
//                               options={filterItems.options[0]}
//                               imgSrc={filterItems.img}
//                             />
//                           </div>
//                         );
//                       })
//                   ) : (
//                     <div>No Such data Found</div>
//                   )}
//                 </div>
//               </div>
//             );
//           })
//         ) : (
//           <div>No Categories Found</div>
//         )}
//       </div>
//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default Home;
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
// import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
export default function Home() {
  const [foodCat, setFoodCat] = useState([])
  const [foodItems, setFoodItems] = useState([])
  const [search, setSearch] = useState('')
  const loadFoodItems = async () => {
    let response = await fetch("http://localhost:5000/api/auth/foodData", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }

    });
    response = await response.json()
    // console.log(response[1][0].CategoryName)
    setFoodItems(response[0])
    setFoodCat(response[1])
  }

  useEffect(() => {
    loadFoodItems()
  }, [])

  return (
    <div >
      <div>
        <Navbar />
      </div>
      <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">

          <div className="carousel-inner " id='carousel'>
            <div class=" carousel-caption  " style={{ zIndex: "9" }}>
              <div className=" d-flex justify-content-center">  {/* justify-content-center, copy this <form> from navbar for search box */}
                <input className="form-control me-2 w-75 bg-white text-dark" type="search" placeholder="Search in here..." aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                <button className="btn text-white bg-danger" onClick={() => { setSearch('') }}>X</button>
              </div>
            </div>
            <div className="carousel-item active" >
              <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100  " style={{ filter: "brightness(30%)" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900x700/?pastry" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900x700/?barbeque" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className='container'> {/* boootstrap is mobile first */}
        {
          foodCat != []
            ? foodCat.map((data) => {
              return (
                // justify-content-center
                <div className='row mb-3'>
                  <div key={data.id} className='fs-3 m-3'>
                    {data.CategoryName}
                  </div>
                  <hr id="hr-success" style={{ height: "4px", backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))" }} />
                  {foodItems != [] ? foodItems.filter(
                    (items) => (items.CategoryName === data.CategoryName) && (items.name.toLowerCase().includes(search.toLowerCase())))
                    .map(filterItems => {
                      return (
                        <div key={filterItems.id} className='col-12 col-md-6 col-lg-3'>
                          {console.log(filterItems.url)}
                          <Card foodName={filterItems.name} item={filterItems} options={filterItems.options[0]} ImgSrc={filterItems.img} ></Card>
                        </div>
                      )
                    }) : <div> No Such Data </div>}
                </div>
              )
            })
            : ""}
      </div>
      <Footer />
    </div>









  )
}
