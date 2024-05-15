// import logo from './logo.svg';
import './App.css';
import News from'./news';
function App() {
  return (
    <div className="App">
      <h1>Welcome to Ashok IT</h1>
      <News imgLink ="https://static.cricbuzz.com/a/img/v1/420x235/i1/c456794/breakdown-to-open-with-kohli.jpg" title ="Breakdown: To open with Kohli or not and the Dube flexibility" paragraph="he takeaways from the 15-member India squad announced for the 2024 T20
        World Cup" article="The current obsession with numbers and match-ups are not going to take cricket analysis forward. What might the next data revolution look like?" message="The current obsession with numbers "></News>
      <News imgLink ="https://static.cricbuzz.com/a/img/v1/420x235/i1/c457545/lsg-maximise-a-rare-bowling-da.jpg" title="Second News" paragraph="he win helps Pat Cummins' side climb back up into the top-four of the standings" message="Jasprit Bumrah's stellar bowling against LSG was our 'Carrier Room Air Conditioners Coolest Moment of the Match'"/>
      <News imgLink ="https://static.cricbuzz.com/a/img/v1/420x235/i1/c460194/death-bowling-helps-srh-prevai.jpg" title="Third News" paragraph="Chief selector Ajit Agarkar rubbished concerns about Virat Kohli's strike rate, and admitted leaving out Rinku Singh was a tough call
Breakdown: To open with Kohli or not and the Dube flexibility" message="Kolkata Knight Riders have won only one out of their 10 games against Mumbai Indians at the Wankhede Stadium"/>
    <News imgLink="https://static.cricbuzz.com/a/img/v1/420x235/i1/c459854/old-foes-come-knocking-as-kkr.jpg" title="Old foes come knocking as KKR reach the brink of playoffs" paragraph="Kolkata Knight Riders have won only one out of their 10 games against Mumbai Indians at the Wankhede Stadium" article="How MI can still make it to the playoffs"
    message="The CSK head coach was speaking after his side's third loss in the last four games"/>
    <News imgLink = "https://static.cricbuzz.com/a/img/v1/420x235/i1/c457704/ct-2025-pcb-earmarks-lahore-a.jpg" title="CT 2025: PCB earmarks Lahore as sole venue for India games" article="The eight-team 50-over competition is expected to kick off in mid-February next year, with Karachi and Rawalpindi being the other designated venues"
    message="While Pakistan will be playing matches across formats, Sri Lanka will be touring only to play Tests"/>
    </div>
  );
}

export default App;
