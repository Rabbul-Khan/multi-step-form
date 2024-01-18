import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Step from './components/Step';

function App() {
  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen bg-magnolia">
        <div className=" min-w-1/2 max-w-max h-3/4 bg-white grid grid-cols-[1fr_2fr] place-items-center p-5 rounded-md">
          <div className='bg-[url("bg-sidebar-desktop.svg")] bg-cover w-full h-full rounded-md p-5 flex flex-col gap-5'>
            <Step stepNumber={1} stepTitle="your info" />
            <Step stepNumber={2} stepTitle="select plans" />
            <Step stepNumber={3} stepTitle="add-ons" />
            <Step stepNumber={4} stepTitle="summary" />
          </div>
          <div className="h-full p-5">
            <h1 className="text-2xl font-bold">Personal info</h1>
            <h2 className="pb-5 text-sm text-cool-gray">
              Please provide your name, email address, and phone number
            </h2>

            <form action="" className="flex flex-col gap-5">
              <Input label="Name" placeholder="Jane Doe" />
              <Input label="Email Address" placeholder="jane_doe@mail.com" />
              <Input label="Phone Number" placeholder="e.g. +1 234 567 890" />
              <Button />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
