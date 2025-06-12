import type { IScore } from "../interfaces";

export default function YourScore(score: IScore) {
    return (
        <div className="flex flex-col items-end">
            <div className="text-gray-500 text-xs">คะแนนของคุณคือ</div>
            <div className="text-4xl">
                {parseInt(score.id).toLocaleString()}
            </div>
        </div>
    );
}

