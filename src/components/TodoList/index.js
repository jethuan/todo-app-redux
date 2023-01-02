import { Col, Row, Input, Button, Select, Tag } from "antd";
import { useDispatch } from "react-redux";
import Todo from "../Todo";
import { addTodo } from "../../redux/actions";
import { useState } from "react";
import { v4 as uuid } from "uuid";
export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");
  const dispatch = useDispatch();

  const handleAddButtonClick = () => {
    //bắn dispatch  action
    dispatch(
      addTodo({
        id: uuid(),
        name: todoName,
        priority: priority,
        completed: false,
      })
    );
  };

  const handleInputChane = (e) => {
    setTodoName(e.target.value);
  };
  const handleInputPriorityChane = (value) => {
    setPriority(value);
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        <Todo name="Learn React" prioriry="High" />
        <Todo name="Learn Redux" prioriry="Medium" />
        <Todo name="Learn JavaScript" prioriry="Low" />
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input onChange={handleInputChane} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handleInputPriorityChane}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
