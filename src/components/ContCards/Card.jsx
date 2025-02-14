

const Card = ({ bg, llave, namePlayer, children }) => {


  return (
    <div style={bg} className="card" key={llave}>
      <div className="card-header">
        <h1>BINGO</h1>
        <h3>name: {namePlayer}</h3>
      </div>
      {children}
    </div>
  );
};

export { Card };
