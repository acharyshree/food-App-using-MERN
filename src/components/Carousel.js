// import React from 'react'
// import { Container, Button } from 'react-bootstrap';
// function Carousel() {
//   return (
//     <div>
   
   
//   <div className="container">
//   <div className="row justify-content-center">
//     <div className="col-8">
//       <div id="carouselExampleDark" className="carousel carousel-dark slide"style={{ maxWidth: '100%', margin: '0 auto' }}>
     
//     <div className="carousel-indicators">
//       <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//       <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
//       <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
//     </div>
//     <div className="carousel-inner">
//       <div className="carousel-item active" data-bs-interval="10000">
//         <img src="http://source.unsplash.com/random/900x700/?burger" className="d-block w-100" alt="..."style={{ objectFit: 'cover', width: '100%', height: '100%' }}/>
//         <div className="carousel-caption d-none d-md-block">
//           <div>
//           <Container className="mt-5">
//       <div className="d-flex">
//         <input
//           type="search"
//           placeholder="Search"
//           aria-label="Search"
//           className="form-control me-2"
//         />
//         <Button variant="primary">
//           Search
//         </Button>
//       </div>
//     </Container>
//           </div>
//           <p>Some representative placeholder content for the first slide.</p>
//         </div>
//       </div>
//       <div className="carousel-item" data-bs-interval="2000">
//         <img src="http://source.unsplash.com/random/900x700/?pizza" className="d-block w-100" alt="..."style={{ objectFit: 'cover', width: '100%', height: '100%' }}/>
//         <div className="carousel-caption d-none d-md-block">
//           <h5>Second slide label</h5>
//           <p>Some representative placeholder content for the second slide.</p>
//         </div>
//       </div>
//       <div className="carousel-item">
//         <img src="http://source.unsplash.com/random/900x700/?sandwich" className="d-block w-100" alt="..."style={{ objectFit: 'cover', width: '100%', height: '100%' }}/>
//         <div className="carousel-caption d-none d-md-block">
//           <h5>Third slide label</h5>
//           <p>Some representative placeholder content for the third slide.</p>
//         </div>
//       </div>
//     </div>
//     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
//       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//       <span className="visually-hidden">Previous</span>
//     </button>
//     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
//       <span className="carousel-control-next-icon" aria-hidden="true"></span>
//       <span className="visually-hidden">Next</span>
//     </button>
//   </div>
//       </div>
//     </div>
//   </div>
// </div>
  
//   )
// }

// export default Carousel
import React from 'react'

export default function Carousel() {
    return (
        <div>

            <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">

                <div className="carousel-inner " id='carousel'>
                    <div class=" carousel-caption  " style={{ zIndex: "9" }}>
                        <form className=" d-flex justify-content-center">  {/* justify-content-center, copy this <form> from navbar for search box */}
                            <input className="form-control me-2 w-75 bg-white text-dark" type="search" placeholder="Type in..." aria-label="Search" />
                            <button className="btn text-white bg-success" type="submit">Search</button>
                        </form>
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
    )
}
