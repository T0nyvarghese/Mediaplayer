import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const NavigateByUrl = useNavigate()
  return (
    <>
    <Row className='d-flex justify-content-center align-items-center mt-5'>
<Col lg={1}></Col>
<Col lg={5}>
  <h1>Welcome to <span className='text-warning'>Media Player</span></h1>
  <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, debitis distinctio neque ipsa laboriosam impedit a dolore ratione esse error laborum corporis similique ducimus, voluptatibus repudiandae libero ipsum commodi tempora! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate aperiam, iste optio vitae ratione officiis mollitia fuga sunt, delectus magnam hic quam corrupti, doloremque nam facere nisi laborum omnis sint. </p>
  <button onClick={()=>NavigateByUrl('/home')} className='btn btn-warning'>Get Started <i class="fa-solid fa-arrow-right"></i></button>
</Col>
<Col lg={1}></Col>
<Col lg={5}>
  <img src="https://laughingsquid.com/wp-content/uploads/2013/05/givelifebacktomusic5.gif" alt=""  />
</Col>

    </Row>
    <div className="container d-flex justify-content-center align-items-center mt-5 flex-column">
      <h3>Features</h3>
      <div className='d-flex justify-content-center align-items-center mt-5'>
      <Card className='p-4 m-3' style={{ width: '22rem' }}>
      <Card.Img variant="top" style={{width:'100%', height:'300px'}} src="https://th.bing.com/th?id=OIP.QFeVbSnzp6sqQd4r1yhcAwAAAA&w=213&h=293&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" />
      <Card.Body>
        <Card.Title>Managing Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card className='p-4 m-3' style={{ width: '22rem' }}>
      <Card.Img variant="top" style={{width:'100%', height:'300px'}}  src="https://www.bing.com/th/id/OGC.018d7b37b92de9de39a83b671b2e3564?pid=1.7&rurl=https%3a%2f%2fmedia1.tenor.com%2fimages%2f018d7b37b92de9de39a83b671b2e3564%2ftenor.gif%3fitemid%3d11755946&ehk=EKCKJHymnllrC4BMcjcvhJbWtD98j8w4dTWzFwFUFL8%3d" />
      <Card.Body>
        <Card.Title>Categorised Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
    
    <Card className='p-4 m-3' style={{ width: '22rem' }}>
      <Card.Img variant="top"  style={{width:'100%', height:'300px'}}  src="https://th.bing.com/th/id/OIP.oko-JywPLQdpkbKox4TCAwHaHa?w=189&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>

      </div>
    </div>

    <div className='w-100 d-flex justify-content-center align-items-center mt-5'>
        <div className='row w-100'>
          <div className='col-md-1'></div>
          <div className='col-md-10'>
            <div className='row border rounded border-2 w-100 p-4' style={{border:'white'}}>
              <div className='col-md-5'>
                <h3 className='text-warning'>Simple Fast and Powerful</h3>
                <h6 className='mt-5'><span style={{fontSize:'30px'}}>play everything : </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur temporibus quidem delectus? Nobis mollitia velit eveniet repellendus,</h6>

                <h6 className='mt-4'><span style={{fontSize:'30px'}}>play everything : </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur temporibus quidem delectus? Nobis mollitia velit eveniet repellendus, </h6>

                <h6 className='mt-4'><span style={{fontSize:'30px'}}>play everything : </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur temporibus quidem delectus? Nobis mollitia velit eveniet repellendus, </h6>
              </div>
              <div className='col-md-1'></div>
              <div className='col-md-6'>
              <iframe width="100%" height="500px" src="https://www.youtube.com/embed/mpqaH8QuVWM" title="Madhu Pakaroo | Varshangalkku Shesham |Pranav | Amrit Ramnath | Vineeth | Visakh | Merryland Cinemas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>

            </div>
          </div>
          <div className='col-md-1'></div>

        </div>

    </div>
    </>
  )
}

export default LandingPage