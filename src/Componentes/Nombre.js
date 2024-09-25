import React from "react";
import styles from "./Styles/nombre.styles.module.css";

class Nombre extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mensaje: "Milena" };
  }
  cambiarNombre = () => {
    this.setState({ mensaje: "Ana Milena Vásquez Tovar" });
  };

  componentDidUpdate() {
    console.log("El Nombre se ha actualizado correctamente");
  }

  componentWillUnmount() {
    console.log("El Nombre va ha desaparecer");
  }

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.h1}>Ejercicio 2 "Ciclo de Vida"</h1>
        <p className={styles.nombre}>{this.state.mensaje}</p>
        <button className={styles.button} onClick={this.cambiarNombre}>CAMBIAR NOMBRE</button>
      </div>
    );
  }
}
export default Nombre;
