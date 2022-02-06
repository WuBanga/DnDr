import './SelectList.css';

/*
  Сделать универсальный компонент List
  <ListItem left={<Toggle/>} right={<Bla/>}/>
*/

export const SelectList = (props) => {
  const { children } = props;
  return <ul className="select-list">{children}</ul>;
};
