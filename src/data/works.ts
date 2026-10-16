export type WorkType = "cover" | "poster";

export interface Work {
  id: string;
  title: string;
  type: WorkType;
  project?: string;
  src?: string;
  x: number;
  y: number;
  w: number;
  r: number;
  ratio: number;
}

export const works: Work[] = [
  { id: "face-glitch", title: "Face glitch", type: "cover", x: 14, y: 5, w: 19, r: 0, ratio: 1.3 },
  { id: "tought", title: "Tought", type: "poster", project: "tought", x: 30, y: 0, w: 21, r: 0, ratio: 1.45 },
  { id: "corbeau", title: "Corbeau", type: "cover", project: "corbeau", x: 22, y: 20, w: 19, r: 0, ratio: 1 },
  { id: "september", title: "September 2026", type: "poster", x: 50, y: 3, w: 16, r: 8, ratio: 1.35 },
  { id: "urbanization", title: "Urbanization", type: "poster", project: "urbanization", x: 56, y: 14, w: 24, r: 12, ratio: 1.4 },
  { id: "nintendo", title: "Nintendo 3DS", type: "cover", x: 40, y: 36, w: 11, r: 0, ratio: 1.5 },
  { id: "red-eyes", title: "Red eyes", type: "cover", x: 28, y: 44, w: 29, r: 40, ratio: 1 },
  { id: "grey-face", title: "Grey face", type: "cover", x: 16, y: 38, w: 12, r: -10, ratio: 1 }
];
