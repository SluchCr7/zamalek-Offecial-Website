// import React from "react";
// import Image from "next/image";
// import { zamalekMatches } from "@/utils/data";
// import Match from "./Match";

// const MatchesLine = () => {
//   return (
//     <div className="w-full py-6  px-4 bg-gray-50 rounded-lg shadow-inner">
//       {/* <h3 className="text-xl font-bold text-gray-800 mb-4 px-2">مباريات الزمالك</h3> */}
//       <div className="overflow-x-auto matchLine scrollbar-hide flex space-x-6 w-full py-2 px-2">
//         {zamalekMatches.map((match, index) => (
//           <div
//             key={index}
//             className="min-w-[250px] rounded-xl cursor-pointer flex flex-col items-center p-4"
//           >
//             {/* لو تريد تعديل مكون Match يمكن تضمينه هنا بشكل منفصل */}
//             <Match match={match} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MatchesLine;


'use client'
import React from "react";
import { zamalekMatches } from "@/utils/data";
import Match from "./Match";
import { motion } from "framer-motion";

export default function MatchesSection() {
  return (
    <section className="bg-gray-50 py-10">
      <div className="px-4">

        {/* شريط أفقي متحرك */}
        <div className="relative overflow-hidden w-full mb-10">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...zamalekMatches, ...zamalekMatches].map((match, index) => (
              <div
                key={index}
                className="min-w-[250px] transition p-4"
              >
                <Match match={match} />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
