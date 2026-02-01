import { Button, Card, Flex, Form, Input, Typography } from "antd";
import { useState } from "react";

function App() {
  const [values, setValues] = useState(null);

  const form = Form.useForm();

  const onFinish = (values) => {
    setValues(values);
    form.resetFields();
  };

  return (
    <Flex vertical align="center" gap={"20px"}>
      <Form vertical align="center" onFinish={onFinish}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Name is required!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Description is required!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary">
            Send
          </Button>
        </Form.Item>
      </Form>
      <Card style={{ width: "300px" }}>
        <Typography>Sended Data</Typography>
        <Typography>Name: {values && values.name}</Typography>
        <Typography>Description: {values && values.description}</Typography>
      </Card>
    </Flex>
  );
}

export default App;
