import React, { useState, useEffect, useContext } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import { Header } from "../components/Header";
import { getUniqueSupervisors } from "../hooks/useFeelings";
import { Context } from "../context/UserContext";

function Dashboard() {
  const [feelings, setFeelings] = useState([]);
  const [supervisors, setSupervisors] = useState([]);
  const token = localStorage.getItem("token");
  const { userName, rol, area } = useContext(Context);
  const [isEditingActionTaken, setIsEditingActionTaken] = useState(false);
  const [selectedFeelingId, setSelectedFeelingId] = useState(null);
  const [actionTakenText, setActionTakenText] = useState("");
  const [isEditingSecondAction, setIsEditingSecondAction] = useState(false);
  const [secondAction, setSecondAction] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [feelingsPerPage] = useState(10);
  const [filter, setFilter] = useState({
    area: "",
    jobRelated: "",
    resing: "",
    supervisor: "",
    emotion: "",
    date: "",
  });

  useEffect(() => {
    axios
      .get("http://192.168.77.10:3000/api/feelings")
      .then((res) => setFeelings(res.data))
      .catch((err) => console.error(err));
  }, [actionTakenText]);

  const handleSaveActionTaken = async () => {
    try {
      const response = await axios.patch(
        `http://192.168.77.10:3000/api/${selectedFeelingId}`,
        {
          actionTaken: actionTakenText,
          actionTaker: userName,
        }
      );
      // Actualizar la lista de emociones en el estado para mostrar el cambio en la tabla
      setFeelings((prevFeelings) =>
        prevFeelings.map((feeling) =>
          feeling._id === selectedFeelingId
            ? { ...feeling, actionTaken: actionTakenText }
            : feeling
        )
      );
      // Reiniciar los estados de edición
      setIsEditingActionTaken(false);
      setSelectedFeelingId(null);
      setActionTakenText("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSaveSecondAction = async () => {
    try {
      const response = await axios.patch(
        `http://192.168.77.10:3000/api/second/${selectedFeelingId}`,
        {
          secondAction: secondAction,
        }
      );
      // Actualizar la lista de emociones en el estado para mostrar el cambio en la tabla
      setFeelings((prevFeelings) =>
        prevFeelings.map((feeling) =>
          feeling._id === selectedFeelingId
            ? { ...feeling, secondAction: secondAction }
            : feeling
        )
      );
      // Reiniciar los estados de edición
      setIsEditingSecondAction(false);
      setSelectedFeelingId(null);
      setSecondAction("");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchSupervisors = async () => {
      const data = await getUniqueSupervisors(token);
      setSupervisors(data);
    };

    fetchSupervisors();
  }, []);

  const handleFilterChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };

  const filteredFeelings = (() => {
    if (rol === "RHManager") {
      const matches = feelings.filter((feeling) => {
        let isMatch = true;

        if (filter.date !== "" && filter.date !== feeling.date.toString()) {
          isMatch = false;
        }

        if (filter.supervisor && filter.supervisor !== feeling.supervisor) {
          isMatch = false;
        }

        if (filter.emotion && filter.emotion !== feeling.emotion) {
          isMatch = false;
        }

        if (
          filter.jobRelated !== "" &&
          filter.jobRelated !== feeling.jobRelated.toString()
        ) {
          isMatch = false;
        }

        if (
          filter.resing !== "" &&
          filter.resing !== feeling.resing.toString()
        ) {
          isMatch = false;
        }

        return isMatch;
      });

      return matches;
    } else {
    return feelings.filter((feeling) => {
      if (area !== feeling.area) {
        return false;
      }

      if (filter.date !== "" && filter.date !== feeling.date.toString()) {
        return false;
      }

      if (filter.supervisor && filter.supervisor !== feeling.supervisor) {
        return false;
      }

      if (filter.emotion && filter.emotion !== feeling.emotion) {
        return false;
      }

      if (
        filter.jobRelated !== "" &&
        filter.jobRelated !== feeling.jobRelated.toString()
      ) {
        return false;
      }

      if (filter.resing !== "" && filter.resing !== feeling.resing.toString()) {
        return false;
      }

      return true;
    });
    }
  })();

  function truncateComment(comment) {
    if (comment.length > 200) {
      return `${comment.substring(0, 200)}...`;
    } else {
      return comment;
    }
  }

  const handleSelectFeeling = (id) => {
    setSelectedFeelingId(id);
  };

  const handleTakeAction = (id) => {
    handleSelectFeeling(id);
    setIsEditingActionTaken(true);
    const feeling = feelings.find((feeling) => feeling._id === id);
    setActionTakenText(feeling.actionTaken);
  };

  const handleSecondAction = (id) => {
    handleSelectFeeling(id);
    setIsEditingSecondAction(true);
    const feeling = feelings.find((feeling) => feeling._id === id);
    setSecondAction(feeling.secondAction);
  };

  const indexOfLastFeeling = currentPage * feelingsPerPage;
  const indexOfFirstFeeling = indexOfLastFeeling - feelingsPerPage;
  const currentFeelings = filteredFeelings.slice(
    indexOfFirstFeeling,
    indexOfLastFeeling
  );
  const totalPages = Math.ceil(feelings.length / feelingsPerPage);

  return (
    <>
      <Header />
      <DashboardContainer>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>
                <label>
                  Emotion
                  <select
                    name="emotion"
                    value={filter.emotion}
                    onChange={handleFilterChange}
                  >
                    <option value="">All</option>
                    <option value={filter.Happy}>Happy</option>
                    <option value={filter.Angry}>Angry</option>
                    <option value={filter.Neutral}>Neutral</option>
                    <option value={filter.Worried}>Worried</option>
                    <option value={filter.Sad}>Sad</option>
                  </select>
                </label>
              </th>
              <th>
                <label>
                  Job related
                  <select
                    name="jobRelated"
                    value={filter.jobRelated}
                    onChange={handleFilterChange}
                  >
                    <option value="">All</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </label>
              </th>
              <th>
                <label>
                  Thinking on Resign
                  <select
                    name="resing"
                    value={filter.resing}
                    onChange={handleFilterChange}
                  >
                    <option value="">All</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </label>
              </th>
              {((rol === "Manager") || (rol === "RHManager")) && <th>Comment</th>}
              <th>
                <label>
                  Supervisor
                  <select
                    name="supervisor"
                    value={filter.supervisor}
                    onChange={handleFilterChange}
                    list="supervisor-options"
                  >
                    <option value="">All</option>
                    {supervisors.map((supervisor) => (
                      <option key={supervisor} value={supervisor}>
                        {supervisor}
                      </option>
                    ))}
                  </select>
                  <datalist id="supervisor-options">
                    <option value="">All</option>
                    {supervisors.map((supervisor) => (
                      <option key={supervisor} value={supervisor}>
                        {supervisor}
                      </option>
                    ))}
                  </datalist>
                </label>
              </th>
              <th>
                <label>
                  Date
                  <input
                    type="date"
                    name="date"
                    onChange={handleFilterChange}
                    value={filter.date}
                  />
                </label>
              </th>
              <th>Take Action</th>
              <th>Action Taken</th>
            </tr>
          </thead>
          <tbody>
            {currentFeelings.map((feeling) => (
              <tr key={feeling._id}>
                <td>{feeling.name}</td>
                <td>{feeling.emotion}</td>
                <td>{feeling.jobRelated ? "Yes" : "No"}</td>
                <td>{feeling.resing ? "Yes" : "No"}</td>
                {((rol === "Manager") || (rol === "RHManager")) && 
                    <td>
                      <TruncatedComment>
                        {truncateComment(feeling.message)}
                      </TruncatedComment>
                    </td>
                  }
                <td>{feeling.supervisor}</td>
                <td>
                  {feeling.date} {feeling.time}
                </td>
                <td>
                  {!feeling.takeAction &&
                    !feeling.actionTaken &&
                    feeling.emotion !== "Happy" && (
                      <button
                        className="takeAction"
                        onClick={() => handleTakeAction(feeling._id)}
                      >
                        Take action
                      </button>
                    )}
                  {feeling.takeAction && feeling.actionTaken && (
                    <span>
                      {feeling.takeAction}{" "}
                      {((rol === "Manager") || (rol === "RHManager")) && !feeling.secondAction && (
                          <button
                            className="secondAction"
                            onClick={() => handleSecondAction(feeling._id)}
                          >
                            Second Action
                          </button>
                        )}
                    </span>
                  )}
                </td>
                <td>
                  {feeling._id === selectedFeelingId &&
                  isEditingSecondAction ? (
                    <div>
                      <textarea
                        value={secondAction}
                        onChange={(e) => setSecondAction(e.target.value)}
                      />
                      <button
                        className="takeAction"
                        onClick={handleSaveSecondAction}
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <span></span>
                  )}
                  {feeling._id === selectedFeelingId && isEditingActionTaken ? (
                    <div>
                      <textarea
                        value={actionTakenText}
                        onChange={(e) => setActionTakenText(e.target.value)}
                      />
                      <button
                        className="takeAction"
                        onClick={handleSaveActionTaken}
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <>
                      <p>{feeling.actionTaken}</p>
                      {feeling.secondAction && (
                        <p>
                          <span>Manager action:</span>
                          {feeling.secondAction}
                        </p>
                      )}
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="Buttons-container">
          {currentPage > 1 && (
            <button
              className="ButtonStyle"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Back
            </button>
          )}
          {currentPage < totalPages && (
            <button
              className="ButtonStyle"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Forward
            </button>
          )}
        </div>
      </DashboardContainer>
    </>
  );
}

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;

  .ButtonStyle {
    text-decoration: none;
    text-align: center;
    margin-top: 20px;
    padding: 10px 20px;
    background: linear-gradient(-45deg, #00bfff, #0080ff, #5cdced, #c246ef);
    background-size: 400% 400%;
    animation: ${gradient} 15s ease infinite;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .Buttons-container {
    display: flex;
    width: 200px;
    justify-content: space-between;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-family: "Roboto", sans-serif;

  label {
    display: flex;
    flex-direction: column;

    select,
    input {
      margin-top: 0.5rem;
      padding: 0.5rem;
      border: 1px solid #dddddd;
      border-radius: 5px;
    }
  }

  th {
    background-color: #f8f8f8;
    width: auto;
    color: #333333;
    font-weight: bold;
    font-size: 18px;
    padding: 5px;
    text-align: center;
    border-bottom: 2px solid #dddddd;
  }

  td {
    background-color: #ffffff;
    color: #333333;
    padding: 10px;
    border: 1px solid #dddddd;
    max-width: 200px;
    text-align: center;

    .takeAction {
      text-decoration: none;
      text-align: center;
      padding: 5px 10px;
      background: #24df9d;
      background-size: 400% 400%;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .secondAction {
      text-decoration: none;
      text-align: center;
      padding: 3px 5px;
      background: #c16ed1;
      background-size: 400% 400%;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    &:first-child {
      border-left: 2px solid #dddddd;
    }

    &:last-child {
      border-right: 2px solid #dddddd;
    }
  }
`;

const TruncatedComment = styled.span`
  max-height: 3.6rem; /* Dos líneas con el tamaño de fuente actual */
  overflow: hidden;
`;

export { Dashboard };
