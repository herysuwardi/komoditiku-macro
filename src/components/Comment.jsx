import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./comment.css";

const Comment = () => {
    return (
        <div className="wrapper__comment">             
            <Container> 
                <div className="row">
                    <div className="col-6">
                        <img src="/assets/comment.png" alt="..." />      
                    </div>
                    <div className="col-6">
                        <h1>Masukan komentar anda tentang <b>Komoditiku</b></h1>
                        <Form>
                            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                                <Form.Label></Form.Label>
                                <Form.Control type="email" placeholder="nama" />
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                                <Form.Label></Form.Label>
                                <Form.Control type="email" placeholder="profesi" />
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                <Form.Label></Form.Label>
                                <Form.Control as="textarea" placeholder="isi komentar atau pesan" rows={3} />
                            </Form.Group>
                        </Form>
                        <a href="#" className="btn">Kirim</a> 
                    </div>
                </div>                           
            </Container>
        </div>
  );
}

export default Comment;