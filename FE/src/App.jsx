import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("");

  const getData = async () => {
    await axios.get("http://localhost:8081/student").then((res) => {
      setData(res.data);
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8081/student", {
        nama: nama,
        kelas: kelas,
      })
      .then((res) => {
        getData();
        setNama("");
        setKelas("");
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1 className="bg-red-400">Welcome App</h1>

      <table border={1} className="flex flex-col">
        {data.map((item, index) => (
          <tr key={item.nama} className="flex flex-row">
            <td>{index + 1}</td>
            <td>{item.nama}</td>
            <td>{item.kelas}</td>
          </tr>
        ))}
      </table>

      <form>
        <input
          type="text"
          placeholder="Nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        <input
          type="text"
          placeholder="Kelas"
          value={kelas}
          onChange={(e) => setKelas(e.target.value)}
        />
        <button onClick={handlesubmit}>Submit</button>
      </form>
    </div>
  );
}
