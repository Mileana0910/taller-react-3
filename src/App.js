import React from "react";
// import Contador from "./Componentes/Contador";
// import Nombre from "./Componentes/Nombre";
// import CambiarTextoColor from "./Componentes/CambiarTextoColor";

// EJERCICIO 1
// function App() {
//   return (
//     <div>
//       <Contador />
//     </div>
//   );
// }
// export default App;

// EJERCICIO 2
// class App1 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { mostrarComponente: true };
//   }
//   toggleComponente = () => {
//     this.setState((prevState) => ({
//       mostrarComponente: !prevState.mostrarComponente,
//     }));
//   };
//   render() {
//     return (
//       <div>
//         <button onClick={this.toggleComponente}>
//           {this.state.mostrarComponente ? "OCULTAR NOMBRE" : "MOSTRAR NOMBRE"}
//         </button>
//         {this.state.mostrarComponente && <Nombre />}
//       </div>
//     );
//   }
// }
// export default App1;


// EJERCICIO 3
// class App2 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { mostrarComponente: true };
//   }
//   toggleComponente = () => {
//     this.setState((prevState) => ({
//       mostrarComponente: !prevState.mostrarComponente,
//     }));
//   };
//   render() {
//     return (
//       <div>
//         <button onClick={this.toggleComponente}>
//           {this.state.mostrarComponente ? "OCULTAR TEXTO" : "MOSTRAR TEXTO"}
//         </button>
//         {this.state.mostrarComponente && <CambiarTextoColor/>}
//       </div>
//     );
//   }
// }
// export default App2;