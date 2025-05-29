export interface IUniversityData {
    id: string;
    name: string;
    logo: string;
    roundSeats: number[];
    score: IScore;
    faculty: IFaculty;
    updatedAt: string;
    likes: number;
}

interface IFaculty {
    id: string;
    name: string;
    tagId: string;
    university: IUniversity;
}

interface IUniversity {
    id: string;
    name: string;
}

interface IScore {
    id: string;
    year: number;
    scoreType: string;
    min: number;
    max: number;
    avg: number;
}

