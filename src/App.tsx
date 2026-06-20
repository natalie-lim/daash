import Subheader from "./components/Subheader";
import DaashLogo from "./components/DaashLogo";
import TodoList from "./components/TodoList";
import GymTd from "./components/GymTd";
import NewFromFavs from "./components/NewFromFavs";
import ChangeItUp from "./components/ChangeItUp";
import NewsSummary from "./components/NewsSummary";
import AssignmentsDue from "./components/AssignmentsDue";
import NewApplications from "./components/NewApplications";
import JournalEntry from "./components/JournalEntry";
import WeatherWidget from "./components/WeatherWidget";
import GoogleCalendar from "./components/GoogleCalendar";

function App() {
  return (
    <div className="flex flex-col items-start m-4 gap-6">
      <div className="flex flex-row items-start gap-6">

        {/* first col */}
        <div className="w-[25%] flex flex-col gap-4">
          <DaashLogo />
          <div>
            <Subheader title="to-do today" color="#A3B49F" />
            <TodoList />
          </div>
          <div>
            <Subheader title="gym td" color="#A3B49F" />
            <GymTd />
          </div>
          <div>
            <Subheader title="new from favs" color="#A3B49F" />
            <NewFromFavs />
          </div>
        </div>

        {/* second col */}
        <div className="w-[50%] flex flex-col gap-4">
          <div>
            <Subheader title="news summary" color="#A3B49F" />
            <NewsSummary />
          </div>
          <div className="flex flex-row gap-4">
            <div className="w-[50%] flex flex-col gap-4">
              <div>
                <Subheader title="assignments due soon" color="#A3B49F" />
                <AssignmentsDue />
              </div>
              <div>
                <Subheader title="journal entry" color="#A3B49F" />
                <JournalEntry />
              </div>
            </div>
            <div className="w-[50%]">
              <Subheader title="new applications" color="#A3B49F" />
              <NewApplications />
            </div>
          </div>
        </div>

        {/* third col */}
        <div className="w-[25%] flex flex-col gap-4">
          <WeatherWidget />
          <GoogleCalendar />
        </div>

      </div>
      <ChangeItUp />
    </div>
  );
}

export default App;
