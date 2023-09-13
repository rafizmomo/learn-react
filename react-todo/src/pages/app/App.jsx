import Card from '../../components/Card'
import Button from '../../components/form/Button';
import Input from '../../components/form/Input';
import Modal from '../../components/form/Modal';

const App = () => {
  return (
    <>
      <main className=" container-xl mx-auto h-full flex items-center">
        <div className="p-8 w-full flex flex-col gap-4">
          <h1 className="text-lg font-bold text-center mb-4">Todo List App</h1>
          <div className=''>
            <Button>Add Task</Button>
          </div>
          <Modal>
            <Modal.Title>aaaa</Modal.Title>
            <Modal.Title>aaaa</Modal.Title>
          </Modal>
          <div className=" grid md:grid-cols-4 gap-4">
            {/* <Card>
              <Card.Title className={`text-slate-500`}>Todo</Card.Title>
              <Card.Body className="">
                <Input className={` w-full`} />
              </Card.Body>
            </Card> */}
            {/* <Card>
              <Card.Title className={`text-yellow-500`}>In Progress</Card.Title>
              <Card.Body></Card.Body>
            </Card>
            <Card>
              <Card.Title className={`text-green-500`}>Done</Card.Title>
              <Card.Body></Card.Body> 
            </Card>
            <Card>
              <Card.Title className={`text-red-500`}>Failed</Card.Title>
              <Card.Body></Card.Body> 
            </Card> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
