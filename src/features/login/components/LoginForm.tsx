import { FormControl, FormLabel, Input, FormErrorMessage, Button } from "@chakra-ui/react";
import { Form, Formik, Field, } from "formik"

const LoginForm: React.FC = () => {
    return <Formik
    initialValues={{
        number: ''
    }}
    onSubmit={() => {}}
    > 
    <Form>
          {/* <Field name='name' validate={validateName}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel htmlFor='name'>First name</FormLabel>
                <Input {...field} id='name' placeholder='name' />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field> */}
          <Button
            mt={4}
            colorScheme='teal'
            //isLoading={props.isSubmitting}
            type='submit'
          >
            Submit
          </Button>
        </Form>
    </Formik >
}

export default LoginForm;