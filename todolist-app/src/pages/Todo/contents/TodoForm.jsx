import Card from "../../../components/Card";
import InputText from "../../../components/Form/InputText";

const TodoForm = () => (
    <>
        <Card>

            <Card.Title>Form</Card.Title>
            <Card.Body>
                <InputText id='title' label='Title' />
            </Card.Body>
            {/* <Card.Footer>Footer</Card.Footer> */}

        </Card>
    </>
)
export default TodoForm;