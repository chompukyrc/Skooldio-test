import type { IDepartmentData } from "../interfaces";
import Seat from "./Seat";
import Score from "./Score";
import Faculty from "./Faculty";
import Admission from "./Admission";
import YourScore from "./YourScore";

export default function DepartmentCard(data: IDepartmentData) {
    return (
        <div className="w-80 bg-white rounded-sm shadow-md m-4 p-4">
            <Faculty {...data} />
            {/* Divider */}
            <hr className="opacity-30 text-gray-400 my-4"></hr>
            <Seat seat={data.roundSeats} />

            {data.score !== null && (
                <>
                    <Admission />
                    <YourScore {...data.score} />
                    <Score {...data.score} />
                </>
            )}
        </div>
    );
}

