import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'reactstrap';

const data = [
  { id: 1, nombre_pelicula: 'Evil Dead Rise', genero: 'Terror' },
  { id: 2, nombre_pelicula: 'Mario Bros', genero: 'Animacion' },
  { id: 3, nombre_pelicula: 'Caballeros del Zodiaco', genero: 'Accion' },
  { id: 4, nombre_pelicula: 'Rapidos y Furiosos X', genero: 'Accion' },
  { id: 5, nombre_pelicula: 'Spider-Man', genero: 'Animacion' },
  { id: 6, nombre_pelicula: 'Guardianes de la Galaxia Vol.3', genero: 'Accion' },
];

class App extends React.Component {
  state = {
    data: data,
    form:{
      id:'',
      nombre_pelicula: '',
      genero: ''
    }
  }

  handleChange=e=>{
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }

  render() {
    return (
      <>
        <Container>
          <br />
          <Button color='success'>Insertar Nueva Pelicula</Button>
          <br /><br />

          <Table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre de la Pelicula</th>
                <th>Genero</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((elemento) => (
                <tr>
                  <td>{elemento.id}</td>
                  <td>{elemento.nombre_pelicula}</td>
                  <td>{elemento.genero}</td>
                  <td>
                    <Button color='primary'>Editar</Button>{'  '}
                    <Button color='danger'>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

        </Container>

        <Modal>
          <ModalHeader>
            <div><h3>Insertar Personaje</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Id:</label>
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </FormGroup>

            <FormGroup>
              <label>Nombre de la pelicula:</label>
              <input
                className="form-control"
                name="nombre_pelicula"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>Genero:</label>
              <input
                className="form-control"
                name="genero"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

      </>)
  }
}

export default App;
