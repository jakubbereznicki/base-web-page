export interface ApiHomeThreeBoxesData {
  title: string;
  three_boxes: ApiHomeBoxData[];
}

export interface ApiHomeBoxData {
  title: string;
  subtitle: string;
  image: string;
  background_color: string;
  color: string;
}
