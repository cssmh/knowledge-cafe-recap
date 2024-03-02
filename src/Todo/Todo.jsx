import PropTypes from "prop-types";
import { useContext } from "react";
import { YouBeauty } from "../App";
const Todo = ({ give }) => {
  
  const beauty = useContext(YouBeauty);

  const { id } = give;
  if (id == 4) {
    return <p className="pt-2 pr-12 text-xl font-bold">{beauty}</p>;
  }
  return <div></div>;
};

Todo.propTypes = {
  give: PropTypes.object.isRequired,
};

export default Todo;
