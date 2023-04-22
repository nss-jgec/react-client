import { useForm, ValidationError } from "@formspree/react";
import { TextInput, Label,Textarea, Button } from "flowbite-react";
function ContactForm() {
  const [state, handleSubmit] = useForm("mvonqejy");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="h-60 max-w-xl m-auto flex flex-col justify-evenly">
      <TextInput id="email" type="email" name="email" placeholder="Email Address"/>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <TextInput id="number" type="tel" name="number" placeholder="Contact Number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
      <Textarea id="message" name="message" placeholder="Your Message Here"/>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <Button type="submit" disabled={state.submitting} outline={true} color={"dark"}>
        Submit
      </Button>
    </form>
  );
}
export default function Contact() {
  return (
    <div className="min-h-[84vh] flex flex-col lg:flex-row">
      <div className="flex flex-col flex-1 m-2">
        <img
          src="./contactUs.jpg"
          className="w-[70vh] m-auto"
          alt="placeholder"
        />
        <span className="-mt-20 absolute text-xs">
          Image by{" "}
          <a href="https://www.freepik.com/free-vector/flat-follow-us-background_3744379.htm#query=reach%20out%20us&position=1&from_view=keyword&track=ais">
            Freepik
          </a>
        </span>
      </div>
      <div className="flex-1 p-5 my-auto">
        <div className="text-2xl font-light">Contact Us</div>
        <ContactForm/>
      </div>
    </div>
  );
}
