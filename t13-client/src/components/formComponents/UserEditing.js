import React from "react";
import { Form, Card, Button, Container, Row, Col } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

const UserEditing = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        lastName: "",
        roleId: "",
      }}
      /* ----------On submit handeler---------- */
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(values);
      }}
      /*  --------------------- validationSchema --------------------- */
      validationSchema={Yup.object().shape({
        name: Yup.string().required("Campo requerido."),
        lastName: Yup.string().required("Campo requerido."),
        roleId: Yup.string().required("Campo requerido."),
      })}
    >
      {/* --------------------- Formik Props --------------------- */}
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;

        /* --------------------- React-Bootstrap From ---------------------  */
        return (
          <Container className={"mt-5"}>
            <Row>
              <Col>
                <Card className={"shadow-sm"}>
                  <Card.Body>
                    {/*  */}
                    <Card.Title>Edición de Usuarios</Card.Title>
                    {/* ----------Form Tag Start---------- */}
                    <Form onSubmit={handleSubmit} className={"mb-3"}>
                      {/* ----------Name input----------*/}
                      <Form.Group controlId="formName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={!!errors.name && touched.name && "error"}
                          type="text"
                          placeholder="Nombre"
                        />

                        <Form.Control.Feedback type="invalid">
                          {errors.name}
                        </Form.Control.Feedback>
                      </Form.Group>
                      {/* ----------Last Name inpput---------- */}
                      <Form.Group controlId="formLastName">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                          name="lastName"
                          value={values.lastName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={
                            !!errors.lastName && touched.lastName && "error"
                          }
                          type="text"
                          placeholder="Apellido"
                        />
                        {/* ----------Error message---------- */}
                        <Form.Control.Feedback type="invalid">
                          {errors.lastName}
                        </Form.Control.Feedback>
                      </Form.Group>
                      {/* ----------Role Id input---------- */}
                      <Form.Group controlId="formRoleId">
                        <Form.Label>Rol Id</Form.Label>
                        <Form.Control
                          name="roleId"
                          value={values.roleId}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={
                            !!errors.roleId && touched.roleId && "error"
                          }
                          type="text"
                          placeholder="Rol Id "
                        />
                        {/* ----------Error message---------- */}
                        <Form.Control.Feedback type="invalid">
                          {errors.roleId}
                        </Form.Control.Feedback>
                      </Form.Group>
                      {/* ----------Submit button---------- */}
                      <Button
                        variant="primary"
                        size="sm"
                        block
                        type="submit"
                        className={"mt-4"}
                      >
                        Actualizar
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        );
      }}
    </Formik>
  );
};

export default UserEditing;
