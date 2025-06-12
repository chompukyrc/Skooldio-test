import type { IScore } from "../interfaces";

export default function Score(score: IScore) {
    return (
        <div className="flex justify-between text-gray-500 text-xs pt-4">
            <div className="text-center">
                <span className="text-lg">{score.min.toLocaleString()}</span>
                <br />
                คะแนนต่ำสุด 60
            </div>

            <div className="w-[1px] h-8 bg-gray-400 opacity-30 m-1"></div>

            <div className="text-center">
                <span className="text-lg">{score.avg.toLocaleString()}</span>{" "}
                <br />
                คะแนนต่ำสุด 60
            </div>

            <div className="w-[1px] h-8 bg-gray-400 opacity-30 m-1"></div>

            <div className="text-center">
                <span className="text-lg">{score.max.toLocaleString()}</span>{" "}
                <br />
                คะแนนต่ำสุด 60
            </div>
        </div>
    );
}

