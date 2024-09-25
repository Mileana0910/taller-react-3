import React from "react";
import styles from "./Styles/contador.styles.module.css";

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Contador: 0 };
  }

  incrementar = () => {
    this.setState({ Contador: this.state.Contador + 1 });
  };
  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.h1}>Ejercicio 1 "Contador"</h1>
        <p className={styles.contador}>{this.state.Contador}</p>
        <button className={styles.button} onClick={this.incrementar}>
          INCREMENTAR
        </button>
      </div>
    );
  }
}
export default Contador;
