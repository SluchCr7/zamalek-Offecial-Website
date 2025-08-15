import React from "react";
import { zamalekTable, zamalekAfrica } from "@/utils/data";

const Table = () => {
  const topFive = [...zamalekTable]
    .sort((a, b) => b.points - a.points)
    .slice(0, 4);

  const TableComponent = ({ title, data }) => (
    <div className="w-full md:w-1/2 p-6">
      <h2 className="text-2xl font-bold text-red-600 mb-4 border-b-4 border-red-600 pb-2">
        {title}
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 shadow-md rounded-xl overflow-hidden">
          <thead className="bg-red-600 text-white uppercase text-sm">
            <tr>
              <th className="px-4 py-3 text-left">#</th>
              <th className="px-4 py-3 text-left">Team</th>
              <th className="px-4 py-3 text-center">Pts</th>
              <th className="px-4 py-3 text-center">GF</th>
              <th className="px-4 py-3 text-center">GA</th>
              <th className="px-4 py-3 text-center">GD</th>
            </tr>
          </thead>
          <tbody>
            {data.map((team, index) => (
              <tr
                key={team.team}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-red-50 transition-colors duration-200`}
              >
                <td className="px-4 py-3 font-bold">{index + 1}</td>
                <td className="px-4 py-3 font-medium flex items-center gap-2">
                  {/* مثال على شعار النادي - يمكن إضافة شرط للشعار حسب الفريق */}
                  <img
                    src={`/teams/${team.Logo}`}
                    alt={team.team}
                    className="w-6 h-6 rounded-full"
                  />
                  {team.team}
                </td>
                <td className="px-4 py-3 text-center font-semibold">{team.points}</td>
                <td className="px-4 py-3 text-center">{team.goals_for}</td>
                <td className="px-4 py-3 text-center">{team.goals_against}</td>
                <td className="px-4 py-3 text-center">
                  {team.goals_for - team.goals_against}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto py-10 bg-white">
      <TableComponent
        title="Egyptian Premier League - Top 5"
        data={topFive}
      />
      <TableComponent
        title="CAF Champions League - Group A"
        data={zamalekAfrica}
      />
    </div>
  );
};

export default Table;
