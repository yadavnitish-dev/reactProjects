
import Countdown from ".";

function Timer() {
  const handleOnTimeFinish = () => {
    console.log("Timer finished!!!");
  };
  return (
    <div>
      <Countdown initialTime={300} onTimeFinish={handleOnTimeFinish} />
    </div>
  );
}

export default Timer;
