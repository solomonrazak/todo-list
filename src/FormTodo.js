import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormTodo({ addTodo }) {
    const [value, setValue] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <Form onSubmit={handleSubmit}> 
      <Form.Group className="mb-3">
        <Form.Label><b>Add List</b></Form.Label>
        <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new activity" />
      </Form.Group>
      <Button variant="primary mb-3" type="submit">
        Add To List
      </Button>
    </Form>
    );
  }

  export default FormTodo;