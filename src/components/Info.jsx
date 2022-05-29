const Info = ({ name, id, parent, type, position }) => {
  return (
    <div>
      <div>{name}</div>
      <div>{type}</div>
      <div>{id}</div>
      <div>{parent}</div>
      <div>{position}</div>
    </div>
  );
};

export default Info;
