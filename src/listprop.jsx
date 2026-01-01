function Listprop(props) {

  const cate = props.cate;
  const itemlist = props.item;

  const listitem = itemlist.map(item => (
    <li key={item.id}>
      {item.name} : <b>{item.cal}</b>
    </li>
  ));

  return (
    <>
      <h3>{cate}</h3>
      <ol>{listitem}</ol>
    </>
  );
}

export default Listprop;
