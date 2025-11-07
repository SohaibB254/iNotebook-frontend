import Notes from "../components/Notes"
export default function Home(props) {
  return (
    <div>
       <Notes showAlert={props.showAlert}/>
    </div>
  );
}
