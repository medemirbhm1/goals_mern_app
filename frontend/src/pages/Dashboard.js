import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import GoalForm from "../components/GoalForm";
import { getGoals, reset } from "../features/goals/goalSlice";
import Goal from "../components/Goal";
import Spinner from "../components/Spinner";
function Dashboard() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    } else {
      dispatch(getGoals());
    }
    return () => {
      dispatch(reset());
    };
  }, [user, message]);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <section className="heading">
        <h1>Welcome {user?.name}</h1>
        <p>Goals dashboard</p>
      </section>
      <GoalForm />
      <section className="content">
        {goals.length ? (
          goals.map((goal) => (
            <div>
              <Goal key={goal._id} goal={goal} />
            </div>
          ))
        ) : (
          <h3>You have not set any goals</h3>
        )}
      </section>
    </>
  );
}

export default Dashboard;
