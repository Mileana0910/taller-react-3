import React from "react";
import styles from "./Styles/CambiarTextoColor.styles.module.css";

class CambiarTextoColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: "Texto Principal",
      color: "green",
    };
  }

  cambiarTextoYColor = () => {
    this.setState({
      texto: "Texto Actualizado",
      color: "red",
    });
  };

  componentDidUpdate() {
    console.log("El componente se ha actualizado.");
  }

  componentWillUnmount() {
    console.log("El componente va ha desaparecer");
  }

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.h1}>Ejercicio 3 "Opcional"</h1>
        <p className={styles.texto} style={{ color: this.state.color }}>
          {this.state.texto}
        </p>
        <button className={styles.button} onClick={this.cambiarTextoYColor}>
          ACTUALIZAR TEXTO
        </button>
      </div>
    );
  }
}

export default CambiarTextoColor;
